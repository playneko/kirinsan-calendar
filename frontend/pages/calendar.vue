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
          @click="dialogToggle"
        >
          イベント追加
        </v-btn>
      </div>
    </div>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-calendar"
        :title="dateRaplace2(thisDate) + 'イベント追加'"
      >
        <v-container v-if="!isEmpty(exception)" class="mx-auto font-small" width="95%">
          <v-alert
            :text="exception"
            title="エラー"
            type="error"
          ></v-alert>
        </v-container>

        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-select
                clearable
                label="イベント"
                v-model="selectType"
                :items="['誕生日','記念日','休暇','その他']"
              ></v-select>
            </v-col>
          </v-row>
          <v-row dense class="calendar-stamp text-center" v-if="!isEmpty(selectType)">
            <v-col
              v-for="item in imageList"
              :key="item.key"
              no-gutters
              :class="item.key === selectImage ? 'calendar-select' : ''"
              @click="selectImage = item.key"
            >
              <v-sheet class="pa-1 ma-1">
                <v-avatar size="x-large">
                  <v-img
                    :src="item.value"
                  ></v-img>
                </v-avatar>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-select
                clearable
                label="カラー"
                v-model="selectColor"
                :items="['green','pink','blue','red','black','purple','orange']"
              ></v-select>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-checkbox
                v-model="selectRepeat"
                label="繰り返し"
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row dense v-if="!isEmpty(selectType)">
            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="イベント内容"
                v-model="eventTitle"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <template v-slot:actions>
          <v-card-actions>
            <v-btn
              color="grey-lighten-1"
              text="Close"
              variant="flat"
              :disabled="isLoading"
              :loading="isLoading"
              @click="dialog = false"
            ></v-btn>

            <v-spacer></v-spacer>

            <v-btn
              color="blue-darken-1"
              text="Save"
              variant="flat"
              :disabled="isLoading"
              :loading="isLoading"
              @click="calendarEventAdd"
            ></v-btn>
          </v-card-actions>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStates } from "../composables/states";
import { useLoading } from "../composables/loading";
import { useException } from "../composables/exception";
import {
  isEmpty,
  dateRaplace,
  dateRaplace2,
  withOfDate,
  calendarOfDate,
  calendarOfDetail,
  imageList,
  getType,
  getDateSplit
} from "../composables/common";

const selectType = ref();
const selectImage = ref();
const selectColor = ref();
const selectRepeat = ref();
const eventTitle = ref();
const attributes = ref([]);
const withOfDateData = ref();
const postData = ref();
const dialog = ref(false);
const activeImage = ref('calendar-select');
const config = useRuntimeConfig();
const { isLoading, setLoading } = useLoading();
const { exception, setException } = useException();
const { thisDate, getDetailDates, setThisDate, setDetailDates } = useStates();

// console.log(imageList);

const getAttributes = async () => {
  // サーバから情報取得
  // const { data: posts, pending } = await useFetch(config.public.apiCalendarList, { lazy: true });
  const { data: posts, pending } = await useAsyncData('item', () => $fetch(`${config.public.apiCalendarList}`));
  postData.value = posts.value;

  // 付き合った日取得
  const getWithOfDate = await withOfDate(postData.value);
  withOfDateData.value = getWithOfDate;
  // console.log(withOfDateData);

  // カレンダー計算
  const getCalendarOfDate = await calendarOfDate(postData.value);
  attributes.value = getCalendarOfDate;
  // console.log(calendarOfDateData);
}

// カレンダー選択
const selectedValue = (event) => {
  try {
    // 選択日変換
    const selectDate = dateRaplace(event.target.attributes['aria-label'].value);
    setThisDate(selectDate);

    // カレンダー詳細
    const calendarOfDetailData = calendarOfDetail(postData.value, selectDate);
    setDetailDates(calendarOfDetailData);
    // console.log(calendarOfDetailData);
  } catch {
    setThisDate(null);
    setDetailDates([]);
  }
};

// 選択カレンダーリフレッシュー
const refreshValue = () => {
  try {
    // カレンダー詳細
    const calendarOfDetailData = calendarOfDetail(postData.value, thisDate.value);
    setDetailDates(calendarOfDetailData);
  } catch {
    setThisDate(null);
    setDetailDates([]);
  }
};

// イベント追加
const calendarEventAdd = async () => {
  setException(null);
  setLoading(true);

  // dialog.value = false;
  if (isEmpty(selectType.value)) {
    setException("イベントを選択してください。");
    setLoading(false);
  }
  if (isEmpty(selectImage.value)) {
    setException("イメージを選択してください。");
    setLoading(false);
  }
  if (isEmpty(selectColor.value)) {
    setException("カラーを選択してください。");
    setLoading(false);
  }
  if (isEmpty(eventTitle.value)) {
    setException("イベント内容を入力してください。");
    setLoading(false);
  }

  const typeVal = getType(selectType.value);
  const dateVal = getDateSplit(thisDate.value);
  const { data, pending } = await useAsyncData('item', () => $fetch(`${config.public.apiCalendarEventAdd}`, {
    method: "POST",
    body: {
      title: eventTitle.value,
      type: typeVal,
      year: !isEmpty(selectRepeat.value) ? null : dateVal[0],
      month: dateVal[1],
      day: dateVal[2],
      image: selectImage.value,
      color: selectColor.value,
      repeat: isEmpty(selectRepeat.value) ? 0 : 1,
      content: null
    }
  }));

  if (!isEmpty(data.value)) {
    setLoading(false);

    if (!data.value.success) {
      setException(data.value.message);
    } else {
      await getAttributes();
      await refreshValue();
      dialog.value = false;
    }
  } else {
    setException("システムエラーが発生しました。");
    setLoading(false);
  }
};

// イベント追加ダイアログ
const dialogToggle = () => {
  setException(null);
  setLoading(false);

  dialog.value = true;
  selectType.value = null;
  selectImage.value = null;
  selectColor.value = null;
  selectRepeat.value = null;
  eventTitle.value = null;
}

getAttributes();
</script>