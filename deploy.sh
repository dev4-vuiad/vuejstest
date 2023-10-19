#run git pull
git pull

#run npm build
npm run build

#run delete pm2
pm2 delete test_ads

#run start pm2
pm2 start ecosystem.config.js

#kil current process
fuser -k 3006/tcp

#clear frontend cache
curl -X POST -i -H "x-nuxt-multi-cache-token: O5ilxqx5k1ZzFMjEVr" http://localhost:3006/__nuxt_multi_cache/purge/all
