printf "STARTING CONTAINERS: MONGODB, APPLICATION, SIEGE with concurrency 10, requests 5"
docker-compose up mongodb application siege-c10 --abort-on-container-exit
printf "\n\n\n"

printf "STARTING CONTAINERS: MONGODB, APPLICATION, SIEGE with concurrency 25, requests 5"
docker-compose up mongodb application siege-c25 --abort-on-container-exit
printf "\n\n\n"

printf "STARTING CONTAINERS: MONGODB, APPLICATION, SIEGE with concurrency 50, requests 5"
docker-compose up mongodb application siege-c50 --abort-on-container-exit
printf "\n\n\n"

printf "STARTING CONTAINERS: MONGODB, APPLICATION, SIEGE with concurrency 100, requests 5"
docker-compose up mongodb application siege-c100 --abort-on-container-exit
printf "\n\n\n"