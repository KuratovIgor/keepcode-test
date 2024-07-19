<template>
    <div class="main-sidebar">
        <img class="mb-40" src="@/assets/images/logo.png" />

        <router-link to="/" class="main-sidebar__item">
            <home-icon class="mb-5" />
            <div>Главная</div>
        </router-link>

        <router-link to="/" class="main-sidebar__item">
            <calendar-icon class="mb-5" />
            <div>Расписание</div>
        </router-link>

        <router-link to="/" class="main-sidebar__item main-sidebar__item--active">
            <pupil-icon class="mb-5" />
            <div>Ученики</div>
        </router-link>

        <router-link to="/" class="main-sidebar__item">
            <teacher-icon class="mb-5" />
            <div>Преподаватели</div>
        </router-link>

        <router-link to="/" class="main-sidebar__item">
            <lesson-icon class="mb-5" />
            <div>Занятия</div>
        </router-link>

        <router-link to="/" class="main-sidebar__item">
            <employees-icon />
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import HomeIcon from '@/assets/icons/home-icon.svg'
import CalendarIcon from '@/assets/icons/calendar-icon.svg'
import PupilIcon from '@/assets/icons/pupil-icon.svg'
import TeacherIcon from '@/assets/icons/teacher-icon.svg'
import LessonIcon from '@/assets/icons/lesson-icon.svg'
import EmployeesIcon from '@/assets/icons/employees-icon.svg'
</script>

<style lang="scss" scoped>
.main-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    height: 100%;
    max-width: 138px;
    width: 100%;
    background-color: $color-blue;

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $color-white;
        margin-bottom: 20px;
        padding: 20px;
        width: 100%;

        &--active {
            background-color: $color-light-blue;
        }
    }
}
</style>
