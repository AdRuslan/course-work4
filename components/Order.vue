<template>
    <div>
        <template  v-for="(vacancy, index) of (vacancies)" >
        <template> 
        <v-subheader
           :key="vacancy.id"
          v-text="vacancies.name"
        ></v-subheader>

        <v-divider
           :key="index"
        ></v-divider>

        <v-list-item
         :key="vacancy.name"
        >
          <v-list-item-avatar>
            <v-img :src="require('@/static/vacancy-icon.jpg')"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="'Название: ' + vacancy.name"></v-list-item-title>
            <v-list-item-subtitle v-html="'Организация: ' + vacancy.employer_info.company_name"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="'Описание: ' + vacancy.description"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="'Опыт: ' + (vacancy.required_xp === 'NO' ? 'Без опыта' :
              vacancy.required_xp <= 4 ?
              vacancy.required_xp <= 1 && + vacancy.required_xp + ' год' || vacancy.required_xp + ' года'  
              : vacancy.required_xp + ' лет') "></v-list-item-subtitle>
            <v-list-item-subtitle v-html="'Спрятано: ' + vacancy.hidden"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </template>
      </template>
    </div>
</template>

<script>
export default {
    props: ['vacancies'],
    name: 'Order'
}
</script>