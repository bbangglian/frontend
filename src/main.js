import { createApp } from 'vue'
import App from './App.vue'


// Vue 애플리케이션 생성 ===================
const app = createApp(App);


//저장소 ===================================
import { createPinia } from 'pinia';
const pinia=createPinia();
app.use(pinia);

export { pinia }

import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;


//전역 사용 기능 등록 =============================
import jQuery from 'jquery';
// window.jjQuery = window.$$ = jQuery;


import common from '@/assets/js/utils/common'
window.Common = common;


// 애플리케이션 마운트  ========================
app.mount('#app');
