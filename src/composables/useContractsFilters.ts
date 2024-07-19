import { ref } from 'vue'
import type { FiltersType } from '@/types/filters.type'
import type { ContractType } from '@/types/student.type'

export const useContractsFilters = () => {
    const filters = ref<FiltersType | null>(null)

    const filterByDocumentType = (contracts: ContractType[]): ContractType[] => {
        return contracts.filter((contract) => contract.fileType === filters.value?.type?.value)
    }

    const filterByStatus = (contracts: ContractType[]): ContractType[] => {
        return contracts.filter((contract) => contract.status === filters.value?.status?.value)
    }

    const sortByName = (contracts: ContractType[]): ContractType[] => {
        return contracts.sort((value1, value2) => {
            if (value1.name > value2.name) return 1
            if (value1.name < value2.name) return -1
    
            return 0
        })
    }

    const sortByDate = (contracts: ContractType[]): ContractType[] => {
        return contracts.sort((value1, value2) => {
            if (value1.startDate > value2.startDate) return 1
            if (value1.startDate < value2.startDate) return -1
    
            return 0
        })
    }

    const filter = (filtersData: FiltersType, contracts: ContractType[]): ContractType[] => {
        let filteredContracts = JSON.parse(JSON.stringify(contracts)) as ContractType[]

        filters.value = filtersData

        if (!filters.value) return filteredContracts

        if (filters.value.type) {
            filteredContracts = filterByDocumentType(filteredContracts)
        }

        if (filters.value.status) {
            filteredContracts = filterByStatus(filteredContracts)
        }

        if (filters.value.sortBy) {
            if (filters.value.sortBy.value === 'name') {
                filteredContracts = sortByName(filteredContracts)
            } else if (filters.value.sortBy.value === 'date') {
                filteredContracts = sortByDate(filteredContracts)
            }
        }

        return filteredContracts
    }

    return {
        filter,
    }
}