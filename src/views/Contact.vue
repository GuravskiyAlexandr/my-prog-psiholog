<template>
    <v-container>
        <v-card>
            <v-card align="center" class="py-5">

                <v-col class="contact" align="center">
                    <h1>
                        Контакты
                    </h1>

                    <p></p>
                    <h3>Будут вопросы? Буду рада ответить на них! Обязательно звоните или пишите на почту!</h3>
                    <p></p>


                    <div>
                        <v-list>
                            <v-list-item @click="1">
                                <v-list-item-action>
                                    <a style="text-decoration: none" href="tel: +38 (063) 688-20-99">
                                        <v-icon>mdi-phone</v-icon>
                                    </a>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <a style="text-decoration: none; color: black" href="tel: +38 (063) 688-20-99">
                                        <v-list-item-title>+38 (063) 688-20-99</v-list-item-title>
                                    </a>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <a style="text-decoration: none" href="sms: +38 (063) 688-20-99">
                                        <v-icon>mdi-message-text</v-icon>
                                    </a>
                                </v-list-item-action>
                            </v-list-item>

                            <v-divider inset></v-divider>
                            <v-divider inset></v-divider>

                            <v-list-item @click="2">
                                <v-list-item-action>
                                    <a style="text-decoration: none; color: black"
                                       href="mailto:klinicheskijpsiholog@gmail.com">
                                        <v-icon>mdi-email</v-icon>
                                    </a>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <a style="text-decoration: none; color: black"
                                       href="mailto:klinicheskijpsiholog@gmail.com">
                                        <div>klinicheskijpsiholog@gmail.com</div>
                                    </a>
                                </v-list-item-content>
                            </v-list-item>

                            <v-divider inset></v-divider>
                            <v-divider inset></v-divider>

                            <v-list-item @click="3">
                                <v-list-item-action>
                                    <v-icon>mdi-map-marker</v-icon>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <div>Украина, Киев(Оболонь, м.Льва Толстого)</div>
                                </v-list-item-content>
                            </v-list-item>

                            <v-divider inset></v-divider>
                            <v-divider inset></v-divider>

                            <v-list-item @click="3">
                                <v-list-item-action>
                                    <a style="text-decoration: none; color: black" target="_blank"
                                       href="https://www.facebook.com/Клиничекий-психолог-Нейропсихолог-Толмачёва-Наталья-105253370838895">
                                        <v-icon> mdi-facebook-box</v-icon>
                                    </a>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <a style="text-decoration: none; color: black" target="_blank"
                                       href="https://www.facebook.com/Клиничекий-психолог-Нейропсихолог-Толмачёва-Наталья-105253370838895">
                                        <div>Новости на Facebook</div>
                                    </a>
                                </v-list-item-content>
                            </v-list-item>

                            <v-divider inset></v-divider>
                            <v-divider inset></v-divider>

                            <v-list-item @click="4">
                                <v-list-item-action>
                                    <a style="text-decoration: none; color: black" target="_blank"
                                       title="Viber" href="viber://chat?number=+38(063) 688-20-99">
                                        <v-icon> mdi-alpha-v-circle</v-icon>
                                    </a>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <a style="text-decoration: none; color: black"
                                       title="Viber" :href="'viber://chat?number='+ `${uagent}`">
                                        <div>Написать в Viber</div>
                                    </a>
                                </v-list-item-content>
                            </v-list-item>


                            <v-divider inset></v-divider>
                            <v-divider inset></v-divider>

                            <v-list-item @click="4">
                                <v-list-item-action>
                                    <v-icon> mdi-timetable</v-icon>
                                </v-list-item-action>

                                <v-list-item-content>

                                    <div>График работы</div>
                                    <div> Пн-Пт: 8.00 - 20.00</div>
                                    <div> Вс: выходной</div>

                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </div>
                </v-col>
            </v-card>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "Contact",
        data() {
            return {
                uagent: '380636882099'
            }
        },
        computed: {
            check() {
                // eslint-disable-next-line
                return this.uagent = window.innerWidth < 900 ? '380636882099' : '+380636882099'

            }
        },
        metaInfo: {
            title: 'Мои контакты | телефон адрес',
            meta: [
                {
                    vmid: 'keywords',
                    name: 'keywords',
                    content: ' контакты, телефон, адрес'
                },
                {
                    vmid: 'description',
                    name: 'description',
                    content: 'Будут вопросы? Буду рада ответить на них! Обязательно звоните или пишите на почту'
                }
            ]
        }
    }


</script>

<style scoped>
    .contact {
        background-color: #2a4652;
        max-width: 500px;
        color: white;
    }
</style>