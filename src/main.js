import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'
import {createStore} from './store'
import vuetify from './plugins/vuetify' // path to vuetify export
import VueMeta from 'vue-meta'
import VueAnalytics from 'vue-analytics'

Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})





Vue.config.productionTip = false

export async function createApp({
                                    beforeApp = () => {
                                    },
                                    afterApp = () => {
                                    }
                                } = {}) {
    const router = createRouter()
    const store = createStore()
    Vue.use(VueAnalytics, {
        id: 'UA-147240845-1',
        router
    });

    await beforeApp({
        router,
        store,

    })

    const app = new Vue({
        vuetify,
        router,
        store,
        render: h => h(App)
    })

    const result = {
        app,
        router,
        store,

    }

    await afterApp(result)

    return result
}
