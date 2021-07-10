class Application {
  static Instance: Application = new Application()

  constructor() {
    window['Client'] = this
    const event = new Event('client:created')
    window.dispatchEvent(event)
  }

  context: IContext = {
    store: null,
  }

  private plugins: Map<string, IPlugin> = new Map()

  pluginsRegisted: Array<IPlugin> = []

  use(plugin: IPlugin): this {
    this.plugins.set(plugin.name, plugin)
    if (plugin.auto) this.register(plugin)
    return this
  }

  register(config: IPlugin) {
    const plug = new config()
    plug.install()
  }
}

interface IPlugin {
  new (): IPlugin
  install(): void
  init(): this
  plugin: IPlugin
  config: any
  auto: boolean
}

interface IContext {
  store: null
}

/**
 * 绑定事件
 * @param type 事件名称
 * @returns 
 */
function bindEvent(type) {
  return (data) => {
    const e = new Event(type)
    window.dispatchEvent(e)
    console.log('type', type, e)
  }
}
