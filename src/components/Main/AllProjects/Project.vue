<template>
    <div class="project" v-if="name">
        <div class="info">
            <p><b>Name - </b>{{ name }}</p>
            <p><b>About - </b>{{ about }}</p>
        </div>
        <div class="value">
            <p>{{ curVal }} / {{ needVal }} $</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['name', 'about', 'curVal', 'needVal'],
        name: 'Project'
    }
</script>

<style lang="sass" scoped>
    .project
        display: flex
        justify-content: space-between
        align-items: center
        margin-bottom: 20px
        width: 100%
        padding: 10px
        background: #fff
        box-shadow: 0 0 10px 0.5px rgba(0,0,0,0.1)
        border-radius: 10px
</style>