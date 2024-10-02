import { vitePlugin as remix } from "@remix-run/dev"
import AutoImport from "unplugin-auto-import/vite"
import IconsResolver from "unplugin-icons/resolver"
import Icons from "unplugin-icons/vite"
import { defineConfig } from "vite"
import Inspect from "vite-plugin-inspect"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: "Icon",
          extension: "jsx",
        }),
      ],
    }),
    Icons({
      autoInstall: true,
      compiler: "jsx",
    }),
    Inspect(),
    tsconfigPaths(),
  ],
})
