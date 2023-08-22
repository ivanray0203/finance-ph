// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        ["OtherComponents", "QuillEditor"].includes(tag),
    },
  },
});
