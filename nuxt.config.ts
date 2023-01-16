// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
    
    {
    css:['~/assets/css/main.css'],
    postcss: {
        plugins:{
        tailwindcss: {},
        autoprefixer: {},
},
// typescript: {
//     shim: false,}

},
app: {
    head:{
        title:" My awsome portfolio App",
        
        meta:[
            { name: "description", content:"check my portfolio"}
        ],
        charset:'utf-16'
        
},
}
}
)
serverMiddleware: [
    '~/api/index.js'
  ]
