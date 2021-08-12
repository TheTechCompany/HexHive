import { schemaComposer } from "graphql-compose";
import { App, Organisation, User } from "@hexhive/types";
import { GraphQLError } from "graphql";
import crypto from 'crypto';

schemaComposer.createObjectTC({
    name: 'User',
    fields: {
        id: 'ID',
        name: 'String',
        username: 'String',
        password: 'String',
        organisation: 'Organisation'
    }
})
schemaComposer.createObjectTC({
    name: 'Organisation',
    fields: {
        id: 'ID',
        name: 'String',
        apps: '[App]',
        users: '[User]'
    }
})

schemaComposer.createObjectTC({
    name: 'App',
    fields: {
        id: 'ID',
        name: 'String'
    }
})

schemaComposer.Query.addFields({
    UserMany: {
        type: '[User]',
        resolve: async () => {
            return await User.find({}).populate('organisation')
        }
    },
    UserById: {
        type: 'User',
        fields: {
            id: 'ID!',
        },
        resolve: async (root, args) => {
            return await User.findById(args.id).populate('organisation')
        }
    },
    OrganisationMany: {
        type: '[Organisation]',
        resolve: async () => {
            return await Organisation.find({}).populate('users').populate('apps')
        }
    },
    OrganisationById: {
        type: 'Organisation',
        fields: {
            id: 'ID!',
        },
        resolve: async (root, args) => {
            return await Organisation.findById(args.id).populate('users').populate('apps');
        }
    },
    AppMany: {
        type: '[App]',
        resolve: async () => {
            return await App.find({})
        }
    },
    AppById: {
        type: 'App',
        fields: {
            id: 'ID!',
        },
        resolve: async (root, args) => {
            return await App.findById(args.id).populate('organisation')
        }
    },
})


schemaComposer.Mutation.addFields({
    createOrganisation: {
        type: 'Organisation',
        args: {
            name: 'String',
            users: '[String]',
            apps: '[String]'
        },
        resolve: async (root, args, context) => {
            let organisation = new Organisation({
                name: args.name,
                users: args.users,
                apps: args.apps
            })

            await organisation.save();
            return organisation
        }
    },
    updateOrganisation: {
        type: 'Boolean',
        args: {
            id: 'ID!',
            name: 'String',
            users: '[String]',
            apps: '[String]'
        },
        resolve: async (root, args) => {
            // if(!args.id) return new GraphQLError("Missing ID")
            const result = await Organisation.updateOne({_id: args.id}, {$set: {name: args.name, users: args.users, apps: args.apps}})
            return result.nModified == 1;
        }
    },
    createUser: {
        type: 'User',
        args: {
            username: 'String',
            password: 'String',
            name: 'String',
            organisation: 'String'
        },
        resolve: async (root, args) => {
            let pwd_hash = crypto.createHash('sha256').update(args.password).digest('hex');

            let user = new User({
                name: args.name,
                username: args.username,
                password: pwd_hash,
                organisation: args.organisation
            })

            await user.save();
            return user
        }
    },
    updateUser: {
        type: 'Boolean',
        args: {
            id: 'ID',
            username: 'String',
            password: 'String',
            name: 'String',
            organisation: 'String'
        },
        resolve: async (root, args) => {
            const result = await User.updateOne({_id: args.id}, {$set: {
                username: args.username,
                name: args.name,
                organisation: args.organisation
            }})
            return result.nModified == 1;

        }
    },
    createApp: {
        type: 'App',
        args: {
            name: 'String'
        },
        resolve: async (root, args) => {
            let app = new App({
                name: args.name
            })

            await app.save();
            return app
        }
    },
    updateApp: {
        type: 'Boolean',
        args: {
            id: 'ID',
            name: 'String'
        }, 
        resolve: async (root, args) => {
            const result = await App.updateOne({_id: args.id}, {$set: {
                name: args.name
            }})
            return result.nModified == 1;
        }
    }
})

export default schemaComposer.buildSchema()