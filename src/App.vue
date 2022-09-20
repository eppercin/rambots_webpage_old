<template>
    <v-app>

        <v-app-bar app
                   :src="require('./assets/appbar.png')"
                   color="#1E4D2B" >
            <v-app-bar-nav-icon color="white"> </v-app-bar-nav-icon>
            <v-img max-width="201px" :src="require('./assets/CSUWatermarkSmall.png')"></v-img>
            




            <template v-slot:extension >
                <v-flex class="ml-n8">
                    <v-tabs color="#1E4D2B" align-with-title>
                        <v-tab to="/">Home</v-tab>
                        <v-tab to="/timeline">Timeline</v-tab>
                        <v-tab to="/team">Team</v-tab>
                        <v-tab to="/resources">Documents</v-tab>
                        <v-tab to="/gallery">Gallery</v-tab>
                    </v-tabs>
                </v-flex>
               
            </template>
        </v-app-bar>

     
        <v-main>

            <router-view />
        </v-main>

        <v-footer app bottom fixed padless
    color="#1E4D2B"
    
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class=" py-1 text-center white--text"
             cols="12">
          <a href="https://advancing.colostate.edu/ENG/ECE_SRDESIGN/GIVE"
             class="white--text text-decoration-underline">Support our program</a> —
          <a href="https://www.engr.colostate.edu/ece/senior-design/?ay=2022"
             class="white--text text-decoration-underline">Other ECE Sr. Design projects</a> —
          <a href="https://www.engr.colostate.edu/ece/"
             class="white--text text-decoration-underline">ECE Department</a> —
          <a href="http://www.colostate.edu/"
             class="white--text text-decoration-underline">CSU main website</a>
      </v-col>
    </v-row>
  </v-footer>

    </v-app>
</template>

<script>
    export default {
        data: () => ({
            links: null,
            model: 0,
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
            appbar: require('./assets/appbar.png'),
        }),
    }
</script>
