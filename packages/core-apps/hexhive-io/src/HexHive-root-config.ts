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
  activeWhen: (location) => location.pathname == '/' || location.pathname == '/dashboard' || location.pathname == '/dashboard/' || location.pathname == '/dashboard/matrix'
})

registerApplication({
  name: "hexhive_hiveflow",
  //@ts-ignore
  app: () => import("hexhive_hiveflow"),
  activeWhen: (location) => location.pathname.indexOf('/dashboard/flow') > -1
})


registerApplication({
  name: "hexhive_hivecommand",
  //@ts-ignore
  app: () => import("hexhive_hivecommand"),
  activeWhen: (location) => location.pathname.indexOf('/dashboard/command') > -1
})

registerApplication({
  name: "hexhive_hivemind",
  //@ts-ignore
  app: () => import("hexhive_hivemind"),
  activeWhen: (location) => location.pathname.indexOf('/dashboard/mind') > -1
})


registerApplication({
  name: "hexhive_hivefiles",
  //@ts-ignore
  app: () => import("hexhive_hivefiles"),
  activeWhen: (location) => location.pathname.indexOf('/dashboard/files') > -1
})

registerApplication({
  name: "hexhive_hive3d",
  //@ts-ignore
  app: () => import("hexhive_hive3d"),
  activeWhen: (location) => location.pathname.indexOf('/dashboard/3d') > -1
})


// registerApplication({
//   name: "@HexHive/navbar",
//   app: () => System.import("@HexHive/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
