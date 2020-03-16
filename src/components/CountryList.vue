<template>
  <div class="country-list">
    <Country v-for="countryDatum in countryData"
      :key="countryDatum.OBJECTID"
      :country-data="countryDatum"
      />
  </div>
</template>

<script>
import Country from "./Country";

export default {
  name: 'CountryList',
  components: {
    Country
  },
  props: {
    countryData: {
      type: Array,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.country-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
