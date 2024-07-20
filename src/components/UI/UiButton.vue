<template>
    <div class="ui-button" :class="`ui-button--${type}`">
        <slot />
    </div>
</template>

<script lang="ts" setup>
interface Props {
    type?: 'default' | 'cancel'
}

defineSlots<{
    default: void
}>()

withDefaults(defineProps<Props>(), {
    type: 'default'
})
</script>

<style lang="scss" scoped>
.ui-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 16px;
    border-radius: 10px;
    padding: 17px 40px;
    color: $color-white;
    text-transform: uppercase;
    font-weight: 700;
    background-color: $color-yellow;
    cursor: pointer;
    text-wrap: nowrap;
    transition: 0.1s linear;

    &--cancel {
        background-color: $color-gray;
    }

    &:hover {
        opacity: 0.8;
    }
}
</style>
