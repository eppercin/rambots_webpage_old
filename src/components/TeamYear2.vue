<template>


    
    <v-card v-if="!this.mobile" outlined color="transparent" :max-width="1500" elevation="0" class="pa-8 ma-4">

        <v-row class="text-center">

            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in cards"
                   :key="card.title"
                   >
                    
                <v-card width="250px">
                    <v-img :src="card.src"
                           class="white--text align-end"
                           gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
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

            <v-col class="text-center d-flex justify-center"
                   v-for="card in VIPS"
                   :key="card.title">


                <v-card v-if="card.title.length == 1" width="250px" outlined color="transparent">

                </v-card>

                <v-card v-else width="250px">
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
                    Industry Member
                </p>
                <v-divider class="mt-n4 mb-2"></v-divider>
                <p class="text-center font-weight-light">Jon Lotz</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col lass="text-center d-flex justify-space-around" cols="12">
                <v-img width="400" class="mt-4 elevation-2" :src="require('../assets/year2/team_full.jpg')"></v-img>
            </v-col>
        </v-row>
     
    </v-card>

</template>

<script>
    export default {
        mounted() {
            this.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            if (this.mobile) {
                this.cards.push(this.VIPS[1])
                this.cards.push(this.VIPS[2])
            }

        },
        data() {
            return {
                mobile: false,
                cards: [
                    { title: 'Michael Bearly', src: require('../assets/year2/michael_bearly.jpg'), flex: 6, text: "I am a senior majoring in Electrical Engineering with a minor in Machine Learning. I am currently interning on the Workstations team at Hewlett Packard and hope to start my career there. In my free time I like running, hammocking, working with electronics, and blacksmithing." },
                    { title: 'Kyle Biskupski', src: require('../assets/year2/kyle_biskupski.jpg'), flex: 6, text: "I am a senior in Electrical Engineering at Colorado State University. I enjoy learning how sensors work and integrating them into a system with microcontrollers to solve problems." },
                    { title: 'Evan Hassman', src: require('../assets/year2/evan_hassman.jpg'), flex: 6, linkedin: "https://www.linkedin.com/in/evan-hassman-75a091251/", text: "I am a senior in Computer Engineering with a minor in Computer Science. I am interested in computer architecture, software, and IoT devices. In my spare time I watch Movies, build Legos, and play video games while trying to live a healthy lifestyle." },
                    { title: 'Alex Kolodzik', src: require('../assets/year2/alex_kolodzik.jpg'), linkedin: "https://www.linkedin.com/in/alex-kolodzik-029/", flex: 6, text: "I am a senior majoring in Electrical Engineering as well as the co-captain of the Rambots senior design project. I am interested hardware design and hope to work in the robotics field. I volunteer with Outreach, and I am currently in the process of building my second Iron Man Helmet for them." },
                    { title: 'Kyle Moore', src: require('../assets/year2/kyle_moore.jpg'), flex: 6, linkedin: "https://www.linkedin.com/in/kyle-moore-8a7189222/", text: "My name is Kyle Moore and I am a fifth year Mechanical Engineering student. I am interested in the aerospace field, specifically in the design space and review of physics for designs. Away from school I work as a bartender, and in my free time I like to play/watch hockey. Go Avs!" },
                    {
                        title: 'Eric Olson', src: require('../assets/year2/eric_olson.jpg'), flex: 6, text: "I am a senior in mechanical engineering with a minor in mathematics. I'm interested in all things tech and renewable energy. I'm also a big Avalanche and Broncos fan."},
                    { title: 'Eric Percin', src: require('../assets/year2/eric_percin.jpg'), flex: 6, linkedin: "https://www.linkedin.com/in/eric-percin-044a13215/", text: "I am a senior majoring in Computer Engineering with a minor in Mathematics. I am interested in hardware-software codesign and hope to work in embedded systems. My hobbies include working with computers, cycling, and esports." },
                    { title: 'Gwyn Tari', src: require('../assets/year2/gwyn_tari.jpg'), flex: 6, linkedin: "https://www.linkedin.com/in/gwyndolyn-tari-278946215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2B%2FD5pQFLRd2w2dKtWGD8Ig%3D%3D", text: "I am a senior computer engineering student. I am interested in control systems and robotics. I am also a RamBOTs co-captain, vice president for CSU's chapter of IEEE-HKN, president of ECE outreach, and an ENpower mentor." },
                    { title: 'Thomas Veldhuizen', src: require('../assets/year2/thomas_veldhuizen.png'), flex: 6, text: "I am a senior in Computer Engineering with a minor in computer science. I am interested in embedded systems and information security. My hobbies are hiking and traveling, I also like to box." },

                    
                ],
                VIPS: [
                    { title: 'a', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Anna Biolchini', src: require('../assets/year2/anna_biolchini.jpg'), flex: 6, linkedin: "https://www.linkedin.com/in/anna-biolchini-4824a224b", text: "I am a 3rd year Electrical Engineering student and I have an interest in robotics and aerospace. In my free time I like to hike, read, and try new things." },
                    { title: 'Joey Reback', src: require('../assets/year2/joey_reback.jpg'), flex: 6, linkedin: "https://www.linkedin.com/in/joseph-reback-54327b250", text: "My name is Joey Reback and I'm a first year computer engineer major. I'm interested in working with robotics, programming, and hope to work in research and development. In my free time I like running, electronics repair, and backpacking. " },
                    { title: 'b', src: require('../assets/placeholder.jpg'), flex: 6 },
                ]
            }
        },
    }</script>
