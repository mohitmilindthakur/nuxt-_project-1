import Vuex from 'vuex';
import axios from 'axios';


const createStore = () => {
    return new Vuex.Store({
        state: {
            posts: []
        },
        getters: {
            posts(state) {
                return state.posts;
            }
        },
        mutations: {
            setPosts(state, posts) {
                console.log('MUTATION', posts);
                state.posts = posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                if (!process.client) {
                    console.log('---------------------');
                    return axios.get('https://nuxt-project-1-c3d95.firebaseio.com/posts.json')
                    .then(response => {
                        let posts = [];
                        for (let key in response.data) {
                            posts.push({...response.data[key], id: key});
                        }
                        vuexContext.dispatch('setPosts', posts);
                        console.log('posts', posts);
                    })
                    .catch(error => context.error(error))
                }
            },
            setPosts(vuexContext, posts) {
                console.log('setPosts', posts);
                vuexContext.commit('setPosts', posts);
            }
        }
    })
}

export default createStore;