tar czf darlin_me.tar.gz dist
scp darlin_me.tar.gz root@darlin.me:/var/www/angular-mysite2
rm darlin_me.tar.gz

ssh root@darlin.me 'cd /var/www/angular-mysite2;rm -rf dist;tar xvzf darlin_me.tar.gz'
