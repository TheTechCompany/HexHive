import { config } from 'dotenv'
config();

import * as awsx from "@pulumi/awsx";
import * as eks from '@pulumi/eks';
import * as aws from '@pulumi/aws'
import * as k8s from "@pulumi/kubernetes";

import k3s from './src/k3s'

import { Neo4jCluster, MongoCluster } from './src/db';

import { all, Config, output } from "@pulumi/pulumi";
import EKSCluster from './src/eks-cluster'
import { readFileSync } from 'fs';
import { Provider } from '@pulumi/kubernetes';

const main = (async () => {

    const config = new Config();


    const amiName = config.require("amiName") //AMI with kubernetes dependencies
    
    const keyName = config.require('keyName')

    const privateKeyBase64 = readFileSync(`/Users/thekid/.ssh/M1.pem`, 'utf8') //process.env.PRIVATE_KEY || ''

    const privateKey = privateKeyBase64 // Buffer.from(privateKeyBase64, 'base64').toString('ascii');

    const deployment = "hexhive"

    const defaultVpc = new awsx.ec2.Vpc(`${deployment}-xvpc`, {
        numberOfNatGateways: 1,
        numberOfAvailabilityZones: 2,
        // cidrBlock: `172.31.0.0/24`,
        enableDnsHostnames: true,
        tags: {
            'kubernetes.io/cluster/hexhive-cluster': 'shared',
            'kubernetes.io/role/elb': '1'
        },
        
        subnets: [
            {
                type: "public",
                tags: {
                    'kubernetes.io/cluster/hexhive-cluster': 'shared',
                    'kubernetes.io/role/elb': '1'
                }
            },
            {
                type: 'private',
                tags: {
                    'kubernetes.io/cluster/hexhive-cluster': 'shared',
                    'kubernetes.io/role/internal-elb': '1'
                }
            }
        ]
    })

    const publicSubnetIds = await defaultVpc.publicSubnetIds
    const publicSubnets = await defaultVpc.publicSubnets;

    defaultVpc.id.apply(async (vpcId) => {
        const table = await aws.ec2.getRouteTable({
            filters: [{
                name: 'association.main',
                values: ['true']
            }],
            vpcId
        })

        new aws.ec2.Tag(`rtb-cluster-tag`, {
            resourceId: table.id,
            key: 'kubernetes.io/cluster/hexhive-cluster',
            value: 'shared'
        })
    })

    // publicSubnetIds.map((subnet,ix) => {
    //      subnet.apply(async (subnetId) => {
           

    //     })
    // })

    const sg = new aws.ec2.SecurityGroup(`${deployment}-sg`, {
        vpcId: defaultVpc.vpc.id,
        ingress: [{
            fromPort:22,
            protocol: 'TCP',
            toPort: 22,
            cidrBlocks: ['0.0.0.0/0']
        }, {
            fromPort: 6443,
            protocol: 'TCP',
            toPort: 6443,
            cidrBlocks: ['0.0.0.0/0']
        }, {
            fromPort: 0,
            toPort: 0,
            protocol: '-1',
            self: true
        }],
        egress: [{
            protocol: '-1',
            fromPort: 0,
            toPort: 0,
            cidrBlocks: ['0.0.0.0/0']
        }]
    })
    // const defaultVpc = awsx.ec2.Vpc.getDefault()

    // const privateSubnetIds = await defaultVpc.privateSubnetIds;
    // const publicSubnetIds = await defaultVpc.publicSubnetIds

    // const privateSubnets = await defaultVpc.privateSubnets;
    // const publicSubnets = await defaultVpc.publicSubnets;

    // const subnets = publicSubnets.concat(privateSubnets);

    const cidrBlocks = publicSubnets.map((x) => x.subnet.cidrBlock.apply(x => `${x || '172.31.0.0/16'}`)) // ['172.31.0.0/24'] // subnets.map((x) => x.subnet.cidrBlock.apply((x) => `${x || '172.31.0.0/16'}`))

    // const { cluster, vpc } = await EKSCluster(deployment)

    // const ipfsCluster = await IPFSCluster(cluster, vpc)

    // const { url: mongoUrl } = MongoCluster(cluster);

    // if(!cidrBlocks) return;

    const subnets = await defaultVpc.publicSubnetIds
  
   const { kubeconfig } = await k3s(amiName, keyName, privateKey, sg, subnets, cidrBlocks, defaultVpc.id)

    // // const { url: neo4Url } = Neo4jCluster(cluster)
    // const { url: mongoUrl } = MongoCluster(cluster)

    // const { url } = GatewayCluster(cluster, zone, 'staging-api.hexhive.io', mongoUrl);
    // const { url : frontend } = await MicrofrontendCluster(cluster, zone, 'next.hexhive.io', mongoUrl);

    return {
        // mongoUrl,
        // vpc,
        defaultVpc,
        k3sconfig: kubeconfig,
        cidrBlocks,
        // clusterToken,
        // hostIp: controlNode.privateDns,
        // token,
        // discoveryCa: discoveryCa.apply((ca) => ca?.trim()),
        // kubeconfig: cluster.kubeconfig
    }

})()

// export const token = main.then(result => result.clusterToken)
// export const hostIp = main.then(result => result.hostIp)
// export const discoveryCa = main.then(result => result.discoveryCa)

export const cidrBlocks = main.then((r) => r.cidrBlocks)

export const k3sconfig = main.then(result => result.k3sconfig)

// export const kubeconfig = main.then(result => result.kubeconfig)
// export const vpcId = main.then(result => result.vpc.id);

export const defaultVpcId = main.then((r) => r.defaultVpc.id);

// export const mongoUrl = main.then(result => result.mongoUrl)
