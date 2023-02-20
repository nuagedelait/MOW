import { defineCliConfig } from 'sanity/cli';
import { ViteDevServer } from 'vite'

const watchDpendency = (pckgName:string) => {
  return {
    name: `watch-node-modules-${pckgName}`,
    configureServer: (server: ViteDevServer): void => {

      console.log(server.watcher.options);
      server.watcher.options = {
        ...server.watcher.options,
        ignored: [
          new RegExp(`node_modules\/(?!${pckgName}).*`),
        ]
      }
      server.watcher.add(`node_modules/${pckgName}/**/*.*`);
      console.log(server.watcher.options);
    }
  }
}



export default defineCliConfig({
  api: {
    projectId: 'lebqwk4h',
    dataset: 'production'
  },
  vite: (config) => {
    const modules = [
      "sanity-plugin-sections",
      "sanity-plugin-blog"
    ]
    config.optimizeDeps = {
      force: true
    }
    config.optimizeDeps = {
      exclude: modules,
      include: [
        "groq",
        "react",
        "react-dom",
        "react-is",
        "shallowequal",
        "hoist-non-react-statics",
        "react-refractor",
        "styled-components",
        "nanoid"
      ]
    }
    config.server = {
      ...config.server,
      watch: {
        ignored: modules.map( moduleName => `!**/node_modules/${moduleName}/**`)
      },
    }
    return config
  },
})
