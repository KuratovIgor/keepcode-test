import type { ContractType } from '@/types/student.type'

export default class ContractService {
    public static async getContracts(): Promise<ContractType[]> {
        const jsonResponse = await fetch('/contracts.json')
        const response = await jsonResponse.json()

        return response.data
    }
}