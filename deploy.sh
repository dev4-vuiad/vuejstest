#run git pull
git pull

#run npm build
npm run build

#delete pm2 if have
pm2 delete index

#run start pm2
pm2 start ecosystem.config.js --watch

#clear frontend cache
curl -X POST -i -H "x-nuxt-multi-cache-token: O5ilxqx5k1ZzFMjEVr" http://127.0.0.1:3001/__nuxt_multi_cache/purge/all

#kill current process
fuser -k 3001/tcp