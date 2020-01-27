<template>
    <v-container>
        <v-card flat class="pb-5">
            <v-card flat align="center" class=" pa-2"><h2>Blog</h2></v-card>
            <v-flex
                    class="d-flex flex-wrap"
                    color="grey lighten-2"
                    flat
                    tile
            >
                <template
                        v-for="(item, i)  in  article"

                >
                    <!--                    eslint-disable-next-line-->
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                                :elevation="hover ? 22 : 1"

                                class="mx-auto mt-5 card-blog"
                                :key=" 'article'+ i"
                        >
                            <v-list-item three-line class="titleBlog">
                                <v-list-item-content>
                                    <v-list-item-title class="headline titleBlog ">{{item.title}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-img
                                    lazy-src="item.img"
                                    :src=item.img
                                    height="194"
                                    alt="фото блог"
                            ></v-img>

                            <v-card-text class="text">
                                {{item.text}}
                            </v-card-text>

                            <v-card-actions>
                                <v-btn
                                        text
                                        color="deep-purple accent-4"
                                        :to=item.to
                                >
                                    Читать больше
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </template>
            </v-flex>
        </v-card>
    </v-container>
</template>

<script>
    const brain = "https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/brain_develop.jpg?alt=media&token=606d10ae-f905-49d0-97a9-4ccdce344714"
    const weekdayImage = ('https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/budni.jpg?alt=media&token=4d049802-b111-49e5-b1b4-47f32a50712a');
    const confidenceImage = ('https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/yverenost.jpg?alt=media&token=b03ab71e-67df-454c-b805-eb12cea4488c');
    const welcomeImage = ('https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/welcome.jpg?alt=media&token=317d10a1-a094-438c-9534-d061d4334a8f');
    const parallaxImage = ('https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/parallax2-min.jpg?alt=media&token=de709e97-bc85-4ad6-9db4-16971e440f2e');
    const independentImage = ('https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/independent.jpg?alt=media&token=a8f1ebee-f3af-4892-95a9-132dc1fa8457');
    const childrenTantrums = ('https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/children-tantrums.jpg?alt=media&token=3e50de8c-980b-4389-b212-5e1434e767cd');
    const symptomsOfAutism = ('https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/symptoms-of-autism.jpg?alt=media&token=d74360d9-1b0c-4285-8e26-0ebb060f8bf4');
    const sy = ('https://firebasestorage.googleapis.com/v0/b/klinicheskij-psiholog.appspot.com/o/162762.jpg?alt=media&token=aec44584-aeda-4e18-b7ed-954a36832f6a');
    export default {
        name: "Blog",
        data() {
            return {
                article:
                    [
                        {
                            title: 'Рабочие будни психолога',
                            text: 'Являясь клиническим психологом я имею большую практику и часто консультируя' +
                                ' родителей на первой встрече, наблюдаю растерянность, замешательство и отчаяние в' +
                                ' том плане, что часто родитель успел',
                            to: '/blog/workday',
                            img: weekdayImage
                        },
                        {
                            title: 'Как мозг созревает и развивается  у ребенка',
                            text: 'В момент Рождения масса мозга ребенка составляет примерно четверть от массы мозга взрослого ' +
                                'человека. При чем дальше скорость с которой растёт мозг малыша, фантастическая! Что же конкретно растёт в мозгу ',
                            to: '/blog/brain-develop',
                            img: brain
                        },

                        {
                            title: 'Как развить уверенность в ребенке',
                            text: 'Карманный терапевт. Подсказки для родителей. "Как воспитать' +
                                ' уверенного в себе ребенка"  Опишем неправильное  воспитание. Все родом с детства.',
                            to: '/blog/confidence',
                            img: confidenceImage,
                        },
                        {
                            title: 'ПРИГЛАШАЮ',
                            text: 'Вас на консультацию! Если у Вас есть вопросы на которые вы затрудняетесь' +
                                ' дать ответ. К примеру, если у вашего ребенка',
                            to: '/blog/welcome',
                            img: welcomeImage
                        },
                        {
                            title: 'Самостоятельный ребёнок',
                            text: 'Как воспитать самостоятельного ребенка, чтоб он проснулся и знал что ему делать и сам себя ' +
                                'организовывал? Чтоб родитель не напоминал постоянно, что нужно делать сейчас и не нависал над' +
                                ' ним теряя свое терпение?',
                            to: '/blog/independent',
                            img: independentImage
                        },
                        {
                            title: 'Аутизм что это? разбираем',
                            text: 'Поддерживаю Всех интересующися и желающих разобраться что такое аутизм,\n' +
                                '  в его проявлениях, причинах, прогнозе и что с этим делать? Многих вводит заблуждение аутизм и РАС, что такое\n' +
                                '  атипичный аутизм. Обо всем об этом подробно здесь и сейчас!\n' +
                                '  Есть Международный классификатор болезней в котором звучит: Аутизм-нарушение реципроктной коммуникации.\n' +
                                '  Что это? Реципроктной-ты мне я тебе.',
                            to: '/blog/autismIs',
                            img: parallaxImage
                        },
                        {
                            title: 'Детские истерики',
                            text: 'Детские истерики, как нам это знакомо! С самого раннего детства ребенок привлекает внимание\n' +
                                'родителя к себе плачем, а повзрослев, демонстративно-негативным поведением где-то\n' +
                                'примерно начиная с 2.5 лет.',
                            to: '/blog/children-tantrums',
                            img: childrenTantrums
                        },
                        {
                            title: 'Симптомы  аутизма',
                            text: 'При аутистическом расстройстве слабое звено – социальное\n' +
                                'поведение. Давайте разберемся, что включает в себя понятие',
                            to: '/blog/symptoms-of-autism',
                            img: symptomsOfAutism
                        },
                        {
                            title: 'Фобии',
                            text: 'Приветствую всех. Сегодня мы обсудим тему фобий. Страх присущ всем людям.\n' +
                                'Это базовая эмоция, отвечающая за безопасность, в основе инстинкт лежит\n' +
                                'самосохранения. Испытывать страх нормальное явление в отличие от фобий.',
                            to: '/blog/phobias',
                            img: sy
                        },

                    ]


            }
        },
        metaInfo: {
            title: 'Блог | Статьи на тему аутизма',
            meta: [
                {
                    vmid: 'keywords',
                    name: 'keywords',
                    content: 'блог  статьи на тему особенные  дети'
                },
                {
                    vmid: 'description',
                    name: 'description',
                    content: 'Интересные статьи по психологии, раскрываю разныые темы по психологии'
                }
            ]
        }
    }
</script>

<style scoped>

    .text {
        width: 300px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;

    }

    .titleBlog {
        color: rgb(227, 242, 253);
        background-color: #574d58;
    }

    @media screen and (min-width: 400px) {
        .card-blog {
            max-width: 344px;

        }
    }

</style>