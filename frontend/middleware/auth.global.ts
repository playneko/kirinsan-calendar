import type { RouteLocationNormalized } from 'vue-router';
import { useAccount } from '~/composables/account';
import { isEmpty } from "~/composables/common";

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized) => {
  const { account, setAccount } = useAccount();
  const userInfo = useCookie<object | null>('userInfo');

  // 認証情報が存在するかチェック
  if (isEmpty(account.value) && userInfo !== null && userInfo.value !== undefined) {
    setAccount(userInfo.value);
    return await navigateTo('/calendar');
  }

  if (to.path == '/error/notMobile') return;
  if (to.path == '/error/403') return;
  if (to.path == '/error/404') return;
  if (to.path == '/error/500') return;
  if (to.path == '/') return;

  // ログイン認証チェック
  if (isEmpty(account.value) || !account.value.isVerify) {
    // console.log('not authenticated');
    return await navigateTo('/');
  }
});