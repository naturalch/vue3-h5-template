<template>
  <van-tabbar
    v-model="active"
    fixed
    safe-area-inset-bottom
    :placeholder="true"
    :route="true"
  >
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
const active = ref(0);
const tabbarData = reactive([
  {
    icon: 'wap-home-o',
    title: '首页',
    to: {
      name: 'Home',
    },
  },
  {
    icon: 'list-switch',
    title: '工具',
    to: {
      name: 'Tools',
    },
  },
  {
    icon: 'user-o',
    title: '关于',
    to: {
      name: 'About',
    },
  },
]);
</script>
