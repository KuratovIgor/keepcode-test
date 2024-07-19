<template>
    <div class="contract-card">
        <div class="contract-card__info">
            <h2 class="mb-5">{{ contract.name }}</h2>
            
            <ui-status
                v-if="contract.status"
                class="mb-5"
                :status="contract.status"
            >
                {{ contractStatus }}
            </ui-status>
            <div v-else class="mb-30"></div>
            
            <div class="contract-card__dates">
                {{ contract.startDate }}
                <span v-if="contract.endDate">- {{ contract.endDate }}</span>
            </div>

            <printer-icon class="mr-30" />
            <edit-icon class="mr-30" />
            <remove-icon />
        </div>

        <div class="contract-card__file-wrapper">
            <pdf-icon v-if="contract.fileType === 'pdf'" />
            <doc-icon v-if="contract.fileType === 'doc'" />
            <xls-icon v-if="contract.fileType === 'xls'" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import UiStatus from '@/components/UI/UiStatus.vue'
import type { ContractType } from '@/types/student.type'
import RemoveIcon from '@/assets/icons/remove-icon.svg'
import EditIcon from '@/assets/icons/edit-icon.svg'
import PrinterIcon from '@/assets/icons/printer-icon.svg'
import PdfIcon from '@/assets/icons/pdf-icon.svg'
import XlsIcon from '@/assets/icons/xls-icon.svg'
import DocIcon from '@/assets/icons/doc-icon.svg'

interface Props {
    contract: ContractType
}

const props = defineProps<Props>()

enum ContractStatus {
    success = 'Заключен',
    failed = 'Расторгнут',
}

const contractStatus = computed(() => props.contract.status ? ContractStatus[props.contract.status] : '')
</script>

<style lang="scss" scoped>
.contract-card {
    display: flex;
    justify-content: space-between;
    background-color: $color-white;
    border-radius: 10px;
    padding: 20px;
    max-width: 378px;
    width: 100%;

    &__dates {
        color: $color-gray;
        margin-bottom: 18px;
    }

    &__file-wrapper {
        background-color: $color-light-gray;
        max-width: 117px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }
}
</style>
