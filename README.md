# Kubernetes basics
## Introduction
This project is a small proof of concept for any beginners in Kubernetes (commonly call k8s and pronounced Kates).
## Setup 
You will need to have an instance of kubernetes available. We will be using [microk8s](https://microk8s.io/) from canonical for that. You will need Ubuntu or a linux distro with [snapcraft](https://snapcraft.io/docs/installing-snapd) installed

```bash
# microk8 installation
$ sudo snap install microk8s --classic
# adds you to the correct group on linux. You will need to log off and log back in.
$ sudo usermod -aG microk8s <your username>
# makes you owner of the kube folder
$ sudo chown -f -R <your username> ~/.kube
# checks if microk8 is up
$ microk8s status --wait-ready
# installs basic services you will need in order to run k8s locally
$ microk8s enable dashboard dns registry istio

```
## Setup kubectl
Kubectl is usable with the following command
```bash 
$ kubectl ...
```
If you want to avoid using microk8s as a prefix you can also add the following line in your `~/.bashrc` or `~/.zshrc` file

```bash
alias kubectl="microk8s kubectl"
```

Run the following command once the modification is done.
```bash
# For Bash
$ source ~/.bashrc 
# For zsh
$ source ~/.zshrc 
```
## Basic commands

### Start microk8s
```bash
$ microk8s start 
```
### Stop microk8s
```bash
$ microk8s stop 
```
### Create a Kubeconfig file
```bash
$ microk8s config > Kubeconfig
```

## Kubectl commands
### Deployment
#### Create a deployment
```bash
$ kubectl create deployment <Deployment-name> --image=DOCKER-IMAGE
```
#### Delete a deployment
```bash
$ kubectl delete deployment <Deployment-name> 
```

#### Expose port for deployment
```bash
$ kubectl expose deployment <Deployment-name> --type=LoadBalancer --port=<Port>
```
#### Get a list of deployments
```bash
$ kubectl get deployments
```
### Pods
#### Get a list of pods
```bash
$ kubectl get pods
```

### Start the dashboard
```bash
$ microk8s dashboard-proxy
```
### Namespaces
#### List all the namespaces
```bash
$ kubectl get all --all-namespaces
```
#### Create namespace
This is like a workspace but you will be putting all the resources and services your app will need.
```bash
$ kubectl create namespace nginx-deployment
```
### Working with files (The declarative way)
#### Create resource quota
```bash
$ kubectl create -f nginx_resourcequota.yml
```
#### Create deployment
```bash
$ kubectl create -f nginx_deployment.yml
```
#### Update deployment
```bash
$ kubectl apply -f nginx_deployment.yml
```

#### Create service
```bash
$ kubectl create -f nginx_service.yml
```

## Recommended VSCode extension
I strongly recommend using the following VSCode extension:
[Kubernetes for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools)
## Reference
- [Kubernetes Deployment Tutorial For Beginners](https://devopscube.com/kubernetes-deployment-tutorial/)
- [Learning To Use Kubernetes - DEV Community](https://dev.to/rinkiyakedad/learning-to-use-kubernetes-1l6g)
- [How To Deploy a Scalable and Secure Django Application with Kubernetes - DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-scalable-and-secure-django-application-with-kubernetes)