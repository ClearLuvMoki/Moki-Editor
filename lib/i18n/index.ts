import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUS from './en-us';
import zhCN from './zh-cn';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      'en-Us': {
        translation: enUS,
      },
      'zh-CN': {
        translation: zhCN,
      },
    },
    preload: ['zh-CN', 'en-Us'],
    fallbackLng: 'zh-CN',
    lng: 'zh-CN',
  });
