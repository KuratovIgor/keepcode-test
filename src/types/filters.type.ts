export type FiltersType = {
    type: FilterOptionType | null
    status: FilterOptionType | null
    sortBy: FilterOptionType | null
}

export type FilterOptionType = {
    label: string
    value: string
}
