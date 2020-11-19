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
.container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}
</style>