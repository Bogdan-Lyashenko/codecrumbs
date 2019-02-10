export const detectMobile = () =>
  window.navigator &&
  /iPhone|iPad|Android|webOS|BlackBerry|Windows Phone/i.test(window.navigator.userAgent);

export const isMobile = detectMobile();
