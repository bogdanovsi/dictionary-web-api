#!/bin/bash

docker-compose build
docker-compose up -d
docker-compose exec -T mongo mongorestore --nsInclude=dictionary.definitions --archive --gzip < backup.gz