#!/usr/bin/env bash

sudo su root
apt-get update
apt-get install -y nginx fail2ban varnish unattended-upgrades git-core htop
adduser --disabled-password --gecos "" deployer
mkdir -p /home/deployer/.ssh
git clone 'git://github.com/rocket-pack/reddit-t.git' '/home/deployer/reddit-t'
chown -R deployer:deployer /home/deployer/reddit-t
echo 'cd /home/deployer/reddit-t && git pull origin master' > /etc/cron.d/reddit-t
echo 'Project created. Now log in and add your public key to /home/deployer/.ssh/authorized_keys and then run scripts/secure.sh'