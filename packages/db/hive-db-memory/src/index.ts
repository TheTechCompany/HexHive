import { HiveDB, HiveDBFactory, Application, Organisation } from "@hexhive/db-types";
import { types : {Application, Organisation, User }} from '@hexhive/db-types';
import { nanoid } from "nanoid";

export const HiveDBMemory : HiveDBFactory = (config) => {

    let applications = [];
    let organisations = [];
    let users = [];

    return {
        getApplications: async function (ids?: string[]): Promise<Application[]> {
            if(ids){
                return applications.filter((a) => ids?.indexOf(a.id) > -1)
            }
            return applications
        },
        createApplication: async function (application: Partial<Application>): Promise<Application> {
            let newApplication : any = {id: nanoid(), ...application};
            applications.push(newApplication);
            return newApplication
        },
        updateApplication: async function (id: string, application: Partial<Application>): Promise<Application> {
            let ix = applications.findIndex((app) => app.id == id);
            if(ix < -1) throw new Error("No application found");
            let app = applications[ix]
            app = {...app, application}
            applications[ix] = app;
            return app;
        },
        deleteApplication: async function (id: string): Promise<void> {
            let ix = applications.findIndex((app) => app.id == id);
            if(ix < -1) throw new Error("No application found");
            applications.splice(ix, 1)
        },
        getOrganisations: async function (ids?: string[]): Promise<Organisation[]> {
            if(ids){
                return organisations.filter((a) => ids?.indexOf(a.id) > -1)
            }
            return organisations
        },
        createOrganisation: function (organisation: Partial<Organisation>): Promise<Organisation> {
            let newOrganisation : any = {id: nanoid(), ...application};
            organisations.push(newOrganisation);
            return newOrganisation       
         },
        updateOrganisation: function (id: string, organisation: Partial<Organisation>): Promise<Organisation> {
            let ix = organisations.findIndex((org) => org.id == id);
            if(ix < -1) throw new Error("No organisation found");
            let org = organisations[ix]
            org = {...app, organisation}
            organisations[ix] = org;
            return org;
        },
        deleteOrganisation: function (id: string): Promise<void> {
            let ix = organisations.findIndex((org) => org.id == id);
            if(ix < -1) throw new Error("No organisation found");
            organisations.splice(ix, 1)
        },
        getUsers: function (ids?: string[]): Promise<User[]> {
            if(ids){
                return users.filter((a) => ids?.indexOf(a.id) > -1)
            }
            return users
        },
        createUser: function (user: Partial<User>): Promise<User> {
            let newUser : any = {id: nanoid(), ...user};
            users.push(newUser);
            return newUser       
        },
        updateUser: function (id: string, user: Partial<User>): Promise<User> {
            let ix = users.findIndex((user) => user.id == id);
            if(ix < -1) throw new Error("No user found");
            let u = users[ix]
            u = {...u, user}
            users[ix] = u;
            return u;
        },
        deleteUser: function (id: string): Promise<void> {
            let ix = users.findIndex((user) => user.id == id);
            if(ix < -1) throw new Error("No user found");
            users.splice(ix, 1)
        }
    }
} 