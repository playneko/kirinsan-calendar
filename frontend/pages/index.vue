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
    <div class="text-center margin-top_20 margin-left_25 font-main-title">
      ❤️기린상カップル❤️
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
    <div v-if="!isEmpty(getDetailDates) && getDetailDates.length > 1" class="margin-top_20">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStates } from "../composables/states";
import { isEmpty, dateRaplace, withOfDate, calendarOfDate, calendarOfDetail } from "~/composables/common";

const config = useRuntimeConfig();
const { getDetailDates, setDetailDates } = useStates();

// サーバから情報取得
const { data: posts, pending } = await useFetch(config.public.apiCalendarList, { lazy: true });

// 付き合った日取得
const withOfDateData = withOfDate(posts.value);

// カレンダー計算
const calendarOfDateData = calendarOfDate(posts.value);
const attributes = ref(calendarOfDateData);

// カレンダー選択
const selectedValue = (event) => {
  try {
    // カレンダー詳細
    const thisDate = dateRaplace(event.target.attributes['aria-label'].value);
    const calendarOfDetailData = calendarOfDetail(posts.value, thisDate);
    setDetailDates(calendarOfDetailData);
    console.log(calendarOfDetailData);
  } catch {
  }
};
</script>