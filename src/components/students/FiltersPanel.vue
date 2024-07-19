<template>
    <div class="filter-panel">
        <v-select class="filter-panel__filter" placeholder="Тип документа" :options="documentTypeOptions" @option:selected="handleDocumentTypeSelected" />
        <v-select class="filter-panel__filter" placeholder="Статус" :options="statusOptions" @option:selected="handleStatusSelected" />
        <v-select class="filter-panel__filter" placeholder="Сортировать по" :options="sortOptions" @option:selected="handleSortSelected" />
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

type FilterOptionType = {
    label: string
    value: string
}

const documentTypeOptions = ['PDF', 'DOC', 'XLS']

const statusOptions: FilterOptionType[] = [
    {label: 'Расторгнут', value: 'failed'},
    {label: 'Заключен', value: 'success'},
]

const sortOptions: FilterOptionType[] = [
    {label: 'По названию', value: 'name'},
    {label: 'По дате', value: 'date'},
]

const filters = reactive({
    type: '',
    status: '',
    sortBy: '',
})

const handleDocumentTypeSelected = (option): void => {
    filters.type = option
}

const handleStatusSelected = (option): void => {
    filters.status = option.value
}

const handleSortSelected = (option): void => {
    filters.sortBy = option.value
}
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
