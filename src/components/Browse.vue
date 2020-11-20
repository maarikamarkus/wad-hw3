<template>
    <section class="main-container">
        <div v-for="user in users" :key="user.id">
            <div class="profile">
                <img :src="user.avatar" :alt="user.firstname + ' ' + user.lastname">
                <h2> {{ user.firstname }} {{ user.lastname }} </h2>
                <button class="follow-button" :id="user.id" @click="toggleFollow(user.id)">Follow</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Browse',
    data () {
        return {}
    },
    methods: {
        toggleFollow(id) {
            let el = document.getElementById(id);
            if (el.innerHTML == "Follow") {
                el.innerHTML = "Followed"
            } else {
                el.innerHTML = "Follow"
            }
            el.classList.toggle("followed");
        }
    },
    computed: {
        users () {
            return this.$store.state.users;
        },
    },
    mounted () {
        this.$store.dispatch('getUsers');
    },
}
</script>

<style scoped>
.profile {
    width: 45%;
    display: inline-block;
    border: 1px solid #dedede;
    border-radius: 5px;
    text-align: center;
    margin: 1%;
}

.profile img {
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.profile h2 {
    font-size: 16px;
}

.follow-button {
    background-color: #82008f;
}

.follow-button.followed{
    background-color: #ffffff;
    border: 1px solid #82008f;
    color: #82008f;
}
</style>