<template>
    <StudentCard :student="student" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import StudentCard from '@/components/students/StudentCard.vue'
import { StudentType } from '@/types/student.type'

const student = ref<StudentType>({
    logo: 'girl.png',
    name: 'Абрамова Екатерина',
    gender: 'female',
    telegramLink: '/',
    whatsappLink: '/',
    viberLink: '/',
    status: 'Активен',
    phone: '8-900-000-00-00',
    parentsPhone: '8-900-000-00-00',
    birthday: '25.04.2004',
    address: 'г. Краснодар, ул. Советская 24, кв. 208',
})
</script>
