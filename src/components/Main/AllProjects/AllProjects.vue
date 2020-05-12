<template>
    <div class="allProjects">
        <h2>All projects</h2>
        <ul class="projects">
            <Project
                    v-for="project in projects"
                    :key="project.id"
                    :name="project.projectName"
                    :about="project.projectAbout"
                    :curVal="project.projectCurVal"
                    :needVal="project.projectNeedVal"
            />
        </ul>
    </div>
</template>

<script>
    import Project from "./Project";
    export default {
        name: 'AllProjects',
        components: {
            Project
        },
        mounted() {
            this.$store.dispatch('uploadUsers');
        },
        computed: {
            projects: function() {
                return this.$store.state.users
            }
        }
    }
</script>

<style lang="sass" scoped>
    .allProjects
        margin-top: 20px
        h2
            text-align: center
            font-size: 30px
        .projects
            margin-top: 20px
</style>