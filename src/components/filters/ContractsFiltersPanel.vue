<template>
    <div class="d-flex w-100 g-30">
        <v-select v-model="filters.type" class="w-100 w-max-200" placeholder="Тип документа" :options="documentTypeOptions" />
        <v-select v-model="filters.status" class="w-100 w-max-200" placeholder="Статус" :options="statusOptions" />
        <v-select v-model="filters.sortBy" class="w-100 w-max-200" placeholder="Сортировать по" :options="sortOptions" />
    </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'
import type { FiltersType, FilterOptionType } from '@/types/filters.type'

const emit = defineEmits<{
    filter: [value: FiltersType],
}>()

const documentTypeOptions: FilterOptionType[] = [
    {label: 'pdf', value: 'pdf'},
    {label: 'doc', value: 'doc'},
    {label: 'xls', value: 'xls'},
]

const statusOptions: FilterOptionType[] = [
    {label: 'Расторгнут', value: 'failed'},
    {label: 'Заключен', value: 'success'},
]

const sortOptions: FilterOptionType[] = [
    {label: 'По названию', value: 'name'},
    {label: 'По дате', value: 'date'},
]

const filters: FiltersType = reactive({
    type: null,
    status: null,
    sortBy: null,
})

watch(filters, (newFilters) => {
    emit('filter', newFilters)
})
</script>
