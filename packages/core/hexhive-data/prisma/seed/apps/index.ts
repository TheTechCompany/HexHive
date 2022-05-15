import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

export default async (prisma: PrismaClient) => {
    const apps = await prisma.application.createMany({
        data: [
            {
                id: nanoid(),
                name: "HiveFlow",
                slug: 'flow',
                entrypoint: 'https://apps.hexhive.io/hiveflow-frontend/hexhive-apps-hive-flow.js',
                staging_entrypoint: 'https://staging-apps.hexhive.io/hiveflow-frontend/hexhive-apps-hive-flow.js'
            },
            {
                id: nanoid(),
                name: "HiveCommand",
                slug: 'command',
                entrypoint: 'https://apps.hexhive.io/hivecommand-frontend/hivecommand-app-frontend.js',
                staging_entrypoint: 'https://staging-apps.hexhive.io/hivecommand-frontend/hivecommand-app-frontend.js'
            },
            {
                id: nanoid(),
                name: "HiveFiles",
                slug: 'files',
                entrypoint: 'https://apps.hexhive.io/hivefiles-frontend/hivefiles-app-frontend.js',
                staging_entrypoint: 'https://staging-apps.hexhive.io/hivefiles-frontend/hivefiles-app-frontend.js'
            },
            {
                id: nanoid(),
                name: "HiveConnect",
                slug: 'connect',
                entrypoint: 'https://apps.hexhive.io/hiveconnect-frontend/hiveconnect-app-frontend.js',
                staging_entrypoint: 'https://staging-apps.hexhive.io/hiveconnect-frontend/hiveconnect-app-frontend.js'

            }
        ]
    })

    return apps;
}