<template>
    <div class="header non-selectable">
        <div class="header__left">
            <div class="nav-group transition ">
                <div class="icon">
                    <img class="default" :src="`${theme}/images/menu01.png`">
                    <img class="hover"  :src="`${theme}/images/menu01_h.png`">
                </div>
                <div class="nav-group__label">카지노</div>
            </div>
            <div class="nav-group">
                <div class="icon">
                    <img class="default" :src="`${theme}/images/menu02.png`">
                    <img class="hover"  :src="`${theme}/images/menu02_h.png`">
                </div>
                <div class="nav-group__label">슬롯머신</div>
            </div>
        </div>
        <div class="header__right">
            <div class="action transition" @click="openLoginDialog()">
                <div class="label">로그인</div>
            </div>
            <div class="action transition yellow" @click="openRegistrationDialog()">
                <div class="label">회원가입</div>
            </div>
            <div class="action transition font-pretendard">
                <div class="icon">
                    <img class="icon__hover" :src="`${theme}/images/menu16_h.png`">
                    <img class="icon__default" :src="`${theme}/images/menu16.png`">
                </div>
                <div class="label">손님</div>
            </div>
            <div @click="toggleRightSidebar()" class="action transition" :class="is_right_sidebar_open ? 'active' : 'inactive'">
                <div class="icon">
                    <img class="icon__hover" :src="`${theme}/images/menu17_h.png`">
                    <img class="icon__default" :src="`${theme}/images/menu17.png`">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./MainLayoutHeader.scss"></style>

<script>
export default {
    props: {
        is_right_sidebar_open: Boolean,
    },
    methods: {
        toggleRightSidebar() {
            this.$emit('toggleRightSidebar');
        },
        openLoginDialog() {
            this.$emit('openLoginDialog');
        },
        openRegistrationDialog() {
            this.$emit('openRegistrationDialog');
        }
    }
}
</script>