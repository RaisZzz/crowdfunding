<template>
    <div class="users">
        <h1>Users</h1>
        <ul class="usersList">
            <UserCard v-for="user in users"
                      :key="user.id"
                      :name="user.name"
                      :age="user.age"
                      :region="user.region"
                      :position="user.position"
                      :about="user.about"
            />
        </ul>
    </div>
</template>

<script>
    import UserCard from "./UserCard";
    export default {
        name: 'Users',
        components: {
            UserCard
        },
        mounted() {
            this.$store.dispatch('uploadUsers');
        },
        computed: {
            users: function() {
                return this.$store.state.users
            }
        }
    }
</script>

<style lang="sass" scoped>
    .usersList
        width: 100%
        margin-top: 20px
</style>