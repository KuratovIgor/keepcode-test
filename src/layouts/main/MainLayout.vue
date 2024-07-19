<template>
    <div class="main-layout">
        <main-sidebar />
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import MainSidebar from '@/layouts/main/components/MainSidebar.vue'
</script>

<style lang="scss" scoped>
.main-layout {
    display: flex;
    width: 100%;
}
</style>
