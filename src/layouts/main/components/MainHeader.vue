<template>
    <div class="main-header">
        <ui-breadcrumps :breadcrumps="breadcrumps" />

        <div class="main-header__info">
            <div class="main-header__user">
                <img class="mr-10" src="@/assets/images/user.png" />
                <div>Name_user</div>
            </div>

            <settings-icon class="mr-30" />
            <logout-icon />
        </div>
    </div>
</template>

<script lang="ts" setup>
import UiBreadcrumps from '@/components/UI/UiBreadcrumps.vue'
import LogoutIcon from '@/assets/icons/logout-icon.svg'
import SettingsIcon from '@/assets/icons/settings-icon.svg'

const breadcrumps = ['Главная', 'Ученики', 'Документы']
</script>

<style lang="scss" scoped>
.main-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $color-white;
    padding: 16px 90px;

    &__info {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__user {
        display: flex;
        align-items: center;
        margin-right: 50px;
    }
}
</style>
