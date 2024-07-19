<template>
    <vue-final-modal
        v-model="modelValue"
        class="add-document-modal"
        content-class="add-document-modal__content"
        overlay-transition="vfm-fade"
        content-transition="vfm-fade"
    >
        <div class="add-document-modal__header">
            <h1>Добавить документ</h1>
            <close-icon class="add-document-modal__header-icon" @click="handleModalClose" />
        </div>

        <div class="add-document-modal__radio">
            <div class="add-document-modal__radio-title">Тип документа:</div>
            <div>
                <div>
                    <input class="mr-10" type="radio" name="document-type" />
                    <label>Договор</label>
                </div>

                <div>
                    <input class="mr-10" type="radio" name="document-type" />
                    <label>Справка</label>
                </div>

                <div>
                    <input class="mr-10" type="radio" name="document-type" />
                    <label>Договор</label>
                </div>
            </div>
        </div>

        <ui-input class="mb-30" placeholder="Название документа" required />
        <ui-input class="mb-30" placeholder="Номер" required />

        <div class="add-document-modal__footer">
            <ui-button class="mr-30">Добавить документ</ui-button>
            <ui-button type="cancel" @click="handleModalClose">Отмена</ui-button>
        </div>
    </vue-final-modal>
</template>

<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'
import UiButton from '@/components/UI/UiButton.vue'
import UiInput from '@/components/UI/UiInput.vue'
import CloseIcon from '@/assets/icons/close-icon.svg'

const modelValue = defineModel()

const handleModalClose = (): void => {
    modelValue.value = false
}
</script>

<style lang="scss">
.add-document-modal {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
            color: $color-blue;
        }

    &__content {
        max-width: 650px;
        width: 100%;
        padding: 30px;
        background: $color-white;
        border-radius: 10px;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px;

        &-icon:hover {
            cursor: pointer;
        }
    }

    &__radio {
        display: flex;
        margin-bottom: 50px;

        &-title {
            margin-right: 20px;
            &::after {
                content: '*';
                color: $color-orange;
            }
        }
    }

    &__footer {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
