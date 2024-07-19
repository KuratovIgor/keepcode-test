<template>
    <div class="documents-view">
        <student-card class="mb-90" :student="student" />

        <div class="documents-view__filters">
            <filters-panel @filter="handleContractsFilter" />

            <ui-button>Добавить документ</ui-button>
        </div>

        <div v-if="loading">Loading...</div>
        <div v-else class="documents-view__contracts">
            <contract-card
                v-for="(contract, index) in filteredContracts"
                :key="index"
                :contract="contract"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import StudentCard from '@/components/students/StudentCard.vue'
import ContractCard from '@/components/students/ContractCard.vue'
import FiltersPanel from '@/components/students/FiltersPanel.vue'
import UiButton from '@/components/UI/UiButton.vue'
import { useContractsStore } from '@/stores/contracts.store'
import type { StudentType } from '@/types/student.type'
import type { FiltersType } from '@/types/filters.type'

const { contracts, filteredContracts, loading } = storeToRefs(useContractsStore())
const { getContracts, applyFilters } = useContractsStore()

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

const handleContractsFilter = (filters: FiltersType): void => {
    applyFilters(filters)
}

onMounted(getContracts)
</script>

<style lang="scss" scoped>
.documents-view {
    &__filters {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    &__contracts {
        display: flex;
        flex-wrap: wrap;
        gap: 28px;
    }
}
</style>
