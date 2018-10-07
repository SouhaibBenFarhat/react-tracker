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
        
````

 
### Check list:

* [ ] The time should only be tracked, if the user is actively browsing the site. If he is out of focus, in a different tab, idle or the like, the time should not be counted
* [ ] The time tracked should be accurately and performantly send to the backend and saved in a database
* [ ] You can use any javascript framework and/or vanilla javascript
* [ ] The websites the users are browsing are not important. Use an existing template or create a simple web app you like
* [ ] the javascript time tracking library should be stand alone and build in a way that anyone could add it to his application
* [ ] The time tracked and saved should not be more than 5% off the time, the user is actually browsing the sites
* [ ] Do not simply copy existing solutions, I know them :)
* [ ] Do it by yourself

