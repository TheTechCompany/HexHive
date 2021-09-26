import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
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
      default:
        return System.import(name);
    }
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
