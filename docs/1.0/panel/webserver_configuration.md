---
id: webserver_configuration
title: Webserver Configuration
sidebar_label: Webserver Configuration
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger
You should remove the default Apache or NGINX configuration as it will expose application secrets to malicious
users by default.
:::

# NGINX
You should paste the contents of the file below, replacing `<domain>` with your domain name being used in a file called
`pterodactyl.conf` and place it in `/etc/nginx/sites-available/`, or &mdash; if on CentOS, `/etc/nginx/conf.d/`.

### NGINX With SSL
This configuration assumes that you will be using SSL on both the Panel and Daemons for significantly improved communication
security between users and the Panel. You will need to get a valid SSL certificate which can be done for free by using
Let's Encrypt. 

:::caution 
When using the SSL configuration you MUST create SSL certificates, otherwise your NGINX will fail to start.  See [Creating SSL Certificates](/docs/tutorials/creating_ssl_certificates) documentation page for how to create these certificates before continuing.
:::

<Tabs
  defaultValue="nginx"
  values={[
    {label: 'Nginx With SSL', value: 'nginx'},
    {label: 'Nginx Without SSL', value: 'nginxnonssl'}
  ]}>
<TabItem value="nginx">
```js
foo();
```</TabItem>
<TabItem value="nginxnonssl">Webserver config here</TabItem>
</Tabs>

### Enabling Configuration
The final step is to enable your NGINX configuration and restart it.
``` bash
# You do not need to symlink this file if you are using CentOS.
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf

# You need to restart nginx regardless of OS.
systemctl restart nginx
```

# Apache
You should paste the contents of the file below, replacing `<domain>` with your domain name being used in a file called
`pterodactyl.conf` and place it in `/etc/apache2/sites-available`, or &mdash; if on CentOS, `/etc/httpd/conf.d/`.

Note: When using Apache, make sure you have the `libapache2-mod-php` package installed or else PHP will not display on your webserver.

<Tabs
  defaultValue="apache"
  values={[
    {label: 'Apache With SSL', value: 'apache'},
    {label: 'Apache Without SSL', value: 'apachenonssl'}
  ]}>
<TabItem value="apache">Webserver config here</TabItem>
<TabItem value="apachenonssl">Webserver config here</TabItem>

</Tabs>

### Enabling Configuration
Once you've created the file above, simply run the commands below. If you are on CentOS _you do not need to run the commands
below!_ You only need to run `systemctl restart httpd`.

``` bash
# You do not need to run any of these commands on CentOS
sudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
sudo a2enmod rewrite
systemctl restart apache2
```
