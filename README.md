# frontend

> this is UI part

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


Miracle: 
1. vue init webpack frontend
2.npm install --save axios   for ajax call


 to deploy frontend codes. 
 prestep: add the followings to index.js (backend codes)
 // 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../dist')))

after that
 use nginx to deploy http server
 
 1.in nginx.conf file, under http part, add:
 include /etc/nginx/conf.d/*.conf;  m
 2. add any config file end wiht .conf and configured like this: (pseudo codes)
  server {
    listen 80;
    # 想要代理的域名
    server_name hurakan-ai.com;
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /etc/nginx/html; 
    }
    location / {      
        root /etc/nginx/dist;
        index  index.html index.htm;
    }
    location /api/ {
        proxy_pass http://45.32.50.166:3000;
    }
    location /file/ {
        proxy_pass http://45.32.50.166:3000;
    }
}

 
 
