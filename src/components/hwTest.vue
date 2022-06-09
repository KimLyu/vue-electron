<template>
  <div class="hwtest">
    <h1>{{ msg }}</h1>
    <p>
      Ethernet、WIFI、USB 驅動測試
    </p>
    <div>
      <h2>Ethernet test</h2>
      <input id="eth-ip" type="text" placeholder="Eth IP">
      <input id="eth-port" type="text" placeholder="Eth Port">
      <button type="button" @click="ethSumbit">發送</button>
    </div>
    <div>
      <h2>WIFI test</h2>
      <input id="WiFi-ip" type="text" placeholder="WiFi IP">
      <input id="WiFi-port" type="text" placeholder="WiFi Port">
      <button type="button" @click="wifiSumbit">發送</button>
    </div>
    <div>
      <h2>USB test</h2>
      <button type="button" @click="usbSumbit">發送</button>
    </div>
  </div>
</template>

<script>
import { ethSend } from '../services/eth_service';
import { wifiSend } from '../services/wifi_service';
import { usbSend } from '../services/usb_service';
export default {
  name: 'HardwareTest',
  props: {
    msg: String
  },
  methods: {
    ethSumbit: () => {
      ethSend();
    },
    wifiSumbit: () => {
      wifiSend();
    },
    usbSumbit: () => {
      usbSend();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
