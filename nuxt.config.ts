// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

declare module "@nuxtjs/color-mode" {
  interface ColorModeOptions {
    preference: string;
    fallback: string;
    classSuffix: string;
  }
}

export default defineNuxtConfig({
  runtimeConfig: {
    // 服务器端私有变量
    apiSecret: process.env.API_SECRET,

    // 客户端和服务器端都可访问的公共变量
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  ssr: false,
  target: "static",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/color-mode",
      {
        preference: "light",
        fallback: "light",
        classSuffix: "",
      },
    ],
    "@nuxt/image",
    "@nuxt/content",
  ],

  content: {
    // 配置@nuxt/content模块
    documentDriven: true,
    highlight: {
      theme: "github-light",
    },
  },

  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/" : "/",
    head: {
      title: "青蓝逐码团队",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "青蓝逐码团队 - 连接技术，点亮未来" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "https://qinglanhome.oss-rg-china-mainland.aliyuncs.com/home/logo.svg?x-oss-credential=LTAI5tPNDZtqtANHBmQFKd3D%2F20250418%2Frg-china-mainland%2Foss%2Faliyun_v4_request&x-oss-date=20250418T000328Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=b03549bfe2d07979cdc3d1e193e18da31eb4e1671bd5a36b9911bf6350a92dd6",
        },
        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css",
        // },
      ],
    },
  },

  css: ["~/assets/css/main.css", "~/assets/css/font.css"],

  compatibilityDate: "2025-04-11",
});
