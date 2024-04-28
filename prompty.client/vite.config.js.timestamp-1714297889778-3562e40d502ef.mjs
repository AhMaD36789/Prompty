// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/Ahmad/source/repos/Prompty/prompty.client/node_modules/vite/dist/node/index.js";
import plugin from "file:///C:/Users/Ahmad/source/repos/Prompty/prompty.client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import fs from "fs";
import path from "path";
import child_process from "child_process";
import { env } from "process";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Ahmad/source/repos/Prompty/prompty.client/vite.config.js";
var baseFolder = env.APPDATA !== void 0 && env.APPDATA !== "" ? `${env.APPDATA}/ASP.NET/https` : `${env.HOME}/.aspnet/https`;
var certificateName = "prompty.client";
var certFilePath = path.join(baseFolder, `${certificateName}.pem`);
var keyFilePath = path.join(baseFolder, `${certificateName}.key`);
if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
  if (0 !== child_process.spawnSync("dotnet", [
    "dev-certs",
    "https",
    "--export-path",
    certFilePath,
    "--format",
    "Pem",
    "--no-password"
  ], { stdio: "inherit" }).status) {
    throw new Error("Could not create certificate.");
  }
}
var target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` : env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(";")[0] : "https://localhost:7162";
var vite_config_default = defineConfig({
  plugins: [plugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    proxy: {
      "^/weatherforecast": {
        target,
        secure: false
      }
    },
    port: 5173,
    https: {
      key: fs.readFileSync(keyFilePath),
      cert: fs.readFileSync(certFilePath)
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBaG1hZFxcXFxzb3VyY2VcXFxccmVwb3NcXFxcUHJvbXB0eVxcXFxwcm9tcHR5LmNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWhtYWRcXFxcc291cmNlXFxcXHJlcG9zXFxcXFByb21wdHlcXFxccHJvbXB0eS5jbGllbnRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FobWFkL3NvdXJjZS9yZXBvcy9Qcm9tcHR5L3Byb21wdHkuY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBwbHVnaW4gZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XHJcbmltcG9ydCB7IGVudiB9IGZyb20gJ3Byb2Nlc3MnO1xyXG5cclxuY29uc3QgYmFzZUZvbGRlciA9XHJcbiAgICBlbnYuQVBQREFUQSAhPT0gdW5kZWZpbmVkICYmIGVudi5BUFBEQVRBICE9PSAnJ1xyXG4gICAgICAgID8gYCR7ZW52LkFQUERBVEF9L0FTUC5ORVQvaHR0cHNgXHJcbiAgICAgICAgOiBgJHtlbnYuSE9NRX0vLmFzcG5ldC9odHRwc2A7XHJcblxyXG5jb25zdCBjZXJ0aWZpY2F0ZU5hbWUgPSBcInByb21wdHkuY2xpZW50XCI7XHJcbmNvbnN0IGNlcnRGaWxlUGF0aCA9IHBhdGguam9pbihiYXNlRm9sZGVyLCBgJHtjZXJ0aWZpY2F0ZU5hbWV9LnBlbWApO1xyXG5jb25zdCBrZXlGaWxlUGF0aCA9IHBhdGguam9pbihiYXNlRm9sZGVyLCBgJHtjZXJ0aWZpY2F0ZU5hbWV9LmtleWApO1xyXG5cclxuaWYgKCFmcy5leGlzdHNTeW5jKGNlcnRGaWxlUGF0aCkgfHwgIWZzLmV4aXN0c1N5bmMoa2V5RmlsZVBhdGgpKSB7XHJcbiAgICBpZiAoMCAhPT0gY2hpbGRfcHJvY2Vzcy5zcGF3blN5bmMoJ2RvdG5ldCcsIFtcclxuICAgICAgICAnZGV2LWNlcnRzJyxcclxuICAgICAgICAnaHR0cHMnLFxyXG4gICAgICAgICctLWV4cG9ydC1wYXRoJyxcclxuICAgICAgICBjZXJ0RmlsZVBhdGgsXHJcbiAgICAgICAgJy0tZm9ybWF0JyxcclxuICAgICAgICAnUGVtJyxcclxuICAgICAgICAnLS1uby1wYXNzd29yZCcsXHJcbiAgICBdLCB7IHN0ZGlvOiAnaW5oZXJpdCcsIH0pLnN0YXR1cykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgY2VydGlmaWNhdGUuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB0YXJnZXQgPSBlbnYuQVNQTkVUQ09SRV9IVFRQU19QT1JUID8gYGh0dHBzOi8vbG9jYWxob3N0OiR7ZW52LkFTUE5FVENPUkVfSFRUUFNfUE9SVH1gIDpcclxuICAgIGVudi5BU1BORVRDT1JFX1VSTFMgPyBlbnYuQVNQTkVUQ09SRV9VUkxTLnNwbGl0KCc7JylbMF0gOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6NzE2Mic7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW3BsdWdpbigpXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgICAnXi93ZWF0aGVyZm9yZWNhc3QnOiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBzZWN1cmU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvcnQ6IDUxNzMsXHJcbiAgICAgICAgaHR0cHM6IHtcclxuICAgICAgICAgICAga2V5OiBmcy5yZWFkRmlsZVN5bmMoa2V5RmlsZVBhdGgpLFxyXG4gICAgICAgICAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoY2VydEZpbGVQYXRoKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1YsU0FBUyxlQUFlLFdBQVc7QUFFelgsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxZQUFZO0FBQ25CLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUNqQixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLFdBQVc7QUFQcU0sSUFBTSwyQ0FBMkM7QUFTMVEsSUFBTSxhQUNGLElBQUksWUFBWSxVQUFhLElBQUksWUFBWSxLQUN2QyxHQUFHLElBQUksT0FBTyxtQkFDZCxHQUFHLElBQUksSUFBSTtBQUVyQixJQUFNLGtCQUFrQjtBQUN4QixJQUFNLGVBQWUsS0FBSyxLQUFLLFlBQVksR0FBRyxlQUFlLE1BQU07QUFDbkUsSUFBTSxjQUFjLEtBQUssS0FBSyxZQUFZLEdBQUcsZUFBZSxNQUFNO0FBRWxFLElBQUksQ0FBQyxHQUFHLFdBQVcsWUFBWSxLQUFLLENBQUMsR0FBRyxXQUFXLFdBQVcsR0FBRztBQUM3RCxNQUFJLE1BQU0sY0FBYyxVQUFVLFVBQVU7QUFBQSxJQUN4QztBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0osR0FBRyxFQUFFLE9BQU8sVUFBVyxDQUFDLEVBQUUsUUFBUTtBQUM5QixVQUFNLElBQUksTUFBTSwrQkFBK0I7QUFBQSxFQUNuRDtBQUNKO0FBRUEsSUFBTSxTQUFTLElBQUksd0JBQXdCLHFCQUFxQixJQUFJLHFCQUFxQixLQUNyRixJQUFJLGtCQUFrQixJQUFJLGdCQUFnQixNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUk7QUFHOUQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFDLE9BQU8sQ0FBQztBQUFBLEVBQ2xCLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDeEQ7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixPQUFPO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNqQjtBQUFBLFFBQ0EsUUFBUTtBQUFBLE1BQ1o7QUFBQSxJQUNKO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDSCxLQUFLLEdBQUcsYUFBYSxXQUFXO0FBQUEsTUFDaEMsTUFBTSxHQUFHLGFBQWEsWUFBWTtBQUFBLElBQ3RDO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
