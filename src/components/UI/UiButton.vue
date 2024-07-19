<template>
    <div class="ui-button" :class="`ui-button--${type}`">
        <slot />
    </div>
</template>

<script lang="ts" setup>
interface Props {
    type?: 'default' | 'cancel'
}

withDefaults(defineProps<Props>(), {
    type: 'default'
})
</script>

<style lang="scss" scoped>
.ui-button {
    font-size: 16px;
    border-radius: 10px;
    padding: 17px 40px;
    color: $color-white;
    text-transform: uppercase;
    font-weight: 700;
    background-color: $color-yellow;
    transition: 0.1s linear;

    &--cancel {
        background-color: $color-gray;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
}
</style>
