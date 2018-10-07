This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

### How to run the app locally:

1. clone the repository<br>
``
git clone https://github.com/SouhaibBenFarhat/react-tracker.git
``
2. install dependencies<br>
go to the project folder and run 
``
yarn install 
``
or 
``
npm install
``

3. run the app 
``
yarn start
``
or 
``
npm start
``

4. Open browser and go to ``localhost:3000``


### Files structure:

```
react-tracker/
  config/
  node_modules/
  public/
    scripts/
      tracker.js
    index.html
    favicon.ico
  scripts/
  src/
    assets/
    components/
    services/
    utility/
    index.js
  package.json
  README.md
  yarn.lock

```

### Time tracker library:
[tracker.js](/public/scripts/tracker.js) the library is included into the  [index.html](/public/index.html)

````html
<script type="text/javascript"
        src="./scripts/tracker.js"
        host="http://localhost:4000"  <==== server url
        endpoint="/visit/init" <=== endpoint to init the session
        start-after-login="true" <=== if true the libraby start tracking once the user is logged in
        login-page-path="/login" <=== login page url 
        script-id="trackme" <=== script id
        container-id="timer-container" <=== html element id where you want to show to elpased time.
        >
</script>
        
```