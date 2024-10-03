<template>
  <div>
    <v-container v-if="!isEmpty(exception)" class="mx-auto" width="95%">
      <v-alert
        :text="exception"
        title="エラー"
        type="error"
      ></v-alert>
    </v-container>

    <v-container v-if="!isVerify" class="mx-auto margin-top_20" width="80%">
      <h3 class="text-h6 mb-4">アカウント認証</h3>

      <v-text-field
        label="E-mail"
        variant="outlined"
        single-line
        v-model="email"
      ></v-text-field>
      <v-btn
        :disabled="isLoading"
        :loading="isLoading"
        class="text-none mb-4"
        color="indigo-darken-3"
        size="x-large"
        variant="flat"
        block
        @click="optVerifyCheck"
      >
        メール認証
      </v-btn>
    </v-container>
    <div
      class="py-8 px-6 text-center mx-auto ma-4"
      elevation="12"
      max-width="400"
      width="100%"
      v-if="isVerify"
    >
      <h3 class="text-h6 mb-4">アカウント認証</h3>

      <div class="text-body-2">
        入力したメールアドレスを確認後、<br>
        認証番号をメールに送り致します。<br>
        しばらくして、メールを確認してください。
      </div>

      <v-sheet color="surface">
        <v-otp-input
          v-model="opt"
          type="password"
          variant="solo"
        ></v-otp-input>
      </v-sheet>

      <v-btn
        class="my-4"
        color="light-blue-darken-2"
        height="40"
        text="コード認証"
        variant="flat"
        width="70%"
        @click="optVerifyAccount"
      ></v-btn>

      <div class="text-caption">
        認証メールが届いてない場合、 <a href="#">再送信</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useException } from "~/composables/exception";
import { useLoading } from "~/composables/loading";
import { useAccount } from "~/composables/account";
import { useVerify } from "~/composables/verify";
import { useDatas } from "~/composables/datas";
import { isEmpty } from "~/composables/common";

const config = useRuntimeConfig();
const { exception, setException } = useException();
const { isLoading, setLoading } = useLoading();
const { isVerify, setVerify } = useVerify();
const { account, setAccount } = useAccount();
const { datas, setDatas } = useDatas();
const email = ref();
const opt = ref();

setLoading(false);
setVerify(false);

// メールアドレスチェックと認証番号発送
const optVerifyCheck = async () => {
  setException(null);
  setLoading(true);

  if (isEmpty(email.value)) {
    setException("メールアドレスを入力してください。");
    setLoading(false);
  } else {
    const { data, pending } = await useAsyncData('item', () => $fetch(`${config.public.apiOptVerifyCheck}`, {
      method: "POST",
      body: {
        email: email.value
      }
    }));

    if (!isEmpty(data.value)) {
      setDatas(data.value);
      setLoading(false);

      if (!datas.value.success) {
        setException(datas.value.message);
      } else {
        setVerify(true);
      }
    } else {
      setException("システムエラーが発生しました。");
      setLoading(false);
    }
  }
}
// 認証番号確認
const optVerifyAccount = async () => {
  setException(null);
  setLoading(true);

  if (isEmpty(opt.value)) {
    setException("認証番号を入力してください。");
    setLoading(false);
  } else {
    const { data, pending } = await useAsyncData('item', () => $fetch(`${config.public.apiOptVerifyAccount}`, {
      method: "POST",
      body: {
        email: email.value,
        pin_number: opt.value
      }
    }));

    if (!isEmpty(data.value)) {
      setDatas(data.value);
      setLoading(false);

      if (!datas.value.success) {
        setException(datas.value.message);
        setLoading(false);
      } else {
        // 成功
        setAccount({
          isVerify: true,
          email: email.value
        });
        setLoading(false);
        await navigateTo('/calendar');
      }
    } else {
      setException("システムエラーが発生しました。");
      setLoading(false);
    }
  }
}
// 認証番号再発送
const optVerifyResend = () => {
  setLoading(true);
  console.log(opt.value);
}
</script>