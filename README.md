# Kubernetes proof of concept
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
## How to use kubectl
Kubectl is usable with the following command
```bash 
$ microk8s kubectl ...
```
If you want to avoid using microk8s as a prefix you can also add the following line in your `.bashrc` or `.zshrc` file

```bash
# For Bash
$ nano ~/.bashrc 
# For zsh
$ nano ~/.zshrc 
```
Line to add
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
microk8s start 
```
### Stop microk8s
```bash
microk8s stop 
```

### Start the dashboard
```bash
$ microk8s dashboard-proxy
```
### List all the namespaces
```bash
$ microk8s kubectl get all --all-namespaces
```
### Create namespace
This is like a workspace but you will be putting all the resources and services your app will need.
```bash
$ microk8s kubectl create namespace nginx-deployment
```
### Create resource quota
```bash
$ microk8s kubectl create -f nginx_resourcequota.yml
```
### Create deployment
```bash
$ microk8s kubectl create -f nginx_deployment.yml
```
### Create service
```bash
$ microk8s kubectl create -f nginx_service.yml
```
### Create a Kubeconfig file
```bash
$ microk8s config > Kubeconfig
```
## Recommended Vscode extension
I strongly recommend using the following VSCode extension:
[Kubernetes for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools)
## Reference
- [Kubernetes Deployment Tutorial For Beginners](https://devopscube.com/kubernetes-deployment-tutorial/)