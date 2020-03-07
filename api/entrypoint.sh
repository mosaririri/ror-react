#!/bin/sh
set -e

# server.pidは都度消す
rm -f /myapp/tmp/pids/server.pid

exec "$@"
