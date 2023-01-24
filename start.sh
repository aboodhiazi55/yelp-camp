#!/bin/bash
nginx && pm2-runtime start ecosystem.config.js --env production
# nginx -g 'daemon off;' && node app.js 