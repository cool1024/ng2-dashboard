#cnpm replace npm

# install
`npm install`

# run
`ng serve --open`

# build
`ng build --env=prod`

# angular/cli 1.2.7

# run on nginx

you need that

` try_files $uri $uri/ /index.html?$query_string; `

replace the old

` try_files $uri $uri/ =404; `

#update angular/cli

```
global install

npm install -g @angular/cli@latest

project install

npm install --save-dev @angular/cli@latest
```

#link source in your index.html

support IE9+
` <script src="http://hello1024.oss-cn-beijing.aliyuncs.com/ng-dashboard/classList.min.js"></script> `
` <script src="http://hello1024.oss-cn-beijing.aliyuncs.com/ng-dashboard/shim.min.js"></script> `

add bootstrap
` <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" /> `

add font-awesome
` <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" /> `

