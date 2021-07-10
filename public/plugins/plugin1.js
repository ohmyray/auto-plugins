class Plugin2 {
   static name = "Plugin2"
   static auto = true
    install() {
        console.log('install...2')
    }
}

window.addEventListener("client:created",(e)=>{
    window.Client.use(Plugin2)
})