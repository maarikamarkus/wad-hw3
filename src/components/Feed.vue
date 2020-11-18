<template>
    <div class="container">
        <div v-for='post in posts' :key='post.id'>
            <p> {{post.author.firstname}} {{post.author.lastname}} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feed',
    data () {
        return {}
    },
    computed: {
        posts () {
            return this.$store.state.posts;
        },
    },
    mounted () {
        this.$store.dispatch('getPosts');
    },
}
</script>

<style scoped>

</style>