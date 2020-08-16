---
id: ubuntu2004
title: Ubuntu 20.04
sidebar_label: Ubuntu 20.04
---
In this guide we will install Pterodactyl's Daemon v0.6.X — including all of it's dependencies — and configure it to use a SSL connection.

:::tip
This guide is based off the [official installation documentation](/docs/0.7/daemon/installing) but is tailored specifically for Ubuntu 20.04.
:::

## Install Requirements
We will first begin by installing all of the Daemon's [required](/docs/0.7/daemon/installing#dependencies) dependencies.

### General Requirements
```bash
apt install -y zip unzip tar make gcc g++ python
```

### Docker

```bash
apt install -y docker.io

systemctl enable docker
systemctl start docker
```

### Nodejs

```bash
apt install -y nodejs npm
```

## Installing the Daemon
Great, now all of the dependencies and firewall rules have been dealt with. From here follow the [official Daemon installation documentation](/docs/0.7/daemon/installing#installing-daemon-software).
