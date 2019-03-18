<template>
  <div id="app">
    <increase-font-size :fontSize="fontSize"></increase-font-size>
  </div>
</template>

<script>
import IncreaseFontSize from './components/IncreaseFontSize.vue'

export default {
  name: 'app',
  data: function(){
    return {
      fontSize:60
    };
  },
  components: {
    IncreaseFontSize
  }
}
</script>
<style>
  #app {
    margin-left: 30%;
    margin-top: 10%;
  }
</style>
