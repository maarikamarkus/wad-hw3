import axios from 'axios'

const state = {
    posts: [],
    users: [],
    user: {},
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
    },
    getUser({ commit }) {
        axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1')
        .then(response => {
            commit('SET_USER', response.data)
        });
    }
};

const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts;
    },
    SET_USERS(state, users) {
        state.users = users;
    },
    SET_USER(state, user) {
        state.user = user;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}