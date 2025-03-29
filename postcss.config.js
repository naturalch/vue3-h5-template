export default {
  plugins: {
    tailwindcss: {},
    // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
    'cnjm-postcss-px-to-viewport': {
      viewportWidth: 375, // 根据设计稿设定
      unitPrecision: 4, // 转化精度，转换后保留位数
      viewportUnit: 'vw', // 转换后的单位
      fontViewportUnit: 'vw', // 字体单位
      unitToConvert: 'px', // 需要转换的单位
    },
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7'],
    },
  },
};

// const path = require("path");

// module.exports = ({ webpack }) => {
//   const viewWidth = webpack.resourcePath.includes(
//     path.join("node_modules", "vant")
//   )
//     ? 375
//     : 750;
//   return {
//     plugins: {
//       autoprefixer: {
//         overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
//       },
//       "postcss-px-to-viewport": {
//         unitToConvert: "px",
//         viewportWidth: viewWidth,
//         unitPrecision: 6,
//         propList: ["*"],
//         viewportUnit: "vw",
//         fontViewportUnit: "vw",
//         selectorBlackList: [],
//         minPixelValue: 1,
//         mediaQuery: true,
//         exclude: [],
//         landscape: false
//       }
//     }
//   };
// };
