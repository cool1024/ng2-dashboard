# install
`npm install`

# run
`ng serve --open`

# build
`ng build --env=prod --output-hashing`

# run on nginx

you need that

` try_files $uri $uri/ /index.html?$query_string; `

replace the old

` try_files $uri $uri/ =404; `