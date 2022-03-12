# AWS Load Balancer

`eksctl create iamserviceaccount --cluster=${cluster} --namespace=kube-system --name=aws-load-balancer-controller --attach-policy-arn=${iam} --override-existing-serviceaccounts --approve`

`helm install aws-load-balancer-controller eks/aws-load-balancer-controller -n kube-system --set clusterName=${cluster} --set region=ap-southeast-2 --set vpcId=${vpc} --set serviceAccount.create=false \
  --set serviceAccount.name=aws-load-balancer-controller`

