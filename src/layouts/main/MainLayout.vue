<template>
    <div class="main-layout">
        <main-sidebar />

        <div class="w-100">
            <main-header />

            <div class="main-layout__page">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import MainSidebar from '@/layouts/main/components/MainSidebar.vue'
import MainHeader from '@/layouts/main/components/MainHeader.vue'
</script>

<style lang="scss" scoped>
.main-layout {
    display: flex;
    width: 100%;

    &__page {
        padding: 26px 90px;
    }
}
</style>
