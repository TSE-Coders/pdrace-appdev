Accesing with minikube: 

https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/ 

minikube service kubernetes-bootcamp --url 

- Building image with processor flag
- https://docs.docker.com/build/building/multi-platform/#:~:text=When%20triggering%20a%20build%2C%20use,one%20platform%20at%20a%20time.
- Images:
  ccdaniele/pdrace-users-api:
  Version: v1.0
  Database: postgres 
  Architecture: linuxamd
  Datadog enabled: ddon
  Rails server: port3000 

Creating persistance volume: https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/

Datadog create secret: 
```
kubectl create secret generic datadog-secret --from-literal api-key=$DD_API_KEY
```

my-svc.my-namespace.svc.cluster-domain.example

Access to node: kubectl debug node/<node_name> -it --image=ubuntu 

Istio gateway: 
https://istio.io/latest/docs/examples/microservices-istio/istio-ingress-gateway/

King load balancer: 

https://kind.sigs.k8s.io/docs/user/loadbalancer/ 

Install istio crds:
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.23/manifests/charts/base/crds/crd-all.gen.yaml
