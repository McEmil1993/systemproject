import { RouteRecordRaw } from 'vue-router';
import MemberOnly from '../middleware/member_only';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MemberLayout.vue'),
    children:
    [
      { name: 'dashboard', path: '/', component: () => import('pages/IndexPage.vue') },
      { name: 'member_list', path: '/member/member_list', component: () => import('pages/member_management/MemberList/MemberList.vue') },
      { name: 'member_monitoring', path: '/member/member_monitoring', component: () => import('pages/member_management/MemberMonitoring/MemberMonitoring.vue') },
      { name: 'member_list_charge', path: '/member/member_list_charge', component: () => import('pages/member_management/MemberListCharge/MemberListCharge.vue') },
      { name: 'member_charge_monitoring', path: '/member/member_charge_monitoring', component: () => import('pages/member_management/MemberChargeMonitoring/MemberChargeMonitoring.vue') },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children:
    [
      { name: 'login', path: '/login', component: () => import('pages/authentication/Login.vue') },
    ],
  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
