<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Estamos com nossa loja em Balneário Piçarras, venha conhecer!</h3>
    <!--The div element for the map -->
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: 'MapStore',
  data () {
    return {
      msg: 'Marias Brechó!'
    }
  },
  methods: {
    create_map () {
      console.log('create_map')
    },
    mapLoaded () {
      // eslint-disable-next-line no-undef
      return (typeof google === 'object' && typeof google.maps === 'object')
    },
    initMap () {
      if (!this.mapLoaded()) {
        setTimeout(function (init) {
          console.log('timeout')
          init()
        }, 500, this.initMap)
        console.log('not loaded')
        return
      }
      console.log('creating map')
      // The location of Mania Brechó
      var brecho = {lat: -26.768013, lng: -48.670655}
      // The map, centered at Uluru
      // eslint-disable-next-line no-undef
      var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: brecho})
      // The marker, positioned at Uluru
      // eslint-disable-next-line no-undef,no-unused-vars
      var marker = new google.maps.Marker({position: brecho, map: map, title: 'Mania Brechó'})
    }
  },
  mounted () {
    console.log('mounted')
    this.create_map()
    this.initMap()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* Set the size of the div element that contains the map */
#map {
  height: 250px;  /* The height is 400 pixels */
  width: 90%;  /* The width is the width of the web page */
  margin-left: auto;
  margin-right: auto;
 }
</style>
