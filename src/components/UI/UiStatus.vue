<template>
    <div class="ui-status">
        <div class="ui-status__inner" :class="`ui-status--${status}`" />
        <slot />
    </div>
</template>

<script lang="ts" setup>
interface Props {
    status?: 'success' | 'failed'
}

withDefaults(defineProps<Props>(), {
    status: 'success',
})
</script>

<style lang="scss" scoped>
.ui-status {
    font-size: 18px;
    display: flex;
    align-items: center;

    &__inner {
        width: 9px;
        height: 9px;
        border-radius: 2px;
        margin-right: 9px;
    }

    &--success {
        background-color: $color-green;
    }

    &--failed {
        background-color: $color-orange;
    }
}
</style>
