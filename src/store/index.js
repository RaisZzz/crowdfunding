import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {
        signup({commit}, payload) {
            axios.post('http://localhost:3000/users', {
                name: payload.name,
                email: payload.email,
                password: payload.password,
                about: payload.about,
                age: payload.age,
                position: payload.position,
                region: payload.region,
                projectName: payload.projectName,
                projectAbout: payload.projectAbout,
                projectCurVal: 0,
                projectNeedVal: Number(payload.projectNeedVal)
            })
                .then(function (response) {
                    commit('userAuth', response.data);
                    alert('You successfully register!')
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        signin({commit}, payload) {
            axios.get(`http://localhost:3000/users?email=${payload.email}`)
                .then(function (response) {
                    if (payload.password === response.data[0].password) {
                        commit('userAuth', response.data[0]);
                        alert('You successfully login');
                    } else {
                        alert('Uncorrected email or password');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        uploadUsers({commit}) {
            axios.get(`http://localhost:3000/users`)
                .then(function (response) {
                    commit('uploadUsers', response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    mutations: {
        userAuth(state, payload) {
            state.name = payload.name;
            state.email = payload.email;
            state.about = payload.about;
            state.age = payload.age;
            state.position = payload.position;
            state.region = payload.region;
            state.uid = payload.id;
            state.project.name = payload.projectName;
            state.project.about = payload.projectAbout;
            state.project.curVal = payload.projectCurVal;
            state.project.needVal = payload.projectNeedVal;
        },
        uploadUsers(state, users) {
            state.users = users;
        }
    },
    state: {
        name: null,
        age: null,
        about: null,
        email: null,
        position: null,
        region: null,
        uid: null,
        project: {
            name: null,
            about: null,
            curVal: null,
            needVal: null
        },
        users: []
    }
})