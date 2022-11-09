<template>


    <v-card color="white" elevation="2" class="pa-8 ma-4">

        <p class="font-weight-medium text-h4 text--primary mt-4 text-center">Construction</p>
        <v-row class="text-center mb-12">
            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in construction"
                   :key="card.title"
                   :cols="mobile ? 12 : 4">

                <v-card>
                    <v-img :src="card.src"
                           class="white--text align-end"
                           gradient="to bottom, rgba(0,0,0,.05), rgba(0,0,0,.2)">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>


        <p class="font-weight-medium text-h4 text--primary mt-12 text-center">Art</p>
        <v-row class="text-center mb-12">
            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in art"
                   :key="card.title"
                   :cols="mobile ? 12 : 4">

                <v-card>
                    <v-img :src="card.src"
                           class="white--text align-end">
                        <v-card-title class=" black--text" v-text="card.title"></v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>


        <p class="font-weight-medium text-h4 text--primary mt-12 text-center">Team</p>
        <v-row class="text-center  mb-12">
            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in team"
                   :key="card.title"
                  :cols="mobile ? 12 : 6">

                <v-card>
                    <v-img 
                           :src="card.src"
                           class="white--text align-end"
                           :height="mobile ? 300 : 600"
                           gradient="to bottom, rgba(0,0,0,.05), rgba(0,0,0,.2)">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>



    </v-card>




</template>

<script>

    export default {
        mounted() {
            this.mobile = window.innerWidth <= 760
        },
        data() {
            return {
                mobile: false,
                logo: require('../assets/gallery/chassis.jpg'),
                construction: [
                    { title: 'Chassis side view', src: require('../assets/gallery/chassis.jpg'), flex: 4 },
                    { title: 'Chassis diagonal view', src: require('../assets/gallery/chassis2.jpg'), flex: 4 },
                    { title: 'Assembling the robot', src: require('../assets/gallery/robot_assembly.jpg'), flex: 4 },
                    { title: 'Programming the Pi', src: require('../assets/gallery/pi_programming.jpg'), flex: 4 },
                    { title: 'Disassembling a leg for testing', src: require('../assets/gallery/leg_testing.jpg'), flex: 4 },
                    { title: 'Meeting with EIR', src: require('../assets/gallery/eir_meeting.jpg'), flex: 4 },
                ],
                art: [
                    { title: 'Logos by Gwyn Tari', src: require('../assets/gallery/RamLogoLarge.png'), flex: 4 },
                    { title: ' ', src: require('../assets/gallery/RamLogoMed.png'), flex: 4 },
                    { title: '', src: require('../assets/gallery/RamLogoSmall.png'), flex: 4 },
                ],
                team: [
                    { title: 'Team Seniors', src: require('../assets/team_seniors.jpg'), flex: 6 },
                    { title: 'Full Team', src: require('../assets/year2/team_full.jpg'), flex: 6 },

                ],
            }
        },
    }</script>
