<template>
  <div id="app">
    <CountryList :country-data="countryBaseData" />
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
        countryBaseData: []
    }
  },
  created:  function() {
     this.fetchData();
  },
  methods: {
    fetchData: async function() {
      const response = await axios.get(API_ENDPOINT);
      this.countryBaseData = response.data.features.map(i => i.attributes);
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
</style>
