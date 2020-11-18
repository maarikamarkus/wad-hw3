import axios from 'axios'

const state = {
    posts: [],
    users: [],
};

const getters = {
    allUsers: (state) => state.users
};

const actions = {
    getPosts({ commit }) {
        axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
        .then(response => {
            commit('SET_POSTS', response.data)
        });
    },
    getUsers({ commit }) {
        axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
        .then(response => {
            commit('SET_USERS', response.data)
        });
    }
};

const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts;
    },
    SET_USERS(state, users) {
        state.users = users
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}