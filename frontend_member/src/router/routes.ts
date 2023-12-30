import { RouteRecordRaw } from 'vue-router';

/* get theme from .env */
const theme = process.env.THEME ? process.env.THEME : 'default';

/* default pages */
let layout = import(`layouts/default/MainLayout.vue`);
let pages = [{ name: '', path: '', component: () => import('pages/default/home/Home.vue') }];

/* switch routes based on themes */
switch (theme) {
  case "default":
    layout = import(`layouts/default/MainLayout.vue`);
    pages = [
      { name: 'home', path: '/', component: () => import('pages/default/home/Home.vue') },
    ];
  break;
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => layout,
    children: pages,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
