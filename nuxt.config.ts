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
  ],

  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/qinglan-code/" : "/",
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
