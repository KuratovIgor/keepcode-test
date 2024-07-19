import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import ContractService from '@/services/contracts.service'
import { useContractsFilters } from '@/composables/useContractsFilters'
import type { ContractType } from '@/types/student.type'
import type { FiltersType } from '@/types/filters.type'

export const useContractsStore = defineStore('contracts', () => {
  const { filter } = useContractsFilters()

  const contractsData = ref<ContractType[] | null>(null)
  const filteredContractsData = ref<ContractType[] | null>(null)
  const loading = ref(false)

  const contracts = computed(() => contractsData.value ?? [])
  const filteredContracts = computed(() => filteredContractsData.value ?? contracts.value)

  const getContracts = async (): Promise<void> => {
    try {
      loading.value = true

      contractsData.value = await ContractService.getContracts()
    } catch {
      //
    } finally {
      loading.value = false
    }
  }

  const applyFilters = (filters: FiltersType): void => {
    filteredContractsData.value = filter(filters, contracts.value)
  }

  return {
    contractsData,
    contracts,
    filteredContracts,
    loading,
    getContracts,
    applyFilters,
  }
})
