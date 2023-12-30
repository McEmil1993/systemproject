<template>
    <div class="sidebar-nav non-selectable">
        <div v-for="nav in navigation_computed" bordered class="sidebar-nav__parent rounded-borders">
            <div group="sidenav">
                <div @click="openSidebar(nav)" :class="nav.is_open ? 'active' : 'inactive'"
                    class="sidebar-nav__parent__group">
                    <div class="icon"><q-icon :name="nav.icon"></q-icon></div>
                    <div class="label">{{ nav.label }}</div>
                    <div class="arrow"><q-icon :name="nav.is_open ? 'keyboard_arrow_down' : 'chevron_right'"></q-icon></div>
                </div>
                <div v-for="subnav in nav.sub" v-show="nav.is_open" class="sidebar-nav__parent__child"
                    @click="$router.push({ name: subnav.route_name })">
                    <div class="nav-group" :class="$route.name == subnav.route_name ? 'active' : 'inactive'">
                        <div class="nav-group__icon">
                            <q-icon
                                :name="$route.name == subnav.route_name ? 'radio_button_checked' : 'radio_button_unchecked'"></q-icon>
                        </div>
                        <div class="nav-group__label">{{ subnav.label }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./SidebarNav.scss"></style>
<script lang="js">
export default {
    name: 'SidebarNav',
    data: () =>
    ({
        navigation: [],
    }),
    computed:
    {
        navigation_computed() {
            this.navigation = [
                {
                    icon: "people",
                    label: this.language.sidenav.p_membership,
                    is_open: false,
                    sub: [
                        { label: this.language.sidenav.c_membership_management, route_name: 'member_list' },
                        { label: this.language.sidenav.c_general_memember_monitoring, route_name: 'member_monitoring' },
                        { label: '충전 모니터링 회원', route_name: 'member_list_charge' },
                        { label: '충전 모니터링 회원', route_name: 'member_charge_monitoring' },
                    ],
                },
                {
                    icon: "directions_run",
                    label: this.language.sidenav.p_membership,
                    is_open: false,
                    sub: [
                        { label: '스포츠', route_name: '' }
                    ],
                },
                {
                    icon: "radio",
                    label: this.language.sidenav.p_membership,
                    is_open: false,
                    sub: [
                        { label: '스포츠', route_name: '' }
                    ],
                },
            ];
            
            return this.navigation;
        }
    },
    mounted() {
        this.openActiveSidebar();
    },
    methods: {
        openActiveSidebar() {
            for (let navigation of this.navigation) {
                for (let subnav of navigation.sub) {
                    if (this.$route.name == subnav.route_name) {
                        navigation.is_open = true;
                    }
                }
            }
        },
        openSidebar(nav) {
            for (let navigation of this.navigation) {
                if(navigation.icon == nav.icon) {
                    nav.is_open = !nav.is_open;
                }
                else {
                    navigation.is_open = false;
                }       
            }    
        }
    },
}
</script>