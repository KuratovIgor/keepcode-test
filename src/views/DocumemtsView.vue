<template>
    <div class="documents-view">
        <student-card class="mb-90" :student="student" />

        <div v-if="loading">Loading...</div>
        <div v-else class="documents-view__contracts">
            <contract-card
                v-for="(contract, index) in contracts"
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
import { useContractsStore } from '@/stores/contracts.store'
import type { StudentType, ContractType } from '@/types/student.type'

const { contracts, loading } = storeToRefs(useContractsStore())
const { getContracts } = useContractsStore()

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

onMounted(getContracts)
</script>

<style lang="scss" scoped>
.documents-view {
    &__contracts {
        display: flex;
        flex-wrap: wrap;
        gap: 28px;
    }
}
</style>
