<template>
    <div class="main">
        <!-- main content-->
        <div class="main__sidebar">
            <div class="logo" :style="`background-image: url('${theme}/images/logo.png')`"></div>
            <div class="left_top_menu">
                <div class="gift-container">
                    <div class="icon">
                        <img :src="`${theme}/images/menu03_h.png`" class="hover_icon">
                    </div>
                    <div class="label">
                        보너스
                    </div>
                </div>  
            </div>
            <main-layout-side-nav></main-layout-side-nav>
        </div>
        <div class="main__content">
            <div class="main__container">
                <div class="main__header">
                    <main-layout-header :is_right_sidebar_open="is_right_sidebar_open" @openLoginDialog="openLoginDialog" @openRegistrationDialog="openRegistrationDialog"  @toggleRightSidebar="toggleRightSidebar"></main-layout-header>
                    <router-view />
                </div>

                <div :class="is_right_sidebar_open ? 'open' : 'closed'" class="main__right_sidebar">
                    <main-layout-right-sidebar></main-layout-right-sidebar>
                </div>
            </div>
        </div>

        <!-- popup dialog -->
        <q-dialog v-model="is_login_dialog_open">
            <login-dialog></login-dialog>
        </q-dialog>
        <!-- popup dialog -->
        <q-dialog v-model="is_registration_dialog_open">
            <registration-dialog></registration-dialog>
        </q-dialog>
    </div>
</template>
  
<style lang="scss" scoped src="./MainLayout.scss"></style>

<script lang="js">
import MainLayoutSideNav from './MainLayoutSideNav.vue';
import MainLayoutHeader from './MainLayoutHeader.vue';
import MainLayoutRightSidebar from './MainLayoutRightSidebar.vue';
import LoginDialog from '../../pages/default/login/LoginDialog.vue';
import RegistrationDialog from '../../pages/default/registration/RegistrationDialog.vue';

export default {
    name: 'MainLayout',
    components: { MainLayoutSideNav, MainLayoutHeader, LoginDialog, RegistrationDialog, MainLayoutRightSidebar },
    data:() =>({
        is_right_sidebar_open: true,
        is_login_dialog_open: false,
        is_registration_dialog_open: false,
    }),
    methods: {
        toggleRightSidebar() {
            this.is_right_sidebar_open = !this.is_right_sidebar_open;
        },
        openLoginDialog() {
           this.is_login_dialog_open = true;
        },
        openRegistrationDialog() {
            this.is_registration_dialog_open = true;
        }
    },
    mounted() {
    }
}
</script>