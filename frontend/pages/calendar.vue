<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="100%"
    >
      <v-img
        height="270px"
        src="/assets/images/pixil-frame-0.png"
        cover
        class="background_aeff50 top-left-radius_15 top-right-radius_15"
      ></v-img>
    </v-card>
    <div class="font-main-title calendar-title">
      <div class="anime-rotete">❤️</div>
      <div>기린상カップル</div>
      <div class="anime-rotete">❤️</div>
    </div>
    <div class="margin-top_10 margin-left_25">
      付き合った日：<span class="font-title">{{ withOfDateData }}</span>
    </div>
    <div class="text-center margin-top_20">
      <client-only>
        <VCalendar
          style="width: 90%"
          trim-weeks
          :attributes="attributes"
          @click="selectedValue($event)"
        />
      </client-only>
    </div>
    <div v-show="!isEmpty(getDetailDates) && getDetailDates.length > 1" class="margin-top_20">
      <v-card
        class="mx-auto"
        max-width="90%"
      >
        <v-list
          :items="getDetailDates"
          lines="three"
          item-props
        >
          <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle"></div>
          </template>
        </v-list>
      </v-card>
    </div>
    <div v-if="!isEmpty(thisDate)" class="text-center margin-center width-90">
      <div class="margin-top_10 margin-bottom_10">
        <v-btn
          class="text-none mb-4"
          color="info"
          size="large"
          variant="flat"
          block
        >
          {{dateRaplace2(thisDate)}} 予定追加
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStates } from "../composables/states";
import { isEmpty, dateRaplace, dateRaplace2, withOfDate, calendarOfDate, calendarOfDetail } from "../composables/common";

const config = useRuntimeConfig();
const { thisDate, getDetailDates, setThisDate, setDetailDates } = useStates();

// サーバから情報取得
// const { data: posts, pending } = await useFetch(config.public.apiCalendarList, { lazy: true });
const { data: posts, pending } = await useAsyncData('item', () => $fetch(`${config.public.apiCalendarList}`));

// 付き合った日取得
const withOfDateData = await withOfDate(posts.value);
// console.log(withOfDateData);

// カレンダー計算
const calendarOfDateData = await calendarOfDate(posts.value);
const attributes = ref(calendarOfDateData);
// console.log(calendarOfDateData);

// カレンダー選択
const selectedValue = (event) => {
  try {
    // 選択日変換
    const selectDate = dateRaplace(event.target.attributes['aria-label'].value);
    setThisDate(selectDate);

    // カレンダー詳細
    const calendarOfDetailData = calendarOfDetail(posts.value, selectDate);
    setDetailDates(calendarOfDetailData);
    // console.log(calendarOfDetailData);
  } catch {
    setThisDate(null);
    setDetailDates([]);
  }
};
</script>