<template>
    <div class="sidebar non-selectable">
        <template v-for="nav in navigation_list">
            <div v-if="nav.hasOwnProperty('spacing')" class="sidebar__spacing"></div>
            <div v-else class="sidebar__group transition">
                <div class="icon">
                    <img class="icon__default" :src="nav.image_icon" alt="">
                    <img class="icon__hover" :src="nav.image_icon_hover" alt="">
                </div>
                <div class="label">{{ nav.label }}</div>
                <div class="more">
                    <img :src="`${theme}/images/icon_arrow.png`" alt="">
                </div>
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped src="./MainLayoutSideNav.scss"></style>

<script>
export default
{
    name: 'MainLayoutSideNav',
    filters: { },
    data:() =>(
    {
        form: {},
        navigation_list: [],
    }),
    mounted() {
        this.navigation_list = [
            { route_name: '', image_icon: `${this.theme}/images/menu01.png`, image_icon_hover: `${this.theme}/images/menu01_h.png`, label: '카지노'},
            { route_name: '', image_icon: `${this.theme}/images/menu02.png`, image_icon_hover: `${this.theme}/images/menu02_h.png`, label: '슬롯머신'},
            { spacing: true },
            { route_name: '', image_icon: `${this.theme}/images/menu04.png`, image_icon_hover: `${this.theme}/images/menu04_h.png`, label: '입금'},
            { route_name: '', image_icon: `${this.theme}/images/menu05.png`, image_icon_hover: `${this.theme}/images/menu05_h.png`, label: '출금'},
            { route_name: '', image_icon: `${this.theme}/images/menu06.png`, image_icon_hover: `${this.theme}/images/menu06_h.png`, label: '공지사항'},
            { route_name: '', image_icon: `${this.theme}/images/menu07.png`, image_icon_hover: `${this.theme}/images/menu07_h.png`, label: '쪽지함'},
            { route_name: '', image_icon: `${this.theme}/images/menu08.png`, image_icon_hover: `${this.theme}/images/menu08_h.png`, label: '고객센터'},
            { route_name: '', image_icon: `${this.theme}/images/menu09.png`, image_icon_hover: `${this.theme}/images/menu09_h.png`, label: '쿠폰함'},
            { route_name: '', image_icon: `${this.theme}/images/menu10.png`, image_icon_hover: `${this.theme}/images/menu10_h.png`, label: '포인트전환'},
        ]
    },
    methods: { },
    computed: { }
}
</script>