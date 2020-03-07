import { Module } from "@rxdi/core";

import { ContextModule } from "./context/context.module";
import { OpenService } from "@rxdi/hapi";
import { AfterStarterService } from "@rxdi/core";
import { take, tap, switchMap, timeout } from "rxjs/operators";
import { readFile, writeFile } from "fs";
import { promisify } from "util";

@Module({
  imports: [ContextModule],
  providers: [
    {
      provide: "open-browser",
      deps: [OpenService, AfterStarterService],
      useFactory: (
        openService: OpenService,
        afterStarter: AfterStarterService
      ) => {
        afterStarter.appStarted
          .pipe(
            take(1),
            tap(() => openService.openPage("http://localhost:9000")),
            switchMap(async () => {
              const file = await promisify(readFile)("./gj.yml", {
                encoding: "utf-8"
              });
              await promisify(writeFile)("./gj.yml", file, {
                encoding: "utf-8"
              });
            })
          )
          .subscribe();
        return true;
      }
    }
  ]
})
export class CoreModule {}
