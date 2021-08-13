import { lazy } from "react";
import {  registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// //@ts-ignore
// const item = lazy(() => import('HiveFlow').then((r) => ({default: r})) )
// console.log(item)

registerApplication({
  name: "hexhive_hiveflow",
  //@ts-ignore
  app: () => import("hexhive_hiveflow"),
  activeWhen: ["/flow"]
})


registerApplication({
  name: "hexhive_hivecommand",
  //@ts-ignore
  app: () => import("hexhive_hivecommand"),
  activeWhen: ["/command"]
})

registerApplication({
  name: "hexhive_hivemind",
  //@ts-ignore
  app: () => import("hexhive_hivemind"),
  activeWhen: ["/mind"]
})

registerApplication({
  name: "hexhive_dashboard",
  //@ts-ignore
  app: () => import("hexhive_dashboard"),
  activeWhen: ["/"]
})
// registerApplication({
//   name: "@HexHive/navbar",
//   app: () => System.import("@HexHive/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
