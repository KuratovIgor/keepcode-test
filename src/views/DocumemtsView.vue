<template>
    <student-card class="mb-90" :student="student" />

    <div class="d-flex ai-center jc-sb mb-30">
        <contracts-filters-panel @filter="applyFilters" />

        <ui-button class="w-auto" @click="handleModalOpen">Добавить документ</ui-button>
    </div>

    <div v-if="loading">Loading...</div>
    <div v-else class="d-flex f-wrap g-25">
        <contract-card
            v-for="(contract, index) in filteredContracts"
            :key="index"
            :contract="contract"
        />
    </div>

    <add-document-modal v-model="showModal" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import StudentCard from '@/components/StudentCard.vue'
import ContractCard from '@/components/ContractCard.vue'
import ContractsFiltersPanel from '@/components/filters/ContractsFiltersPanel.vue'
import AddDocumentModal from '@/components/modals/AddDocumentModal.vue'
import UiButton from '@/components/UI/UiButton.vue'
import { useContractsStore } from '@/stores/contracts.store'
import type { StudentType } from '@/types/student.type'

const { filteredContracts, loading } = storeToRefs(useContractsStore())
const { getContracts, applyFilters } = useContractsStore()

const showModal = ref(false)

const student = ref<StudentType>({
    logo: 'girl.png',
    name: 'Абрамова Екатерина',
    gender: 'female',
    telegramLink: '/',
    whatsappLink: '/',
    viberLink: '/',
    status: 'Активен',
    phone: '8-900-000-00-00',
    parentsPhone: '8-900-000-00-00',
    birthday: '25.04.2004',
    address: 'г. Краснодар, ул. Советская 24, кв. 208',
})

const handleModalOpen = (): void => {
    showModal.value = true
}

onMounted(getContracts)
</script>
