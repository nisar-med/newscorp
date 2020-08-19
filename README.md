# Newscorp Test

## Requirements
You need npm, Node, PHP cli and Composer on the machine to run the test scripts

## Task A
In the PHP folder run following command
`php "src/Task A.php"`

## Task B
In the PHP folder run following commands

`composer install`
`./vendor/bin/phpunit`

## Task C
This application uses Twitter API to search tweets related to @KidspotSocial.

### API
The API is based on an Open Source reverse proxy developed in NodeJS

In twitter-search-api folder run following commands

`npm install`
`BEARER_TOKEN=<YOUR-TWITTER-BEARER-TOKEN> npm run start`

This will launch the API reverse proxy app developed in NodeJS

### Web App
The Web App is developed in Angular

In a new terminal window, change to twitter-search-app folder and run following commands

`npm install`
`npm run start`

This will start Angular app. Open a browser window and goto http://localhost:4200. Here you can enter search all tweets related to Kidspot

To run tests
`npm run test`

### Limitations
1. The App does not have a feature to load more than 10 tweets. We could have a link at the bottom of the list to load more tweets for the keywords we search.
2. The API is only a reverse proxy, due to limited time, I did not built an API but instead I used an open source NodeJS reverse proxy application.
3. Limited styling

### Challenges
1. The browser does not allow CORS XMLHTTPRequests for security reasons so Twitter API cannot be called directly via browser based scripts. A reverse proxy is used to add required Authentication and CORS headers

2. Due to security reason, we can't include Twitter API's OAuth2 Bearer token in the code. So it needs to be passed via enviornment variable to the app. Ideally credentials should be fetched from a keyvault 