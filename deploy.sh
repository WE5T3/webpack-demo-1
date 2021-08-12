yarn build &&
git checkout gh-pages &&
rm -rf *.js *.html *.css *.png &&
mv dist/* ./ &&
rm -rf dist ;
git add . &&
git commit -m 'update' &&
git push  &&
git checkout -