#cnpm replace npm

# install
`npm install`

# run
`ng serve --open`

# build
`ng build --env=prod --output-hashing`
# anuglar/cli更新到1.2.7可以正常使用 ng build --prod 了

# run on nginx

you need that

` try_files $uri $uri/ /index.html?$query_string; `

replace the old

` try_files $uri $uri/ =404; `

#update angular/cli

` 先更新全局 `
` npm install -g @angular/cli@latest `
` 然后更新项目 1.删除项目中node_modules dist这两个文件夹 2.npm install --save-dev @angular/cli@latest 3.重新安装项目`

#link source in your index.html

support IE9+
` <script src="http://hello1024.oss-cn-beijing.aliyuncs.com/ng-dashboard/classList.min.js"></script> `
` <script src="http://hello1024.oss-cn-beijing.aliyuncs.com/ng-dashboard/shim.min.js"></script> `

add bootstrap
` <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" /> `

add font-awesome
` <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" /> `

