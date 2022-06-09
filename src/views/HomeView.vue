<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.gif">
    <HardwareTest msg="使用VUE 進行簡易硬體js驅動測試" />
  </div>
</template>

<script>
// @ is an alias to /src
import HardwareTest from '@/components/hwTest.vue'

export default {
  name: 'HomeView',
  components: {
    HardwareTest
  }
}
</script>
