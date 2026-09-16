# Linux Full-Stack Infrastructure Lab

A hands-on full-stack and infrastructure lab running on Ubuntu Server.

## Architecture

Browser
↓
Nginx
↓
Node.js / Express
↓
PostgreSQL

## Stack

- Ubuntu Server
- KVM / libvirt
- Nginx
- Node.js
- Express
- PostgreSQL
- UFW
- SSH
- HTML / JavaScript

## What I practiced

- Linux server administration
- Virtual networking and DHCP troubleshooting
- SSH remote administration
- Firewall configuration with UFW
- Nginx reverse proxy
- Node.js backend deployment
- PostgreSQL authentication and permissions
- Full-stack HTTP requests
- Troubleshooting services and processes

## Troubleshooting

During the lab I diagnosed and fixed issues including:

- Missing IPv4 / DHCP configuration
- Missing network route
- SSH authentication problems
- UFW blocking HTTP traffic
- Nginx reverse proxy configuration
- PostgreSQL password authentication
- PostgreSQL table permissions
- Old Node.js process still listening on port 3000
- Nginx 502 Bad Gateway

## Security

Database credentials are stored in a local `.env` file and are excluded from Git using `.gitignore`.
