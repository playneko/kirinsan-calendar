import type { RouteLocationNormalized } from 'vue-router';

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized) => {
  if (to.path == '/error/notMobile') return;

  const device = useDevice();

  if (!device.isMobile) {
    console.log('not mobile');
    return await navigateTo('/error/notMobile');
  }
});