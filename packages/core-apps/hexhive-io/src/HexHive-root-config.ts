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
  name: "hexhive_dashboard",
  //@ts-ignore
  app: () => import("hexhive_dashboard"),
  activeWhen: (location) => location.pathname == '/' || location.pathname == '/dashboard'
})

registerApplication({
  name: "hexhive_hiveflow",
  //@ts-ignore
  app: () => import("hexhive_hiveflow"),
  activeWhen: ["/dashboard/flow"]
})


registerApplication({
  name: "hexhive_hivecommand",
  //@ts-ignore
  app: () => import("hexhive_hivecommand"),
  activeWhen: ["/dashboard/command"]
})

registerApplication({
  name: "hexhive_hivemind",
  //@ts-ignore
  app: () => import("hexhive_hivemind"),
  activeWhen: ["/dashboard/mind"]
})

// registerApplication({
//   name: "@HexHive/navbar",
//   app: () => System.import("@HexHive/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
