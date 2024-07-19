<template>
    <div class="main-layout">
        <main-sidebar />

        <div class="w-100">
            <main-header />
            <router-view />
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
}
</style>
