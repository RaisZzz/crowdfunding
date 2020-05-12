<template>
    <div class="projectCard" v-if="uid">
        <div class="info">
            <p class="name"><b>Project Name</b><br><span>{{ projectName }}</span></p>
            <p class="leader"><b>Project Leader</b><br><span>{{ name }}</span></p>
            <p class="about"><b>About</b><br><span>{{ projectAbout }}</span></p>
        </div>
        <div class="needValue">
                <span>
                    <p class="value">{{ projectCurVal }} / {{ projectNeedVal }} $</p>
                    <span class="inner" v-bind:style="'width:' + projectCurVal/projectNeedVal*934.88 + 'px'"></span>
                </span>
        </div>
        <a class="more" href="#">Подробнее</a>
    </div>
</template>

<script>
    export default {
        props: ['uid', 'projectName', 'name', 'projectAbout', 'projectCurVal', 'projectNeedVal'],
        name: 'ProjectCard',
    }
</script>

<style lang="sass" scoped>
    .projectCard
        display: flex
        align-items: center
        justify-content: space-between
        padding: 10px
        margin-top: 20px
        border-radius: 10px
        background: lightcoral
        color: #fff
        box-shadow: 0 0 10px 0.5px rgba(0,0,0,0.15)
        .info
            width: 20%
            p
                font-size: 18px
                span
                    font-size: 16px
                    margin-top: 10px
        .needValue
            display: flex
            align-items: center
            justify-content: center
            width: 100%
            margin: 0 20px
            padding: 10px
            height: 100%
            background: lighten(lightcoral, 10%)
            position: relative
            .value
                position: relative
                z-index: 1
                .inner
                    position: absolute
                    top: 0
                    left: 0
                    height: 100%
                    width: 0
                    z-index: 0
                    background: darken(lightcoral, 10%)
        .more
            -webkit-writing-mode: vertical-rl
            writing-mode: tb-rl
            color: #fff
            font-weight: bold
            transition: 0.3s
            &:hover
                color: lighten(lightcoral, 10%)
</style>