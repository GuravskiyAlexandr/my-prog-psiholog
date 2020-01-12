<template>
    <div class="color_toolbar">
        <v-navigation-drawer
                v-model="drawer"
                app
                absolut
                temporary
                class="hidden-md-and-up"
        >
            <v-list nav dense>
                <v-list-item-group v-model="group">
                    <v-list-item v-for="(item, i) in itemNavig"
                                 :key="'list'+i"
                                 :to="item.route">
                        <v-list-item-icon>
                            <v-icon size="30">{{item.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            {{item.title}}
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

        </v-navigation-drawer>

        <v-app-bar app
                   color="blue lighten-5"
                   :height=defineExtended
        >

            <v-layout align-center justify-space-around row fill-height class="flex-md-nowrap">
                <v-app-bar-nav-icon size="40" class="hidden-md-and-up"
                                    @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title justify="center" class="font-weight-bold font-italic pr-2">
                    <router-link style="text-decoration: none; color: black" to="/"> Психолог Наталья Толмачева
                    </router-link>

                </v-toolbar-title>

                <v-toolbar-items>


                    <v-flex align="center">
                        <v-row>
                            <v-col align="center"
                                   class="phon_size flex-nowrap align-center  justify-space-around">
                                <a style="text-decoration: none; color: black" href="tel: +38 (063) 688-20-99">
                                    <v-icon> mdi-phone-in-talk</v-icon>
                                </a>
                                <a style="text-decoration: none; color: black" href="tel: +38 (063) 688-20-99">
                                    +38 (063) 688-20-99
                                </a>
                            </v-col>
                        </v-row>

                    </v-flex>

                    <v-tabs class="hidden-sm-and-down" background-color="blue lighten-5">
                        <v-tab
                                v-for="(item, i) in itemNavig"
                                :key="i"
                                :to="item.route"

                        >
                            <div class="subtitle-2">{{ item.title }}</div>
                        </v-tab>

                    </v-tabs>
                </v-toolbar-items>
            </v-layout>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "Navig",
        data() {
            return {
                extended: '',
                group: null,
                drawer: false,
                tab: null,
                items: [],
                defineExtended: 100,
            }
        },
        methods: {},
        mounted() {
            if (window.innerWidth < 600) {
                if (window.innerWidth < 350) {
                    this.defineExtended = 130
                } else {
                    this.defineExtended = 100;
                }
            } else {
                this.defineExtended = 65
            }
        },
        watch: {

            '$route'() {
                if ( this.$route.path.includes('reviews')){
                    location.reload()
                }
            },
            group() {
                this.drawer = false;
            },
        },
        computed: {

            itemNavig() {
                return [
                    {
                        title: 'Главная',
                        icon: ' mdi-home',
                        route: '/'
                    },
                    {
                        title: 'Обо мне',
                        icon: ' mdi-information-outline',
                        route: '/about'
                    },
                    {
                        title: 'Блог',
                        icon: '  mdi-blogger',
                        route: '/blog'
                    },
                    {
                        title: 'Отзывы',
                        icon: 'mdi-wechat',
                        route: '/reviews'
                    },

                    {
                        title: 'Цены',
                        icon: ' mdi-credit-card',
                        route: '/price'
                    },
                    {
                        title: 'Контакты',
                        icon: 'd mdi-contact-phone-outline',
                        route: '/contact'
                    }
                ]

            }

        }
    }
</script>

<style scoped lang="stylus">

    .v-btn__content {
        font-size: large;
        font-weight: bold;
    }

    .phon_size {
        width: 200px;
        margin-right 4px;

    }

    .color_toolbar {
        background-color: #2684ff;
    }
</style>