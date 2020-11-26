# CoviDetect Prototype

A conceptual user interface to CoviDetect - an AI-powered COVID-19 detection system that analyses your voice for traits similar to those of Coronavirus-positive patients, accessible from a smartphone.

## Dependencies:

* Docker 
* Docker-Compose

## Run instructions

* Navigate to `/app`.
* Run `docker-compose up --build`

## Application demo instrucions

* The application is designed to be accessed from a mobile (portrait) interface
* Navigate to `<ip-address>:3000/` to land on the login page
* Login with `user@email.com` (any password) to view the standard user interface.
* Login with `healthcare@email.com` to view the interface for healthcare workers
