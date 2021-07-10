class Plugin1 {
   static name = "Plugin1"
   static auto = true
    install() {
        console.log('install...1')
    }
}

window.addEventListener("client:created",(e)=>{
    window.Client.use(Plugin1)
})