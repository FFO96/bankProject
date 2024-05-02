#!/bin/bash
set -e

docker-compose -f db/postgres_db.yml up -d

