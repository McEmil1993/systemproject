<template>
    <q-layout @keyup.alt.enter.stop="changeTranslation">
        <div class="main">
            <q-scroll-area class="main__sidebar" :class="language_used">
                <div class="main__sidebar__logo" :style="`background-image: url('${img_logo}')`"></div>
                <div class="main__sidebar__divider"></div>
                <div class="main__sidebar__title"> {{ language.sidebar.title }}</div>
                <div class="main__sidebar__stat">
                    <sidebar-stat-component></sidebar-stat-component>
                    <sidebar-nav></sidebar-nav>
                </div>
            </q-scroll-area>
            <div class="main__content">
                <div class="main__header">
                    <div class="main__header__counts">
                        <header-counts></header-counts>
                    </div>
                    <div class="main__header__summary">
                        <header-summary></header-summary>
                    </div>
                    <div class="main__header__actions">
                        <header-actions></header-actions>
                    </div>
                </div>
                <div class="main__content__view">
                    <router-view />
                </div>
            </div>
        </div>
    </q-layout>
</template>
  
<style lang="scss" scoped src="./MemberLayout.scss"></style>
<script lang="js">
import SidebarStatComponent from 'src/components/sidebar/SidebarStatComponent.vue';
import SidebarNav from 'src/components/sidebar/SidebarNav.vue';
import HeaderCounts from 'src/components/header/HeaderCounts.vue';
import HeaderSummary from 'src/components/header/HeaderSummary.vue';
import HeaderActions from 'src/components/header/HeaderActions.vue';
import img_logo from 'assets/odds-logo-white.png';

export default
{
    name: 'MemberLayout',
    data: () => ({
        img_logo: img_logo,
    }),
    components: { SidebarStatComponent, HeaderCounts, HeaderSummary, HeaderActions, SidebarNav },
    methods: {
        changeTranslation() {
            this.lang.language = (this.lang.language == "kr" ? "en" : "kr");
            this.lang.changeLanguage();
        }
    }
}
</script>