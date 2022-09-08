<template>



    <v-card color="white" elevation="0" class="pa-8 ma-4">
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
    </v-card>


</template>

<script>
    export default {

        data() {
            return {
                cards: [
                    { title: 'Michael Bearly', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Kyle Biskupski', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Evan Hassman', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Alex Kolodzik', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Kyle Moore', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Eric Olson', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Eric Percin', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Thomas Veldhuizen', src: require('../assets/placeholder.jpg'), flex: 6 },



                    { title: 'Anna Biolchini', src: require('../assets/placeholder.jpg'), flex: 6 },

                ],
               
            }
        },
    }</script>
