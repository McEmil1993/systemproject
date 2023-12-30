<template>
    <div class="header-actions">
        <div class="header-actions__name">
            {{ auth.id }}
        </div>
        <div @click="logout()" class="header-actions__logout non-selectable">
            <div class="icon">
                <q-icon name="power_settings_new"></q-icon>
            </div>
            <div class="label">
                나가기
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./HeaderActions.scss"></style>