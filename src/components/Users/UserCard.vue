<template>
    <div class="userCard">
        <div class="ava"><span>{{ name.substr(0, 2) }}</span></div>
        <div class="desc">
            <div class="top">
                <h2 class="name">{{ name }}</h2>
                <h3 class="age"><b>Age</b> - {{ age }}</h3>
                <h4 class="position"><b>Position</b> - {{ position }}</h4>
            </div>
            <div class="about">
                <p>Live in <b>{{ region }}</b>. {{ about }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserCard',
        props: ['name', 'age', 'region', 'position', 'about']
    }
</script>

<style lang="sass" scoped>
    .userCard
        display: flex
        margin-bottom: 20px
        width: 100%
        padding: 10px
        background: #fff
        box-shadow: 0 0 10px 0.5px rgba(0,0,0,0.1)
        border-radius: 10px
        .ava
            position: relative
            width: 60px
            height: 60px
            border-radius: 50%
            background: lightcoral
            margin-right: 15px
            span
                position: absolute
                top: 50%
                left: 50%
                transform: translate(-50%, -50%)
                font-size: 25px
                color: #fff
                text-transform: uppercase
                font-weight: bold
        .top
            display: flex
            margin-bottom: 10px
            align-items: center
            .name
                font-size: 23px
                margin-right: 20px
                font-weight: bold
            .age
                font-size: 17px
                margin-right: 20px
                font-weight: 400
            .position
                font-size: 17px
                font-weight: 400
</style>