import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

import crypto from 'crypto';

const prisma = new PrismaClient();

(async () => {

    await prisma.application.deleteMany();
    await prisma.user.deleteMany();
    await prisma.userTrust.deleteMany();
    await prisma.organisation.deleteMany();

    const application = await prisma.application.create({
        data: {
            id: nanoid(),
            name: "Demo App"
        }
    });

   const org = await prisma.organisation.create({
        data: {
            id: nanoid(),
            name: "Demo Org",
        }
    });
    const role = await prisma.role.create({
        data: {
            id: nanoid(),
            name: "Admin Access",
            applications: {
                connect: [{id: application.id}]
            },
            organisation: {
                connect: {
                    id: org.id
                }
            }
        }
    })

    const user = await prisma.user.create({
        data: {
            id: nanoid(),
            name: "Developer",
            email: 'demo@demo.com',
            password: crypto.createHash('sha256').update('password').digest('hex')   
        }
    })

    await prisma.organisation.update({
        where: {id: org.id},
        data: {
            trustsUsers: {
                create: [{
                    id: nanoid(),
                    trust: {
                        connect: {id: user.id}
                    },
                    roles: {
                        connect: [{id: role.id}]
                    }
                }]
            }
        }
    })

  

})().finally(async () => {
    await prisma.$disconnect();
})