---
id: add_node
title: Creating A New Node
sidebar_label: Creating A New Node
---

## Location

Head to the admin panel and click the Nodes tab on the left sidebar. After that, click 'Create New' on the
top right side to open the page to add a node.

![](/img/community/config/nodes/pterodactyl_add_node_create_button.png)

## Information Required

![](/img/community/config/nodes/pterodactyl_add_node_new_page.png)

- **Name**: a quick identifiable name for the Daemon
- **Description**: a long description that is used to help you identify the node.
- **Location**: the location you want the node in. These are configured in the 'Locations' section of the panel and one
  must be created before a node can be created. These simply act as categories for nodes and serve no other purpose at
  this time.
- **FQDN**: the fully qualified domain name for the node — for example: `node.demon.pterodactyl.io`
- **Communicate over SSL**: if the panel is using SSL the Daemon is required to use SSL as well.
- **Behind Proxy**: if you have the Daemon behind a proxy that terminates SSL connections before arriving at the Daemon
  then this option should be selected. If none of that sentence made sense, this doesn't effect you.
- **Server File Directory**: the location on the physical server where the Daemon is to store the files the servers
  generate. By default this is `/srv/daemon-data`.

:::note OVH Users
Some OVH users regularly have their `/home` folder be the largest filesystem. You may want to change to use
`/home/daemon-data` if you are on a default OVH box.
:::

- **Total Memory**: the total amount of RAM the node should be able to allocate automatically.
- **Memory Overallocate**: the percentage of RAM to over-allocate on a node. For example, if you have set a 10GB memory
  limit, with a 20% overallocation, the Panel will allocate up to 12GB of memory on this node in total.
- **Total Disk Space**: the total amount of disk space the node should be able to allocate automatically.
- **Disk Overallocate**: works the same way as memory overallocation.

:::caution
Don't forget to account for OS overhead and other software requirements on machines.
:::

- **Daemon Port**: the port that the Daemon should listen on.
- **Daemon SFTP Port**: the port the Daemon sftp-server or standalone SFTP server should listen on.

## Install the Daemon

At this point you'll need to have the Daemon installed on your machine. Check out the [documentation](/docs/0.7/daemon/installing)
for more information, or try one of the community guides for [CentOS](/community/installation-guides/daemon/centos7.md),
[Ubuntu](/community/installation-guides/daemon/ubuntu1804.md), or [Debian](/community/installation-guides/daemon/debian9.md).

## Configuring the Node

Go to the Node Configuration page

![](/img/community/config/nodes/pterodactyl_add_node_config.png)

Copy and paste the config into the `core.json` file. (Default location is `/srv/daemon/config/core.json`)

### Auto-Deploy

This will generate a command to run on the node server to configure the Daemon for you. (This needs to be run in the `/srv/daemon` folder, or `/home/daemon` if you're using the `/home` directory to store the Daemon)
