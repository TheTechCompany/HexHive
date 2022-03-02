# HexHive Infrastructure

## Get Started

- Install go
- Install [ipfs-key](https://github.com/whyrusleeping/ipfs-key)
- Install pulumi
- Setup aws credentials


# Fuck AWS

Pulumi / AWS Load Balancer Controller don't play nice so for now follow the mainline instructions [link](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html)



### Env setup

1. Generate IPFS cluster secret and copy to .env key IPFS_CLUSTER_SECRET
```
od  -vN 32 -An -tx1 /dev/urandom | tr -d ' \n' | base64  
```

2. Generate ipfs key and copy to .env key IPFS_BOOSTRAP_PEER_ID
```
ipfs-key | base64
```

3. Base64 private key and copy to .env key IPFS_BOOTSTRAP_PEER_PRIV_KEY
```
echo "<INSERT_PRIV_KEY_VALUE_HERE>" | base64
```

