<template>




    <v-container>

        <v-row>
    <v-col cols="2">
        <v-spacer></v-spacer>
    </v-col>

    <v-card  max-width="1200" class="mt-4 pa-4">

<v-tabs>
<v-tab>2022/2023</v-tab>
<v-tab>2021/2022</v-tab>
</v-tabs>
<v-card color="blue-grey lighten-5" class="pt-8 pl-8 pr-8 ma-4">
<v-row class="text-center">
   
<v-col class="text-center flex-column"
v-for="card in cards"
  :key="card.title"
>

  <v-card max-width="250px">
    <v-img
      :src="card.src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="card.title"></v-card-title>
    </v-img>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>


</v-col>
</v-row>
</v-card>
</v-card>

    <v-col cols="2">
        <v-spacer></v-spacer>
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
                cards: [
                    { title: 'Michael Bearly', src:  require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Kyle Biskupski', src:  require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Evan Hassman', src:  require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Alex Kolodzik', src:  require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Eric Percin', src:  require('../assets/placeholder.jpg'), flex: 6 },
                    { title: 'Thomas Veldhuizen', src:  require('../assets/placeholder.jpg'), flex: 6 }, 
                    { title: 'Anna Biolchini', src:  require('../assets/placeholder.jpg'), flex: 6 },               
                    { title: 'Eric Olson', src:  require('../assets/placeholder.jpg'), flex: 6 },               
                    { title: 'Kyle Moore', src:  require('../assets/placeholder.jpg'), flex: 6 },               
              
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
    }
</script>
