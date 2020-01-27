import Vue from 'vue'
import Router from 'vue-router'

const About = () => import ('./views/About.vue')
const Home = () => import ('./views/Home.vue')

// const Price = () => import ('./views/Price.vue')

const Contact = () => import  ('./views/Contact.vue')
const Blog = () => import ('./views/Blog.vue')
const WorkDay = () => import ('./components/blogAndArticles/WorkDay.vue')
const Confidence = () => import ('./components/blogAndArticles/Confidence.vue')
const Welcome = () => import ('./components/blogAndArticles/Welcome.vue')
const Independent = () => import ('./components/blogAndArticles/Independent.vue')
const BrainDevelop = () => import ('./components/blogAndArticles/ChildBrainDevelop.vue')
const AutismIs = () => import ('./components/blogAndArticles/AutismIs.vue')
const ChildrenTantrums = () => import ('./components/blogAndArticles/ChildrenTantrums.vue')
const SymptomsOfAutism = () => import ('./components/blogAndArticles/SymptomsOfAutism.vue')
const Phobias = () => import ('./components/blogAndArticles/Phobias.vue')
const NotFoundComponent = () => import ('./views/NotFoundComponent.vue')
const Reviews = () => import ('./views/Reviews.vue')


Vue.use(Router)


const routes = [

    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/blog', component: Blog},
    // {path: '/price', component: Price},
    {path: '/contact', component: Contact},
    {path: '/reviews', component: Reviews},
    {path: '/blog/workday', component: WorkDay},
    {path: '/blog/confidence', component: Confidence},
    {path: '/blog/independent', component: Independent},
    {path: '/blog/welcome', component: Welcome},
    {path: '/blog/brain-develop', component: BrainDevelop},
    {path: '/blog/autismIs', component: AutismIs},
    {path: '/blog/children-tantrums', component: ChildrenTantrums},
    {path: '/blog/symptoms-of-autism', component: SymptomsOfAutism},
    {path: '/blog/phobias', component: Phobias},


    { path: '/404', component: NotFoundComponent },
    {path: '*', redirect: '/404'},
    {path: '/home', redirect: '/'}

];


// export default new Router({
//     mode: 'history',
//     routes,
//     // eslint-disable-next-line
//     scrollBehavior(to, from, savedPosition) {
//         if (savedPosition) {
//             return savedPosition
//         } else {
//             return {x: 0, y: 0}
//         }
//     }
// })

export function createRouter() {
    return new Router({
        mode: 'history',
        routes,
        // eslint-disable-next-line
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return {x: 0, y: 0}
            }
        }
    })
}