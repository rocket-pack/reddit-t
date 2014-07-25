#!/usr/bin/env bash

echo "AllowUsers deployer" >> /etc/ssh/sshd_config
sed -i 's/PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
sed -i 's/RSAAuthentication no/RSAAuthentication yes/' /etc/ssh/sshd_config
sed -i 's/PubkeyAuthentication no/PubkeyAuthentication yes/' /etc/ssh/sshd_config
sed -i 's/Port 22/Port 2222/' /etc/ssh/sshd_config