<template>
    <ui-modal v-model="modelValue">
        <template #header>
            <h1>Добавить документ</h1>
        </template>

        <div class="d-flex mb-50">
            <div class="mr-20">Тип документа:</div>
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

        <div class="d-flex ai-center jc-sb">
            <ui-button class="mr-30">Добавить документ</ui-button>
            <ui-button type="cancel" @click="handleModalClose">Отмена</ui-button>
        </div>
    </ui-modal>
</template>

<script lang="ts" setup>
import UiModal from '@/components/UI/UiModal.vue'
import UiButton from '@/components/UI/UiButton.vue'
import UiInput from '@/components/UI/UiInput.vue'

const modelValue = defineModel()

const handleModalClose = (): void => {
    modelValue.value = false
}
</script>
