import { defineStore } from "pinia";
import { getList } from "@/api";

export const useStore = defineStore("main", {
  state: () => {
    return {
      counter: 0,
      name: <string>"Eduardo",
      isAdmin: <boolean>true,
      qSkill: <string>"斩钢闪",
      tableList: <object>[],
    };
  },
  getters: {},
  actions: {
    async getList() {
      // 可直接通过this访问state属性
      this.tableList = await getList().then((res) => res.data);
      console.log(this.tableList);
    },
  },
});
