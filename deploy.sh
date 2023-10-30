#run git pull
git pull

#run git pull
npm install

#run npm build
npm run build

#run delete pm2
pm2 delete korean

#run start pm2
pm2 start ecosystem.config.js

#kil current process
fuser -k 3003/tcp

#clear frontend cache
curl -X POST -i -H "x-nuxt-multi-cache-token: O5ilxqx5k1ZzFMjEVr" http://localhost:3003/__nuxt_multi_cache/purge/all