<template>
    <div class="student-card">
        <div class="student-card__logo">
            <img src="@/assets/images/girl.png" />
        </div>

        <div class="student-card__name">
            <h1 class="mr-30">{{ student.name }}</h1>
            <img src="@/assets/images/female.png" />
        </div>

        <div class="student-card__contacts">
            <telegram-icon class="mr-10" />
            <viber-icon class="mr-10" />
            <whatsapp-icon class="mr-30" />
        </div>

        <router-link to="/" class="student-card__comments">Комментарии</router-link>

        <div class="student-card__info student-card__status">
            <div class="student-card__info-title">Cтатус</div>
            <div>{{ student.status }}</div>
        </div>

        <div class="student-card__info student-card__phone">
            <div class="student-card__info-title">Телефон</div>
            <div>{{ student.phone }}</div>
        </div>

        <div class="student-card__info">
            <div class="student-card__info-title">Телефон родителей</div>
            <div>{{ student.parentsPhone }}</div>
        </div>

        <div class="student-card__info">
            <div class="student-card__info-title">Дата рождения</div>
            <div>{{ student.birthday }}</div>
        </div>

        <div class="student-card__info">
            <div class="student-card__info-title">Адрес</div>
            <div>{{ student.address }}</div>
        </div>

        <edit-icon class="student-card__edit" />
        <remove-icon />
    </div>
</template>

<script lang="ts" setup>
import { StudentType } from '@/types/student.type'
import TelegramIcon from '@/assets/icons/telegram-icon.svg'
import WhatsappIcon from '@/assets/icons/whatsapp-icon.svg'
import ViberIcon from '@/assets/icons/viber-icon.svg'
import RemoveIcon from '@/assets/icons/remove-icon.svg'
import EditIcon from '@/assets/icons/edit-icon.svg'

interface Props {
    student: StudentType
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.student-card {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(7, auto);
    grid-template-rows: 1fr 1fr;
    row-gap: 35px;
    column-gap: 50px;
    padding: 20px;
    border-radius: 10px;
    background-color: $color-white;
    box-shadow: 0px 4px 5px 0px #0000001A;
    font-size: 18px;

    &__logo {
        grid-row: 1/3;
        width: 112px;
        height: 112px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: $color-light-gray;
    }

    &__name {
        grid-column: 2/4;
        display: flex;
        align-items: center;

        h1 {
            color: $color-blue;
        }
    }

    &__contacts {
        grid-row: 2/3;
        display: flex;
        align-items: center
    }

    &__comments {
        grid-row: 2/3;
        text-decoration: underline;
    }

    &__info {
        &-title {
            color: $color-gray;
            font-size: 14px;
        }
    }

    &__status {
        grid-row: 2/3;
    }

    &__phone {
        grid-column: 5/6;
    }

    &__edit {
        grid-row: 1/2;
        grid-column: 7/8;
    }
}
</style>
