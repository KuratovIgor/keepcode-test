<template>
    <div class="ui-breadcrumps">
        <div v-for="(breadcrump, index) in breadcrumps" :key="index">
            <span :class="{'ui-breadcrumps--active': isLastIndex(index)}">{{ breadcrump }}</span>
            <span v-if="!isLastIndex(index)" class="ui-breadcrumps__divider">/</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    breadcrumps: string[]
}

const props = defineProps<Props>()

const isLastIndex = (index: number): boolean => {
    return index === props.breadcrumps.length - 1
}
</script>

<style lang="scss" scoped>
.ui-breadcrumps {
    display: flex;
    font-size: 14px;

    &__divider {
        margin: 0 5px;
        color: $color-gray;
    }

    &--active {
        color: $color-gray;
    }
}
</style>
