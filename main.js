import { genModule } from "@proxtx/combine/combine.js";
import { genCombine } from "@proxtx/combine-rest/request.js";
import config from "@proxtx/config";
import fs from "fs/promises";

export class Trigger {
  constructor(triggerConfig, folder) {
    this.folder = folder;
    this.config = triggerConfig;

    (async () => {
      this.api = await genCombine(
        config.unifyGuiAPI.url + "/",
        "public/api.js",
        genModule
      );

      this.html = await fs.readFile(this.folder + "index.html", "utf8");
      this.handler = await fs.readFile(this.folder + "handler.js", "utf8");
    })();
  }

  getSelectionGui = async () => {
    return { html: this.html, handler: this.handler, data: {} };
  };

  triggers = async (data) => {
    let definitions = (
      await this.api.getDefinitions(config.unifyGuiAPI.pwd, this.config.appName)
    ).methods;
    for (let client in definitions) {
      definitions[client] = true;
    }

    return definitions[data.client]
      ? data.status == "connected"
        ? true
        : false
      : data.status == "disconnected"
      ? true
      : false;
  };
}
