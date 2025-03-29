<template>
  <div class="demo-content px-[12px]">
    <img
      class="block w-[120px] mx-auto mb-[20px] pt-[30px]"
      alt="Vue logo"
      src="@/assets/logo.png"
    />
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      基于 Vue3、TypeScript、Vite 构建工具，开箱即用的 H5 移动端项目基础模板
    </div>
    <div class="main">
      <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Home' });

const contentList = reactive([
  '✔ ⚡ Vue3 + Vite5',
  '✔ 🍍 Pinia 状态管理',
  '✔ Vue-router4 路由管理',
  '✔ 🍕 TypeScript',
  '✔ ✨ Vant4 组件库',
  '✔ ⓣ Tailwindcss 原子类框架',
  '✔ 👏 iconify + SVG + Vant Icon图标方案',
  '✔ 🌓 支持深色模式',
  '✔ vw vh 视口适配',
  '✔ Axios 封装',
  '✔ 打包 gzip 压缩',
  '✔ 开发环境 Mock 数据',
  '✔ ESLint, 代码规范 husky ，commit 规范',
  '✔ 首屏加载动画',
  '✔ 开发环境调试面板 eruda',
]);
</script>
