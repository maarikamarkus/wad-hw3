<template>
    <div class="container">
        <h1> {{ msg }} </h1>
        <div v-for='post in posts' :key='post.id'>
            <p> {{post.author.firstname}} {{post.author.lastname}} </p>
        </div>
        <div v-for='user in users' :key='user.id'>
            {{ user.firstname }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feed',
    data () {
        return {
            msg: 'Welcome to Feed'
        }
    },
    computed: {
        posts: function () {
            return this.$store.state.posts;
        },
        users: function () {
            return this.$store.state.users;
        }
    },
}
</script>

<style scoped>

</style>