<template>
    <div>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="E-mail" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <input type="submit" @click.prevent="signin" value="Login">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return {
                email: null,
                password: null
            }
        },
        methods: {
            signin(){
                this.$store.dispatch('signin', {
                    email: this.email,
                    password: this.password
                })
            }
        }
    }
</script>

<style lang="sass" scoped>
    form
        display: flex
        flex-direction: column
        align-items: center
        margin-top: 20px
        width: 100%
        input
            width: 100%
            padding: 10px
            box-shadow: 0 0 10px 0.5px rgba(0,0,0,0.1)
            background: #fff
            margin-bottom: 20px
            border-radius: 10px
            font-size: 18px
            border: none
            transition: 0.5s
            outline: none
            &:focus
                background: lightcoral
                color: #fff
            &[type="submit"]
                background: lightcoral
                color: #fff
                cursor: pointer
                font-weight: bold
                &:hover
                    background: #fff
                    color: lightcoral
</style>