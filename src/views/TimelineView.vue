<template>



    <v-row>
        <v-col cols="2">
            <v-spacer></v-spacer>
        </v-col>
        <v-col :cols="this.mobile ? 12 : 8">
            <v-card max-width="1800" class="mt-4 pa-4">
                <p class="text-h4 text--primary mt-4">
                    Project Timeline
                </p>
                <v-img contains class="ma-4" :src="require('../assets/schedule-1.png')"></v-img>

                <p>
                    The primary critical path of this project is as follows: motor functionality, ODrive functionality, wiring, leg movement functionality, locomotion functionality. By delegating each of these tasks to team members of relevant specializations, the team plans to have the motors and ODrives working by halfway through the fall semester. This will allow the team to dedicate the remainder of the semester to leg movement--a complicated task which will last well into the spring semester. Once leg movement is deemed sufficient, the team will spend the rest of the spring semester working on general locomotion.
                </p>
                <p>
                    Tasks such as machine learning, website development, and administration are not dependent on the critical path and will be worked on concurrently. Other smaller tasks such as power requirements, 3D printing additional parts, and sensor testing will be conducted as deemed necessary by the critical path.
                </p>
            </v-card>
        </v-col>

        <v-col cols="2">
            <v-spacer></v-spacer>
        </v-col>
    </v-row>


   

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
               
            }
        },
    }</script>
