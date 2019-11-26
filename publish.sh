git add .
git commit -m "publish kyb-steamcommunity"
git push

nrm use npm
npm version patch
npm publish
nrm use taobao

