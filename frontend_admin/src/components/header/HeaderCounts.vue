<template>
    <div class="header-counts">
        <!-- new member approval -->
        <div class="header-counts__group">
            <div class="header-counts__group__info">
                <div class="icon">
                    <q-icon name="people"></q-icon>
                </div>
                <div class="label">{{ language.header.count.new_standby_and_approved }}</div>
            </div>
            <div class="header-counts__group__count">
                (1/10)
            </div>
            <div class="header-counts__group__mute">
                <q-icon name="volume_up"></q-icon>
            </div>
        </div>

        <!-- charging approval -->
        <div class="header-counts__group">
            <div class="header-counts__group__info">
                <div class="icon">
                    <q-icon name="credit_score"></q-icon>
                </div>
                <div class="label">{{ language.header.count.charging_application_and_waiting }}</div>
            </div>
            <div class="header-counts__group__count">
                (1/10)
            </div>
            <div class="header-counts__group__mute">
                <q-icon name="volume_up"></q-icon>
            </div>
        </div>

        <!-- exchange request -->
        <div class="header-counts__group">
            <div class="header-counts__group__info">
                <div class="icon">
                    <q-icon name="currency_exchange"></q-icon>
                </div>
                <div class="label">{{ language.header.count.exchange_request_and_waiting }}</div>
            </div>
            <div class="header-counts__group__count">
                (1/10)
            </div>
            <div class="header-counts__group__mute">
                <q-icon name="volume_up"></q-icon>
            </div>
        </div>

        <!-- consulting -->
        <div class="header-counts__group">
            <div class="header-counts__group__info">
                <div class="icon">
                    <q-icon name="credit_card"></q-icon>
                </div>
                <div class="label">{{ language.header.count.consulting_application }}</div>
            </div>
            <div class="header-counts__group__count">
                (1/10)
            </div>
            <div class="header-counts__group__mute">
                <q-icon name="volume_up"></q-icon>
            </div>
        </div>

        <!-- unconfirmed sms -->
        <div class="header-counts__group">
            <div class="header-counts__group__info">
                <div class="icon">
                    <q-icon name="phone_iphone"></q-icon>
                </div>
                <div class="label">{{ language.header.count.sms_unacknowledge }}</div>
            </div>
            <div class="header-counts__group__count">
                (1/10)
            </div>
            <div class="header-counts__group__mute">
                <q-icon name="volume_up"></q-icon>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./HeaderCounts.scss"></style>