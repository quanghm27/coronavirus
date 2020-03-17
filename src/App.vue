<template>
  <div id="app">
    <div v-if="emptyData"><p>The system could not retrieve any data from the server</p></div>
    <div v-else>
      <h3>Coronavirus (COVID-19) statistics</h3>
      <h4>{{ timestamp }}</h4>
      <CountryList :country-data="countryBaseData" />
    </div>
  </div>
</template>

<script>
import CountryList from './components/CountryList.vue';
import axios from "axios";

const API_ENDPOINT =
  "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&outSR=102100&resultOffset=0&resultRecordCount=100&cacheHint=true&fbclid=IwAR3WOSOjHOo31y7U4vctHZ_vn_gC-58UrU3vwRuCNpcawt0Lk9MPuQ0bLOc";

export default {
  name: 'App',
  components: {
    CountryList
  },
  data: function(){
    return {
        countryBaseData: [],
        emptyData: false,
        timestamp: ""
    }
  },
  created:  function() {
     this.fetchData();
     this.getNow();
  },
  methods: {
    fetchData: async function() {
      const response = await axios.get(API_ENDPOINT);
      if (response.data.features) {
        this.countryBaseData = response.data.features.map(i => i.attributes);
      } else {
        this.emptyData = true;
      }
    },
    getNow: function() {
        const today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        const strTime = hours + ':' + minutes + ' ' + ampm;

        this.timestamp  =  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() + " " + strTime;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: linear-gradient(
      to bottom,
      rgba(140, 122, 122, 1) 0%,
      rgba(175, 135, 124, 1) 65%,
      rgba(175, 135, 124, 1) 100%
    )
    fixed;
  background-size: cover;
  font: 14px/20px "Lato", Arial, sans-serif;
  color: #9e9e9e;
  margin-top: 30px;
}
</style>
