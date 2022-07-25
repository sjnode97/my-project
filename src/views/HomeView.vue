<template>
  <div class="home">
    <span>djksjdksjkd</span>
    <div style="width: 100%; height: 800px" ref="chart"></div>
  </div>
</template>

<script lang="ts" setup>
import logo from "@/assets/logo.png";
import geoJson from "@/assets/china.json"; //省份的json格式
import "echarts-gl"; //3D地图插件
import * as echarts from "echarts";
import { ref, onMounted } from "vue";

let jsonData: never[] = geoJson;
console.log(jsonData);
console.log(echarts);
const chart = ref();
let mapIcons = logo;
var geoCoordMap = {
  台湾: [122, 23],
  黑龙江: [129, 51],
  内蒙古: [110.3467, 41.4899],
  吉林: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [101.4038, 36.8207],
  新疆: [87.9236, 43.5883],
  西藏: [88.388277, 31.56375],
  四川: [103.9526, 30.7617],
  重庆: [108.384366, 30.439702],
  山东: [117.1582, 36.8701],
  河南: [113.4668, 34.6234],
  江苏: [118.8062, 31.9208],
  安徽: [117.29, 32.0581],
  湖北: [114.3896, 30.6628],
  浙江: [119.5313, 29.8773],
  福建: [119.4543, 25.9222],
  江西: [116.0046, 28.6633],
  湖南: [113.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [102.9199, 25.4663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [110.3893, 19.8516],
  上海: [121.4648, 31.2891],
};
//设置每个区域的值
var data = [
  { name: "台湾", value: 1 },
  { name: "北京", value: 2 },
  { name: "天津", value: 3 },
  { name: "河北", value: 4 },
  { name: "山西", value: 5 },
  { name: "内蒙古", value: 6 },
  { name: "辽宁", value: 7 },
  { name: "吉林", value: 8 },
  { name: "黑龙江", value: 9 },
  { name: "上海", value: 10 },
  { name: "江苏", value: 11 },
  { name: "浙江", value: 12 },
  { name: "安徽", value: 13 },
  { name: "福建", value: 14 },
  { name: "江西", value: 15 },
  { name: "山东", value: 16 },
  { name: "河南", value: 17 },
  { name: "湖北", value: 18 },
  { name: "湖南", value: 19 },
  { name: "重庆", value: 20 },
  { name: "四川", value: 21 },
  { name: "贵州", value: 22 },
  { name: "云南", value: 23 },
  { name: "西藏", value: 24 },
  { name: "陕西", value: 25 },
  { name: "甘肃", value: 26 },
  { name: "青海", value: 27 },
  { name: "宁夏", value: 28 },
  { name: "新疆", value: 29 },
  { name: "广东", value: 30 },
  { name: "广西", value: 31 },
  { name: "海南", value: 32 },
];
//给每个地区赋值
var convertData = function (data: string | never[]) {
  //定义一个数组
  var res = [];
  //循环遍历每个区域值
  for (var i = 0; i < data.length; i++) {
    //获取坐标
    var geoCoord = geoCoordMap[data[i].name];
    //判断是否有坐标
    if (geoCoord) {
      //往数组里设置值
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};
/*interface pramas {
  name: string;
  value: number;
}*/
onMounted(() => {
  let myChart = echarts.init(chart.value);
  function getJson(jsonData: never[]): void {
    console.log(jsonData);
    echarts.registerMap("China", jsonData);
    let option = {
      //设置背景颜色
      backgroundColor: "#020933",
      geo: {
        map: "China", //地图为刚刚设置的China
        aspectScale: 0.8, //长宽比
        zoom: 1.1, //当前视角的缩放比例
        roam: false, //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
        itemStyle: {
          //地图区域的多边形 图形样式
          normal: {
            areaColor: "#013C62", //地区颜色
            shadowColor: "#182f68", //阴影颜色
            shadowOffsetX: 0, //阴影偏移量
            shadowOffsetY: 25, //阴影偏移量
          },
          emphasis: {
            areaColor: "#2AB8FF", //地区颜色
            label: {
              show: false, //是否在高亮状态下显示标签
            },
          },
        },
      },
      series: [
        //数据系列
        {
          type: "map", //地图类型
          //地图上文字
          label: {
            //标签样式设置

            normal: {
              show: true,
              formatter: function (params: { name: string }) {
                return (
                  "{div|" +
                  params.name +
                  "}\n 11 {fontVal|" +
                  params.name +
                  "}\n{sign|}"
                );
              },
              /*backgroundColor: {
                    image: './static/img/bg.png'
                  },*/
              color: "#FFFFFF",
              verticalAlign: "bottom",
              rich: {
                value: {
                  fontsize: 20,
                },
                fontName: {
                  shadowOffsetX: -1,
                  color: "#57F7FE",
                  fontSize: 10,
                },
                fontVal: {
                  height: 10,
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: 900,
                  padding: [10, 3, 0, 0],
                },
                div: {
                  height: 25,
                  fontSize: 12,
                  lineHeight: 8,
                  //疑似 下 右 上 左
                  padding: [15, 3, 3, 0],
                  color: "#ffffff",
                  backgroundColor: {
                    image: mapIcons,
                  },
                },
                sign: {
                  position: "absolute",
                  height: 30,
                  color: "rgba(255,255,255,0.38)",
                  backgroundColor: {
                    image: mapIcons,
                  },
                },
              },
            },
            emphasis: {
              //鼠标移上去的样式
              show: true,
              //"fontSize": "16",
              color: "#FFFFFF",
            },
          },
          //地图区域的多边形 图形样式
          itemStyle: {
            normal: {
              borderColor: "#2ab8ff",
              borderWidth: 1.5,
              areaColor: "#12235c",
            },
            emphasis: {
              areaColor: "#2AB8FF",
              borderWidth: 0,
            },
          },
          zoom: 1.2, //当前视角的缩放比例
          //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          roam: false,
          map: "China", //使用中国地图
        },
        {
          //设置为分散点
          type: "scatter",
          //series坐标系类型
          coordinateSystem: "geo",
          //设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
          symbol: "pin",
          // //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
          symbolSize: [40, 40],
          //气泡字体设置
          itemStyle: {
            normal: {
              areaColor: "#013C62", //地区颜色
              shadowColor: "#182f68", //阴影颜色
              // shadowOffsetX: 0, //阴影偏移量
              // shadowOffsetY: 25, //阴影偏移量
            },
            emphasis: {
              areaColor: "#2AB8FF", //地区颜色
              label: {
                show: false, //是否在高亮状态下显示标签
              },
            },
          },
          /*label: {
            normal: {
              show: true, //是否显示
              textStyle: {
                color: "#fff", //字体颜色
                fontSize: 8, //字体大小
              },
              //返回气泡数据
              formatter(value: { data: { value: never[] } }) {
                return value.data.value[2];
              },
            },
          },*/
          //给区域赋值
          data: convertData(data),
          showEffectOn: "render", //配置何时显示特效。可选：'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效。
          rippleEffect: {
            //涟漪特效相关配置。
            brushType: "stroke", //波纹的绘制方式，可选 'stroke' 和 'fill'
          },
          hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
          zlevel: 1, //所属图形的 zlevel 值
        },
      ],
    };
    myChart.setOption(option);
  }
  getJson(jsonData);
  console.log(chart);

  // echarts.registerMap("china", features);
});
</script>
