# Architecture

## Overview

This project runs as a small full-stack application on an Ubuntu Server virtual machine.

## Request Flow

Browser
↓
Nginx (Port 80)
↓
Reverse Proxy
↓
Node.js / Express (Port 3000)
↓
PostgreSQL (Port 5432)

## Components

### Frontend

A simple HTML/JavaScript frontend served by Express.

Responsibilities:
- User input
- Sending HTTP requests
- Displaying users returned by the API

### Nginx

Nginx acts as the public-facing web server.

Responsibilities:
- Listens on port 80
- Receives incoming HTTP traffic
- Reverse proxies requests to the Node.js application on port 3000

### Node.js / Express

The application backend.

Responsibilities:
- Serves the frontend
- Provides REST API endpoints
- Connects to PostgreSQL
- Handles user creation and retrieval

### PostgreSQL

Stores application data.

Database:
- backend_db

Main table:
- users

### Ubuntu Server

The application runs inside an Ubuntu Server VM.

The VM is hosted using:
- KVM
- libvirt

### Security

- UFW controls incoming traffic
- SSH is used for remote administration
- Database credentials are loaded from a local `.env` file
- `.env` is excluded from Git
