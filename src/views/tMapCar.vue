<template>
  <el-button @click="moveto"> 启动</el-button>
  <div id="container"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
let car = "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png";
let marker: {
  moveAlong: (
    arg0: {
      car: {
        // eslint-disable-next-line no-undef
        path: never;
        speed: number;
      };
    },
    arg1: { autoRotation: boolean }
  ) => void;
  on: (arg0: string, arg1: (e: never) => void) => void;
};
let polylineLayer: {
  eraseTo: (arg0: string, arg1: number, arg2: never) => void;
};
var path = [
  new window.TMap.LatLng(39.98481500648338, 116.30571126937866),
  new window.TMap.LatLng(39.982266575222155, 116.30596876144409),
  new window.TMap.LatLng(39.982348784165886, 116.3111400604248),
  new window.TMap.LatLng(39.978813710266024, 116.3111400604248),
  new window.TMap.LatLng(39.978813710266024, 116.31699800491333),
  new window.TMap.LatLng(39.978813710266024, 117.31699800491333),
];
const initMap = () => {
  var center = new window.TMap.LatLng(39.984104, 116.307503);
  // 初始化地图
  var map = new window.TMap.Map("container", {
    zoom: 15,
    center: center,
    mapStyleId: "style1", //设置样式ID
  });
  polylineLayer = new window.TMap.MultiPolyline({
    map, // 绘制到目标地图
    // 折线样式定义
    styles: {
      style_blue: new window.TMap.PolylineStyle({
        color: "#3777FF", // 线填充色
        width: 4, // 折线宽度
        borderWidth: 2, // 边线宽度
        borderColor: "#FFF", // 边线颜色
        lineCap: "round", // 线端头方式
        eraseColor: "rgba(190,188,188,1)",
      }),
    },
    geometries: [
      {
        id: "erasePath",
        styleId: "style_blue",
        paths: path,
      },
    ],
  });
  marker = new window.TMap.MultiMarker({
    map,
    styles: {
      "car-down": new window.TMap.MarkerStyle({
        width: 40,
        height: 40,
        anchor: {
          x: 20,
          y: 20,
        },
        faceTo: "map",
        rotate: 180,
        src: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png",
      }),
      start: new window.TMap.MarkerStyle({
        width: 25,
        height: 35,
        anchor: { x: 16, y: 32 },
        src: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/start.png",
      }),
      end: new window.TMap.MarkerStyle({
        width: 25,
        height: 35,
        anchor: { x: 16, y: 32 },
        src: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/end.png",
      }),
    },
    geometries: [
      {
        id: "car",
        styleId: "car-down",
        position: new window.TMap.LatLng(39.98481500648338, 116.30571126937866),
      },
      {
        id: "start",
        styleId: "start",
        position: new window.TMap.LatLng(39.98481500648338, 116.30571126937866),
      },
      {
        id: "end",
        styleId: "end",
        position: new window.TMap.LatLng(
          39.978813710266024,
          116.31699800491333
        ),
      },
    ],
  });
  // 使用marker 移动接口， https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker
};

let moveto = () => {
  marker.moveAlong(
    {
      car: {
        // eslint-disable-next-line no-undef
        path,
        speed: 2500,
      },
    },
    {
      autoRotation: true,
    }
  );
  marker.on("moving", (e) => {
    var passedLatLngs = e.car && e.car.passedLatLngs;
    if (passedLatLngs) {
      // 使用路线擦除接口 eraseTo, https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector
      polylineLayer.eraseTo(
        "erasePath",
        passedLatLngs.length - 1,
        passedLatLngs[passedLatLngs.length - 1]
      );
    }
  });
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
</style>
