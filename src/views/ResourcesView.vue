<template>



    <v-row>
        <v-col cols="2">
            <v-spacer></v-spacer>
        </v-col>
        <v-col cols="8">
            <v-card max-width="1500" class="mt-4 pa-4">
                <h3>This page will contain project reports, Github repositories, etc. </h3>
            </v-card>
        </v-col>

        <v-col cols="2">
            <v-spacer></v-spacer>
        </v-col>
    </v-row>


   

</template>

<script>

    export default {

        data() {
            return {
                logo: require('../assets/chassis.jpg'),
               
            }
        },
    }</script>
