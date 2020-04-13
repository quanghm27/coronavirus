<template>
  <div class="country-detail">
    <div class="clash-card">
         <country-flag :country="countryCode" size='big'/>
      <div class="clash-card__level clash-card__level--archer"></div>
      <div class="clash-card__unit-name">{{  countryData.Country_Region }}</div>
      <div class="clash-card__unit-description">
        <dd>{{ countryData.Confirmed | formatNumber}}</dd>Cases
      </div>

      <div class="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
        <div class="one-third">
          <div class="stat active-cases">{{ countryData.Active | formatNumber }}</div>
          <div class="stat-value">Active</div>
        </div>

        <div class="one-third">
          <div class="stat death-cases">{{ countryData.Deaths | formatNumber }}</div>
          <div class="stat-value">Deaths</div>
        </div>

        <div class="one-third">
          <div class="stat recovered-cases">{{ countryData.Recovered | formatNumber }}</div>
          <div class="stat-value">Recovered</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCountryCode } from "../countryCode.js";
import nFormater from '../helpers/formatNumber'

export default {
  name: 'Country',
  props: {
    countryData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      countryCode: null,
    }
  },
  created: function() {
    this.countryCode = getCountryCode(this.countryData.Country_Region) || this.countryData.Country_Region;
  },
  filters: {
    formatNumber (value) {
      return nFormater(value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.country-detail {
  width: 300px;
  padding: 20px 10px;
}

@import url("https://fonts.googleapis.com/css?family=Lato:400,700,900");
$border-radius-size: 14px;
*,
*:before,
*:after {
  box-sizing: border-box;
}
$color: #385399;

.clash-card {
  background: #f8f8f8;
  width: 100%;
  display: inline-block;
  position: relative;
  text-align: center;
  z-index: 9999;
}
.clash-card__unit-name {
  font-size: 20px;
  color: #304455;
  font-weight: 900;
  margin-bottom: 5px;
}
.clash-card__unit-description {
  padding: 20px 0;
  margin-bottom: 10px;
  font-weight: bold;
  dd {
    margin: 0;
    color: #ed1b24;
    font-size: 20px;
  }
}
.clash-card__unit-stats--archer {
  background: $color;
  .one-third {
    border-right: 1px solid darken($color, 8%);
  }
}
.clash-card__unit-stats {
  font-weight: 700;
  display: flex;
  .one-third {
    color: #cccccc;
    width: 33.33%;
    padding: 20px 15px;
    &:last-child {
      border: none;
    }
  }
  .active-cases {
    color:cornsilk;
  }
  .death-cases {
    color: #ed1b24;
  }
  .recovered-cases {
    color: #93c572;
  }
  sup {
    position: absolute;
    bottom: 4px;
    font-size: 45%;
    margin-left: 2px;
  }
  .stat {
    position: relative;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .stat-value {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 11px;
  }
  .no-border {
    border-right: none;
  }
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
</style>