<template>
    <div class="ui-input">
        <span v-if="required" class="ui-input__required">*</span>
        <input v-bind="$attrs" class="ui-input__inner" />
    </div>
</template>

<script lang="ts" setup>
interface Props {
    required?: boolean
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.ui-input {
    display: flex;

    &__inner {
        width: 100%;
        border: none;
        border-bottom: 1px solid $color-gray;
        padding-bottom: 12px;
        outline: none;
    }

    &__required {
        color: $color-orange;
    }
}
</style>
