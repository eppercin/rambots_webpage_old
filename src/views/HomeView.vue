<template>


    <v-container>
        <v-row class="mt-4">
            <v-col cols="5">
                <v-card class=" pa-2 mt-12 justify-center" outlined color="transparent" height="100%">
                    <div class="text-center">
                        <v-row>
                            <v-col cols="1"><v-spacer></v-spacer></v-col>
                            <v-col cols="10">
                                <v-img width="600px" class="mt-6" :src="require('../assets/RamLogoText.png')"></v-img>

                                <v-btn text class="mt-0"
                                       href="https://projects-web.engr.colostate.edu/ece-sr-design/AY21/outreach/"
                                       target="_blank">
                                    An ECE Outreach Project<v-icon right>
                                        mdi-link
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col cols="1"><v-spacer></v-spacer></v-col>
                        </v-row>
                        
                    </div>
                </v-card>
            </v-col>
            <v-col cols="7">
                <v-card class="pa-2" outlined color="transparent">
                    <v-carousel height="600" width="500">
                        <v-carousel-item reverse-transition="fade-transition"
                                         transition="fade-transition"
                                         v-for="(item, i) in items"
                                         :key="i">
                            <v-img :src="item.src" contain></v-img>
                        </v-carousel-item>

                    </v-carousel>
                </v-card>
            </v-col>


        </v-row>

        <v-row>
            <v-col cols="2">
                <v-spacer></v-spacer>
            </v-col>
            <v-col cols="8">
                <v-card height="400px" outlined color="transparent" class="mb-4">
                    <v-card-text>
                        <div>About Us</div>
                        <p class="text-h4 text--primary mt-0">
                            Project Summary
                        </p>
                        <p>
                            RAMbots is an extension of the ECE Outreach team responsible for gaining interests in STEM through the medium of robotics. This year's design as developed the foundations of a open-source quadrupedal robot similar in functionality to Boston Dynamic's Spot®. The intent is to make a high quality, modular, and open-source design that can act as an alternative to leading industry robotic platforms. The goal is to use this platform so others can have a comparable open-source design to build projects and spark interests in robotics and STEM.
                        </p>
                        <p class="text-h4 text--primary  mt-12">
                            Background
                        </p>
                        <p>
                            As a collaborative effort with the ECE Outreach team, this project aims to work as a continuation to help future generations of senior design engineers to have something to work with, improve upon, and show off to get students of all ages interested in STEM. The team wants to have something amazing to show that will instantly inspire others. Realizing that many of the current market offerings are prohibitively expensive, we also aim to make this as in-expensive and as easy to set up as possible.
                        </p>
                        <p class="text-h4 text--primary  mt-12">
                            Constraints
                        </p>
                        <p>
                            The main plan project plan is to design and build a Robotic Ram controlled by a Raspberry Pi 4B, as well as real time operations with an ESP32. The robotic ram will also include custom actuators, cameras, and will be almost entirely 3D printed. The base design comes from the OpenDog v3 project; as the existing hardware is already available, we aim to improve on the electronics and software.
                        </p>
                        <p class="text-h4 text--primary  mt-12">
                            Goals
                        </p>
                        <p>
                            Our goals of this project are in two parts: first year, and following year.

                            The first year goals, which have largely already been achieved, include the following:

                            Research on hardware platforms
                            Small-scale implementation of several platforms to choose the best fit
                            Create a full-loop proof of concept image recognition program running on a Raspberry Pi
                            Create a firmware platform from an ESP32, with extensive functionality prepared
                            Print and assemble the 3D printed platform
                            Order remaining parts for integration
                            Following year goals are focused on integration. At this point in the project, all the pieces are present, but are yet to be put together. We anticipate that a first semester's of future work will show signs of improvements in this regard. Following this, real platform development can begin, and this project can turn into a productive educational tool.
                        </p>
                    </v-card-text>

                </v-card>
            </v-col>
            <v-col cols="2">
                <v-spacer></v-spacer>
            </v-col>
        </v-row>



        <v-row class="text-center">
            <v-col cols="12">




            </v-col>

            <v-col>

            </v-col>

        </v-row>







    </v-container>














</template>

<script>
    export default {
        data() {
            return {
                logo: require('../assets/chassis.jpg'),
                url: "https://projects-web.engr.colostate.edu/ece-sr-design/AY21/outreach/",
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
    }
</script>
