<template>
    <vue-final-modal
        v-model="modelValue"
        class="d-flex ai-center jc-center"
        content-class="modal-content"
        overlay-transition="vfm-fade"
        content-transition="vfm-fade"
    >
        <div class="d-flex ai-center jc-sb mb-50">
            <slot name="header" />
            <close-icon class="c-pointer" @click="handleModalClose" />
        </div>

        <slot />
    </vue-final-modal>
</template>

<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'
import CloseIcon from '@/assets/icons/close-icon.svg'

defineSlots<{
    header: void
    default: void
}>()

const emit = defineEmits<{
    close: [],
}>()

const modelValue = defineModel()

const handleModalClose = (): void => {
    modelValue.value = false
    emit('close')
}
</script>

<style lang="scss">
.modal-content {
    max-width: 650px;
    width: 100%;
    padding: 30px;
    background: $color-white;
    border-radius: 10px;
}
</style>
