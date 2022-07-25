<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="username" label="Name" width="180" />
  </el-table>
</template>

<script setup>
import { ref, toRefs, toRef, defineProps } from "vue";
// 接受来自父组件的传参
const props = defineProps({
  data: Object,
});
// 方法1：
const tableData = toRef(props, "data");
</script>
<style scoped></style>
