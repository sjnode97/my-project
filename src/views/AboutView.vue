<template>
  <div class="about">
    <h1>{{ tableList }}</h1>
    <div>我是一只小鸭子</div>
    <el-button type="primary" @click="resWebScoket">我是一只小鸭子</el-button>
    <el-button type="primary" @click="closeWebScoket"
      >我不是一只小鸭子</el-button
    >
    {{ imgData }}
    <MyTable :data="tableList" />
  </div>
</template>

<script setup lang="ts">
import MyTable from "@/components/myTable";
import { storeToRefs } from "pinia";
import { useStore } from "@/piniaStore";
const store = useStore();
let imgData = "";
let { tableList } = storeToRefs(store);
let resWebScoket = () => {
  console.log(1);
};
let closeWebScoket = () => {
  console.log(1);
};
store.getList();
// appKey = Va5yQRHl********LT0vuXV4
// appSecret = 0rDSjzQ20XUj5i********PQSzr5pVw2

// let url = "wss://iat-api.xfyun.cn/v2/iat";
/*let url = "ws://localhost:1234";
var ws = new WebSocket(url);
// ws.send("");
ws.onopen = () => {
  ws.send("Hello WebSockets!");
  console.log("Connection open ...");
};

let resWebScoket = (): void => {
  ws.onopen = () => {
    ws.send("Hello WebSockets!");
    console.log("Connection open ...");
  };
  ws.onmessage = (e) => {
    console.log("服务器返回的信息: " + e.data);
  };
};
let closeWebScoket = (): void => {
  console.log(1);
  ws.close();
};*/
</script>
