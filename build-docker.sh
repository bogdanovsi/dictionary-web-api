#!/bin/bash

docker-compose build

docker-compose up

# docker-compose exec -T mongo dict_back/dictionary/*.bson 