<template>
  <div class="btnContainer">
    <button class="btn1">marker增加高度</button>
    <button class="btn2">marker去除高度</button>
  </div>
  <div id="container"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
let car = "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png";
const initMap = () => {
  var center = new window.TMap.LatLng(39.984104, 116.407503); //设置中心点坐标
  //初始化地图
  var map = new window.TMap.Map("container", {
    center: center,
    mapStyleId: "style1", //设置样式ID
  });

  //初始化marker
  var marker = new window.TMap.MultiMarker({
    id: "marker-layer",
    map: map,
    styles: {
      marker: new window.TMap.MarkerStyle({
        width: 40,
        height: 60,
        anchor: { x: 16, y: 32 },
        src: car,
      }),
    },
    geometries: [
      {
        id: "demo",
        styleId: "marker",
        position: new window.TMap.LatLng(39.984104, 116.407503),
        properties: {
          title: "marker",
        },
      },
    ],
  });

  function setStyle() {
    //更换marker样式方法
    marker.setStyles({
      marker: new window.TMap.MarkerStyle({
        width: 70,
        height: 70,
        src: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerNew.png",
        opacity: 0.5,
      }),
    });
  }
};
onMounted(() => {
  initMap();
});
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}
.btnContainer {
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 10000;
}

.btnContainer button {
  padding: 10px 14px;
  box-sizing: border-box;
  border: none;
  background-color: #3876ff;
  border-radius: 2px;
  color: #fff;
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 10px;
}
</style>
