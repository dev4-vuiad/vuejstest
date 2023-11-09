#run git pull
git pull

#run git pull
npm install

#run npm build
npm run build

#run delete pm2
pm2 delete takitv

#run start pm2
pm2 start ecosystem.config.js

#kil current process
fuser -k 3000/tcp

#clear frontend cache
curl -X POST -i -H "x-nuxt-multi-cache-token: O5ilxqx5k1ZzFMjEVr" http://127.0.0.1:3000/__nuxt_multi_cache/purge/all