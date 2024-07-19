import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import ContractService from '@/services/contracts.service'
import type { ContractType } from '@/types/student.type'

export const useContractsStore = defineStore('contracts', () => {
  const contractsData = ref<ContractType[] | null>(null)
  const loading = ref(false)

  const contracts = computed(() => contractsData.value ?? [])

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

  return {
    contractsData,
    contracts,
    loading,
    getContracts,
  }
})
