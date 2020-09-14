/* @flow */

import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    // 第一次 全局缓存个 installedPlugins = this._installedPlugins = []
    // 第二次 installedPlugins = this._installedPlugins = [1]
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    // 当插件plugin插件已经在缓存中，就直接返回，单例嘛
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
