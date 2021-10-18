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

const routes = constructRoutes(`
<single-spa-router base="dashboard">
  <header>
    <application name="hexhive_hiveheader"></application>
  </header>
  <div class="main-content">
  <route path="/" exact>
  <application name="hexhive_dashboard"></application>

  </route>
  <route path="market">
  <application name="hexhive_hivemarket"></application>
</route>
  <route path="files">
  <application name="hexhive_hivefiles"></application>
</route>
  <route path="flow">
  <application name="hexhive_hiveflow"></application>
</route>
  <route path="command">
  <application name="hexhive_hivecommand"></application>
</route>
<route path="settings">
  <application name="hexhive_hivesettings"></application>
</route>
    <route path="automate">
      <application name="hexhive_hiveautomate"></application>
    </route>
    <route path="report">
    <application name="hexhive_hivereport"></application>
  </route>
  </div>
</single-spa-router>`, {
  props: {

  },
  loaders: {
    await: `<div>Spinner</div>`
  }
})
// , {
//   props: {},
//   loaders: {
//     topNav: "<h1>Loading topnav</h1>",
//   },
//   errors: {
//     topNav: "<h1>Failed to load topnav</h1>",
//   },
// });


const applications = constructApplications({
  routes,
  loadApp: ({ name }) => {
    console.log("load ", name)
    switch(name){
      case 'hexhive_dashboard':
        //@ts-ignore
        return import('hexhive_dashboard')
      case 'hexhive_hiveheader':
        //@ts-ignore
        return import('hexhive_hiveheader')
      case 'hexhive_hiveautomate':
        //@ts-ignore
        return import('hexhive_hiveautomate')
      case 'hexhive_hivefiles':
        //@ts-ignore
        return import('hexhive_hivefiles')
      case 'hexhive_hiveflow':
          //@ts-ignore
          return import('hexhive_hiveflow')
      case 'hexhive_hivemarket':
            //@ts-ignore
            return import('hexhive_hivemarket')
      case 'hexhive_hivecommand':
              //@ts-ignore
              return import('hexhive_hivecommand')
      case 'hexhive_hivesettings':
          //@ts-ignore
          return import('hexhive_hivesettings')
      case 'hexhive_hivereport':
      //@ts-ignore
      return import('hexhive_hivereport')
    }
  } //System.import(name),
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications
});


applications.forEach(registerApplication);

// registerApplication({
//   name: "hexhive_hiveheader",
//   //@ts-ignore
//   app: () => import("hexhive_hiveheader"),
//   activeWhen: (location) => true
// });

// registerApplication({
//   name: "hexhive_dashboard",
//   //@ts-ignore
//   app: () => import("hexhive_dashboard"),
//   activeWhen: (location) => location.pathname == '/' || location.pathname == '/dashboard' || location.pathname == '/dashboard/' || location.pathname == '/dashboard/matrix'
// })

// registerApplication({
//   name: "hexhive_hiveflow",
//   //@ts-ignore
//   app: () => import("hexhive_hiveflow"),
//   activeWhen: (location) => location.pathname.indexOf('/dashboard/flow') > -1
// })


// registerApplication({
//   name: "hexhive_hivecommand",
//   //@ts-ignore
//   app: () => import("hexhive_hivecommand"),
//   activeWhen: (location) => location.pathname.indexOf('/dashboard/command') > -1
// })

// registerApplication({
//   name: "hexhive_hivemind",
//   //@ts-ignore
//   app: () => import("hexhive_hivemind"),
//   activeWhen: (location) => location.pathname.indexOf('/dashboard/mind') > -1
// })


// registerApplication({
//   name: "hexhive_hivefiles",
//   //@ts-ignore
//   app: () => import("hexhive_hivefiles"),
//   activeWhen: (location) => location.pathname.indexOf('/dashboard/files') > -1
// })

// registerApplication({
//   name: "hexhive_hive3d",
//   //@ts-ignore
//   app: () => import("hexhive_hive3d"),
//   activeWhen: (location) => location.pathname.indexOf('/dashboard/3d') > -1
// })


// registerApplication({
//   name: "hexhive_hivemarket",
//   //@ts-ignore
//   app: () => import("hexhive_hivemarket"),
//   activeWhen: (location) => location.pathname.indexOf('/dashboard/market') > -1
// })

// registerApplication({
//   name: "hexhive_hivebuild",
//   //@ts-ignore
//   app: () => import("hexhive_hivebuild"),
//   activeWhen: (location) => location.pathname.indexOf('/dashboard/build') > -1
// })
// registerApplication({
//   name: "hexhive_hiveautomate",
//   //@ts-ignore
//   app: () => import("hexhive_hiveautomate"),
//   activeWhen: (location) => location.pathname.indexOf('/dashboard/automate') > -1
// });




start({
  urlRerouteOnly: true,
})
