<template>



    <v-card outlined color="transparent" max-width="1500" elevation="0" class="pa-8 ma-4">
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

                        <v-btn icon :disabled="card.linkedin == null"
                               :href="card.linkedin">
                            <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                    </v-card-actions>



                </v-card>
            </v-col>

        </v-row>
        
        <v-row class="text-center">
            <v-col cols="2">
                <v-spacer></v-spacer>
            </v-col>
            <v-col cols="4" class="text-center d-flex justify-center"
                   v-for="card in VIPS"
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

                        <v-btn icon :disabled="card.linkedin == null"
                               :href="card.linkedin">
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
                    Industry Member
                </p>
                <v-divider class="mt-n4 mb-2"></v-divider>
                <p class="text-center font-weight-light">Jon Lotz</p>
            </v-col>
            <v-col cols="3"><v-spacer></v-spacer></v-col>
        </v-row>

        <v-container fluid>
            <v-layout justify-center align-center>
                <v-flex shrink>
                    <v-img width="1200px" class="mt-4 elevation-2" :src="require('../assets/year2/team_full.jpg')"></v-img>
                </v-flex>
            </v-layout>
        </v-container>

    </v-card>


</template>

<script>
    export default {

        data() {
            return {
                cards: [
                    { title: 'Michael Bearly', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Kyle Biskupski', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Gwyn Tari', src: require('../assets/year2/gwyn_tari.jpg'), flex: 6, linkedin: "https://www.linkedin.com/in/gwyndolyn-tari-278946215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2B%2FD5pQFLRd2w2dKtWGD8Ig%3D%3D", text: "I am a senior computer engineering student. I am interested in control systems and robotics. I am also a RamBOTs co-captain, vice president for CSU's chapter of IEEE-HKN, president of ECE outreach, and an ENpower mentor." },
                    { title: 'Evan Hassman', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Alex Kolodzik', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Kyle Moore', src: require('../assets/placeholder.jpg'), flex: 6 },
                    {
                        title: 'Eric Olson', src: require('../assets/year2/eric_olson.jpg'), flex: 6, text: "I am a senior in mechanical engineering with a minor in mathematics. I'm interested in all things tech and renewable energy. I'm also a big Avalanche and Broncos fan."},
                    { title: 'Eric Percin', src: require('../assets/year2/eric_percin.jpg'), flex: 6, linkedin: "https://www.linkedin.com/in/eric-percin-044a13215/", text: "I am a senior majoring in Computer Engineering with a minor in Mathematics. I am interested in hardware-software codesign and hope to work in embedded systems. My hobbies include working with computers, cycling, and esports." },
                    { title: 'Thomas Veldhuizen', src: require('../assets/placeholder.jpg'), flex: 6 },

                    
                ],
                VIPS: [
                    { title: 'Anna Biolchini', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Joey Reback', src: require('../assets/placeholder.jpg'), flex: 6 },
                ]
            }
        },
    }</script>
