#!/usr/bin/env bash

sudo su root
apt-get update
apt-get install -y nginx fail2ban varnish unattended-upgrades git-core htop
adduser --disabled-password --gecos "" deployer
usermod -a -G sudo deployer
mkdir -p /home/deployer/.ssh
mkdir -p /home/deployer/reddit-t
git init /home/deployer/reddit-t
cd /home/deployer/reddit-t
ln -sf /home/deployer/reddit-t/conf/nginx.conf /etc/nginx/sites-enabled/reddit-t.conf
rm /etc/nginx/sites-enabled/default
git remote add origin git://github.com/rocket-pack/reddit-t.git
chown -R deployer:deployer .
echo "cd /home/deployer/reddit-t" > /etc/cron.d/reddit-t
echo "git pull origin master" >> /etc/cron.d/reddit-t
bash /etc/cron.d/reddit-t

echo "Project created. Now log in and add your public key to /home/deployer/.ssh/authorized_keys and then run scripts/secure.sh. If you require sudo, set a password."
