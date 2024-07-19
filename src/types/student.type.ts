export type StudentType = {
    name: string
    gender: 'male' | 'female'
    telegramLink: string
    whatsappLink: string
    viberLink: string
    status: string
    phone: string
    parentsPhone: string
    birthday: string
    address: string
}

export type ContractType = {
    name: string
    fileType: 'pdf' | 'doc' | 'xls'
    status?: 'success' | 'failed'
    startDate: string
    endDate?: string
}
