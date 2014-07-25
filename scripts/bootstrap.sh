#!/usr/bin/env bash

sudo su root
apt-get update
apt-get install -y nginx fail2ban varnish unattended-upgrades git-core htop
adduser --disabled-password --gecos "" deployer
mkdir -p /home/deployer/.ssh
mkdir -p /home/deployer/reddit-t
git init /home/deployer/reddit-t
cd /home/deployer/reddit-t
ln -s /home/deployer/reddit-t/config/nginx.conf /etc/nginx/sites-enabled/reddit-t.conf
git remote add origin git://github.com/rocket-pack/reddit-t.git
chown -R deployer:deployer .
echo "cd /home/deployer/reddit-t" > /etc/cron.d/reddit-t
echo "git pull origin master" >> /etc/cron.d/reddit-t
bash /etc/cron.d/reddit-t

echo 'Project created. Now log in and add your public key to /home/deployer/.ssh/authorized_keys and then run scripts/secure.sh'