<template>



    <v-card v-if="!this.mobile" color="white" elevation="0" class="pa-8 ma-4">
        <v-row class="text-center">
            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in cards"
                   :key="card.title">

                <v-card width="250px">
                    <v-img :src="card.src"
                           class="white--text align-end"
                           gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                           height="300px">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                    <v-card outlined color="transparent" height="220px">

                        <v-card-text class="grow text-left px-2 mt-2 mb-n2">{{card.text}}</v-card-text>
                    </v-card>

                    <v-card-actions>


                        <v-btn icon :disabled="card.resume == null">
                            <v-icon>mdi-file-account</v-icon>
                        </v-btn>

                        <v-btn icon :disabled="card.email == null">
                            <v-icon>mdi-email</v-icon>
                        </v-btn>

                        <v-btn icon :disabled="card.linkedin == null">
                            <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                    </v-card-actions>



                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3"><v-spacer></v-spacer></v-col>
            <v-col cols="3">
                <p class="text-center font-weight-light text-h4 text--primary mt-8">
                    Advisor
                </p>
                <v-divider class="mt-n4 mb-2"></v-divider>
                <p class="text-center font-weight-light">Olivera Notaros</p>
            </v-col>

            <v-col cols="3">
                <p class="text-center font-weight-light text-h4 text--primary mt-8">
                    Industry Members
                </p>
                <v-divider class="mt-n4 mb-2"></v-divider>
                <p class="text-center font-weight-light">David Farrell</p>
                <p class="text-center font-weight-light">Ian Bernstein</p>
            </v-col>
            <v-col cols="3"><v-spacer></v-spacer></v-col>
        </v-row>


        <v-container fluid>
            <v-layout justify-center align-center>
                <v-flex shrink>
                    <v-img width="1200px" class="mt-4 elevation-2" :src="require('../assets/year1/team_full.jpg')"></v-img>
                </v-flex>
            </v-layout>
        </v-container>

    </v-card>

    <v-card v-else outlined color="transparent">
        <v-row class="text-center mb-12 mt-2">
            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in cards"
                   :key="card.title"
                   cols="12">

                <v-card width="250px">
                    <v-img :src="card.src"
                           class="white--text align-end"
                           gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                           height="300px">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                    <v-card outlined color="transparent" height="220px">

                        <v-card-text class="grow text-left px-2 mt-2 mb-n2">{{card.text}}</v-card-text>
                    </v-card>

                    <v-card-actions>


                        <v-btn icon :disabled="card.resume == null">
                            <v-icon>mdi-file-account</v-icon>
                        </v-btn>

                        <v-btn icon :disabled="card.email == null">
                            <v-icon>mdi-email</v-icon>
                        </v-btn>

                        <v-btn icon :disabled="card.linkedin == null"
                               :href="card.linkedin">
                            <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                    </v-card-actions>



                </v-card>
            </v-col>
        </v-row>
        <v-row>

            <v-col cols="6">
                <p class="text-center font-weight-light text-h4 text--primary mt-8">
                    Advisor
                </p>
                <v-divider class="mt-n4 mb-2"></v-divider>
                <p class="text-center font-weight-light">Olivera Notaros</p>
            </v-col>

            <v-col cols="6">
                <p class="text-center font-weight-light text-h4 text--primary mt-8">
                    Industry Members
                </p>
                <v-divider class="mt-n4 mb-2"></v-divider>
                <p class="text-center font-weight-light">David Farrell</p>
                <p class="text-center font-weight-light">Ian Bernstein</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col lass="text-center d-flex justify-space-around" cols="12">
                <v-img width="400" class="mt-4 elevation-2" :src="require('../assets/year1/team_full.jpg')"></v-img>
            </v-col>
        </v-row>

    </v-card>


</template>

<script>
    export default {
        mounted() {
            this.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        },
        data() {
            return {
                mobile: false,
                cards: [
                    { title: 'Kristopher Alquist', src: require('../assets/year1/kristopher_alquist.jpg'), flex: 6, text:"I am a fourth-year Computer Engineering student. I am interested in embedded systems, VLSI design, artificial intelligence, and machine learning. I have a passion for solving problems in resource limited environments and hope to contribute to future spacecraft designs." },
                    { title: 'Jared Davis', src: require('../assets/year1/jared_davis.jpg'), flex: 6, text:"Senior Bachelor of Science in Electrical Engineering with a minor in Japanese. Research experience at CSU's Powerhouse Campus in DC-DC power distribution. Planning on going to graduate school in Japan and become an international engineer. Interested in Renewable Power." },
                    { title: 'Craig Olson', src: require('../assets/year1/craig_olson.jpg'), flex: 6, text:"I am a senior at Colorado State University Studying Electrical Engineering. I'm planning on pursuing a career in renewable energy or circuit design." },
                    { title: 'Devin Pohl', src: require('../assets/year1/devin_pohl.jpg'), flex: 6, text:"Senior year Computer Engineering student. Software developer at Microsoft. Interests in low-level programming, compilers, and process improvement. Hobbies include contributing to open source software, engineering vintage electronics, and configuring Emacs." },
                    { title: 'OscarCoronadoRosales', src: require('../assets/year1/oscar_coronado_rosales.jpg'), flex: 6, text:"Oscar Coronado Rosales is an Electrical Engineering student with an interest in Robotics, Control Systems, and Power systems / electronics. His hobbies include being hanging out with friends, learning new programming languages, and simply relaxing after doing schoolwork." },
                    { title: 'Ritwik Vadapally', src: require('../assets/year1/ritwik_vadapally.jpg'), flex: 6, text:"I am senior majoring in Electrical Engineering with a minor in Mathematics. I am interested in pursuing a career in Embedded Systems, Machine Learning, or Control Systems. I am very interested in the automotive industry and in my free time I like to see new places and listen to music." },
                    { title: 'Thomas Veldhuizen', src: require('../assets/year1/thomas_veldhuizen.jpg'), flex: 6, text:"I am a fourth year majoring in Computer Engineering with a minor in Computer Science. I would like to pursue a career in cyber security or in secure hardware design. My hobbies include learning new languages, programming or otherwise and practicing music." },

                    { title: 'Alex Kolodzik', src: require('../assets/year2/alex_kolodzik.jpg'), flex: 6, text:"Alex Kolodzik is a junior at CSU pursuing an electrical engineering degree. He has a passion for robots and his passion project is building his own functioning Iron Man Helmet." },
                    { title: 'Gwyn Tari', src: require('../assets/year2/gwyn_tari.jpg'), flex: 6, text:"Third year computer engineering student. Senior design VIP student. ECE outreach student and ENpower Engineering mentor." },
                ],
               
            }
        },
    }</script>
