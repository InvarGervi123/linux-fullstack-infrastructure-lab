# Troubleshooting Log

This project was built as a hands-on infrastructure lab.

The following problems were diagnosed and resolved during setup.

## VM Networking Failure

### Symptoms

- DNS resolution failed
- `ping google.com` failed
- `ping 8.8.8.8` returned network unreachable
- `ip route` was empty
- The VM had no IPv4 address

### Diagnosis

The network interface was up, but DHCP was not configured correctly.

### Fix

Enabled DHCP in Netplan and verified libvirt networking.

Tools used:

```bash
ip addr
ip route
ping
netplan
systemctl
tcpdump
virsh

SSH Login Failure
Symptoms

SSH authentication failed.

Cause

The wrong username was used.

The host username was:

ankroi

The Ubuntu Server username was:

ankori
Fix

Connected using the correct username.

HTTP Timeout
Symptoms

Nginx worked locally with:

curl http://localhost

But the browser could not reach the server.

Cause

UFW allowed SSH traffic but blocked port 80.

Fix
sudo ufw allow 80/tcp
Node.js Not Reachable Directly

The Node.js application was running on port 3000.

Instead of exposing port 3000 publicly, Nginx was configured as a reverse proxy.

location / {
    proxy_pass http://127.0.0.1:3000;
}
PostgreSQL Authentication Failure
Symptoms
password authentication failed for user "backend_user"
Diagnosis

PostgreSQL itself accepted the credentials, but an old Node.js process was still running with the previous configuration.

Fix

Identified the process listening on port 3000:

sudo ss -lntp | grep ':3000'

Killed the old Node.js process and restarted the application.

PostgreSQL Permission Error
Symptoms
permission denied for table users
Cause

The application database user did not have table permissions.

Fix
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE users TO backend_user;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO backend_user;
Nginx 502 Bad Gateway
Cause

Nginx was running, but the Node.js backend was stopped.

Fix

Restarted the Node.js application:

Browser
