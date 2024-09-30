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
    <div class="margin-top_20 margin-left_25">
      付き合った日：<span class="font-title">{{ withOfDateData }}</span>
    </div>
    <div class="text-center margin-top_20">
      <client-only>
        <VCalendar
          style="width: 90%"
          trim-weeks
          :attributes="attributes"
        />
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { withOfDate, calendarOfDate, calendarOfDetail } from "~/composables/common";

const config = useRuntimeConfig();
const { data: posts, pending } = await useFetch(config.public.apiCalendarList, { lazy: true })
const withOfDateData = withOfDate(posts.value);
const calendarOfDateData = calendarOfDate(posts.value);

console.log(posts.value);
console.log(calendarOfDateData);

const attributes = ref(calendarOfDateData);
</script>