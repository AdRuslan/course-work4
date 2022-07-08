<template>
    <div>
        <form 
            accept-charset="UTF-8"
            v-on:submit.prevent="onSubmit()"
            method="POST"
        >
            <div class="form-line">
                <label> Email
                    <input type="email" v-model="email"  placeholder="example@ex.com">
                </label>
                <label> Пароль
                    <input type="password" v-model="password" placeholder="Введите значение">
                </label>
                <label> Активирован ли
                    <input type="checkbox" v-model="isActive"  placeholder="Введите значение">
                </label>
                <label> Персонал
                    <input type="checkbox" v-model="isPersonal" placeholder="Введите значение">
                </label>
                <label> Суперпользователь
                    <input type="checkbox" v-model="isSuperUser" placeholder="Введите значение">
                </label>
            </div>
            <button class="submit-btn" type="submit">Отправить</button>
        </form>
    </div>
</template>

<script>
export default {
//   async fetch({store}) {
//     await store.dispatch('orderForm/fetch')
//   },
//   computed: {
//     orderForm() {
//       return this.$store.getters['orderForm/orderForm']
//     }
//   },
  data() {
      return {
        email: '',
        password: '',
        isActive: false,
        isPersonal: false,
        isSuperUser: false
    }
  },
  methods: {
      async onSubmit() {
        const data = {
            email: this.email,
            password: this.password,
            isActive: this.isActive,
            isPersonal: this.isPersonal,
            isSuperUser: this.isSuperUser
        }  
        if (
            data.email === '' ||
            data.password === ''
        ) {
            alert('Заполните все поля формы')
        } else {
            await this.$store.dispatch('registerForm/postForm', data);
            alert(JSON.stringify(this.$store.getters['registerForm/answer']));
        }
      }
  }
}
</script>


<style scoped>
    .submit-btn {
        background: #fefefe;
        padding: 10px;
        color: #000;
        border-radius: 10px;
    }

    select {
        background: #fff;
        padding: 5px;
        width: 100%;
        border-radius: 10px;
    }

    .form-line {
        margin-bottom: 15px
    }


    input {
        background: #fff;
        color: #000;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 15px;
    }

    form {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }
</style>
