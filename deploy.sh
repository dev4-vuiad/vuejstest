#run git pull
git pull

#run git pull
npm install

#run npm build
npm run build

#run start pm2
pm2 restart ecosystem.config.js

#clear frontend cache
curl -X POST -i -H "x-nuxt-multi-cache-token: O5ilxqx5k1ZzFMjEVr" http://127.0.0.1:3004/__nuxt_multi_cache/purge/all