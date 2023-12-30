<template>
    <div class="g-card">
        <div v-if="title" class="g-card__title">
            <div class="icon">
                <q-icon :name="icon"></q-icon>
            </div>
            <div class="label">{{ title }}</div>
        </div>
        <div class="g-card__content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./GCard.scss"></style>

<script>
export default
{
    name: 'GCard',
    props:
    {
        title: String,
        icon: String,
    },
}
</script>