import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import { VBtn } from 'vuetify/lib';
import { VDialog } from 'vuetify/lib';

Vue.use(Vuetify);
Vue.component('v-btn',VBtn);
Vue.component('v-dialog',VDialog);
export default new Vuetify({
});
