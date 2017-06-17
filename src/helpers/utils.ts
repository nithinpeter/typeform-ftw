export const __KEYPRESS_LISTENER_DISABLED__ = '__KEYPRESS_LISTENER_DISABLED__';

export const enableAppKeyPressListener = () => {
  window[__KEYPRESS_LISTENER_DISABLED__] = false;
};

export const disableAppKeyPressListener = () => {
  window[__KEYPRESS_LISTENER_DISABLED__] = true;
};

export const shouldTriggerAppKeyPressCb = () => {
  return !window[__KEYPRESS_LISTENER_DISABLED__];
};
