<template>
    <div>
        <h1>Registration</h1>
        <form>
            <input type="text" placeholder="E-mail" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <input type="text" placeholder="About" v-model="about">
            <input type="number" placeholder="Age" v-model="age">
            <input type="text" placeholder="Name" v-model="name">
            <input type="text" placeholder="Position" v-model="position">
            <input type="text" placeholder="Region" v-model="region">
            <input type="text" placeholder="Project Name" v-model="projectName">
            <input type="text" placeholder="Project About" v-model="projectAbout">
            <input type="number" placeholder="How many money project need?" v-model="projectNeedVal">
            <input type="submit" @click.prevent="signup" value="Register">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Registration',
        data(){
            return {
                email: null,
                password: null,
                about: null,
                age: null,
                name: null,
                position: null,
                region: null,
                projectName: null,
                projectAbout: null,
                projectNeedVal: null
            }
        },
        methods: {
            signup(){
                this.$store.dispatch('signup', {
                    email: this.email,
                    password: this.password,
                    about: this.about,
                    age: this.age,
                    name: this.name,
                    position: this.position,
                    region: this.region,
                    projectName: this.projectName,
                    projectAbout: this.projectAbout,
                    projectNeedVal: this.projectNeedVal
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