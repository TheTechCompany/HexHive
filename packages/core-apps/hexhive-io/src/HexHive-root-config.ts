import { lazy } from "react";
import {  registerApplication, start } from "single-spa";
import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from 'single-spa-layout'
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

// const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
//   props: {},
//   loaders: {
//     topNav: "<h1>Loading topnav</h1>",
//   },
//   errors: {
//     topNav: "<h1>Failed to load topnav</h1>",
//   },
// });

// const applications = constructApplications({
//   routes,
//   loadApp: ({ name }) => System.import(name),
// });

// const layoutEngine = constructLayoutEngine({
//   routes,
//   applications,
//   active: false,
// });


// applications.forEach(registerApplication);


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


registerApplication({
  name: "hexhive_hivemarket",
  //@ts-ignore
  app: () => import("hexhive_hivemarket"),
  activeWhen: (location) => location.pathname.indexOf('/dashboard/market') > -1
})

registerApplication({
  name: "hexhive_hivebuild",
  //@ts-ignore
  app: () => import("hexhive_hivebuild"),
  activeWhen: (location) => location.pathname.indexOf('/dashboard/build') > -1
})
registerApplication({
  name: "hexhive_hiveheader",
  //@ts-ignore
  app: () => import("hexhive_hiveheader"),
  activeWhen: (location) => true
});

start({
  urlRerouteOnly: true,
})
