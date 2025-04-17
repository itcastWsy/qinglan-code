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
          href: "https://wsy997.obs.cn-east-3.myhuaweicloud.com/pcweb/logo.svg",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-04-11",
});
