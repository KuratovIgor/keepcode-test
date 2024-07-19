<template>
    <div class="filter-panel">
        <v-select v-model="filters.type" class="filter-panel__filter" placeholder="Тип документа" :options="documentTypeOptions" />
        <v-select v-model="filters.status" class="filter-panel__filter" placeholder="Статус" :options="statusOptions" />
        <v-select v-model="filters.sortBy" class="filter-panel__filter" placeholder="Сортировать по" :options="sortOptions" />
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

<style lang="scss" scoped>
.filter-panel {
    display: flex;

    &__filter {
        margin-right: 30px;
        width: 200px;
    }
}
</style>
