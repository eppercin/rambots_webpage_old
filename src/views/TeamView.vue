<template>



    <v-row>
        <v-col cols="1">
            <v-spacer></v-spacer>
        </v-col>
        <v-col>
            <v-card max-width="1500" class="mt-4 pa-4">
                <v-tabs @change="console.log(tab)" v-model="tab" color="#1E4D2B">
                    <v-tab >2022/2023</v-tab>
                    <v-tab >2021/2022</v-tab>
                </v-tabs>
                <v-divider></v-divider>
                <TeamYear2 v-if="tab == 0"/>
                <TeamYear1  v-if="tab == 1"/>
            </v-card>
        </v-col>

        <v-col cols="1">
            <v-spacer></v-spacer>
        </v-col>
    </v-row>


   

</template>

<script>
    import TeamYear1 from '../components/TeamYear1.vue'
    import TeamYear2 from '../components/TeamYear2.vue'
    export default {
        computed: {
            console: () => console,
            window: () => window,
        },
        components: {
            TeamYear1,
            TeamYear2
        },
        data() {
            return {
                logo: require('../assets/chassis.jpg'),
                tab: null,
                url: "https://projects-web.engr.colostate.edu/ece-sr-design/AY21/outreach/",
                selectedCards: [],
                cards2223: [
                    { title: 'Michael Bearly', src:  require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Kyle Biskupski', src:  require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Evan Hassman', src:  require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Alex Kolodzik', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Kyle Moore', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Eric Olson', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Eric Percin', src:  require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Thomas Veldhuizen', src:  require('../assets/placeholder.jpg'), flex: 6 },
                    
                    

                    { title: 'Anna Biolchini', src: require('../assets/placeholder.jpg'), flex: 6 },

                ],
                cards2122: [
                    { title: 'Kristopher Alquist', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Jared Davis', src: require('../assets/placeholder.jpg'), flex: 6 },
                    
                    { title: 'Alex Kolodzik', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Craig Olson', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Devin Pohl', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Oscar Rosales Coronado', src: require('../assets/placeholder.jpg'), flex: 6 },
                    
                    { title: 'Ritwik Vadapally', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Thomas Veldhuizen', src: require('../assets/placeholder.jpg'), flex: 6 },

                    { title: 'Alex Kolodzik', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Gwyn Tari', src: require('../assets/placeholder.jpg'), flex: 6 },
                ],
                items: [
                    {
                        src: require('../assets/chassis.jpg'),
                    },
                    {
                        src: require('../assets/chassis2.jpg'),
                    },

                ],
            }
        },
    }</script>
