import type { RouteLocationNormalized } from 'vue-router';
import { useAccount } from '~/composables/account';
import { isEmpty } from "~/composables/common";

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized) => {
  if (to.path == '/error/notMobile') return;
  if (to.path == '/error/403') return;
  if (to.path == '/error/404') return;
  if (to.path == '/error/500') return;
  if (to.path == '/') return;

  const { account } = useAccount();

  // ログイン認証チェック
  if (isEmpty(account.value) || !account.value.isVerify) {
    console.log('not authenticated');
    return await navigateTo('/');
  }
});