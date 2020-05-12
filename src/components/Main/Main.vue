<template>
    <div>
        <h1>Main</h1>
        <ProjectCard
                :uid="uid"
                :projectName="projectName"
                :name="name"
                :projectAbout="projectAbout"
                :projectCurVal="projectCurVal"
                :projectNeedVal="projectNeedVal"
        />
        <AllProjects />
    </div>
</template>

<script>
    import ProjectCard from "./ProjectCard";
    import AllProjects from "./AllProjects/AllProjects";
    export default {
        name: 'Main',
        components: {
            AllProjects,
            ProjectCard
        },
        computed: {
            uid: function() {
                return this.$store.state.uid
            },
            name: function() {
                return this.$store.state.name
            },
            projectName: function() {
                return this.$store.state.project.name
            },
            projectAbout: function() {
                return this.$store.state.project.about
            },
            projectCurVal: function() {
                return this.$store.state.project.curVal
            },
            projectNeedVal: function() {
                return this.$store.state.project.needVal
            }
        }
    }
</script>