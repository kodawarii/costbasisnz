## How to Redux
- npm install redux react-redux redux-thunk
- thunk is for async
- combine reducers is to create single root reducer instead of having multiple stores (see api doc)

- Get redux devtools

- create reduxtypes
- create /Actions and mock data / mock api
- create /Reducers
- create store - middleware, thunk, async(to use redux in componentDidMount), compose

- create TestComponent to connect to redux

- Add this.props.fetchBrokers() in componentDidMount in TestComponent

### Things to note
- store is accessed through connecting the component using export default connect(), which also references the actions

## Git Branching and merging
- git branch feature1
- git checkout feature1
- (develop features in feature1 branch)
- git commit 
- git checkout main
- git merge feature1 == merge feature1 into main
- git push origin master
- git branch -d feature1

## How to gh-pages
- npm install gh-pages
- Add to package.json: "homepage": "https://kodawarii.github.io/{reponame}"
- Add to scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
- npm run deploy

- If needed, go to repo > Settings > scroll down to gh-pages > Source > gh-pages

## How to make a modal
- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

## Notes on the app
### Broker List
- Initial Implementation was fetchBrokers() from user1.json(fake db) in ComponentDidMount() in Home component
- When we addBroker(), only the store is updated and not the actual user1.json(fake db)
- So when we render the Home page after addBroker(), fetchBrokers() is getting called - does not get the updated store
- We could append to user1.json but infosec exposure danger

- addBroker() will make a API call to the backend in the Full stack app
- That way fetchBrokers() will also work correctly

- For the front-end mvp app, we can import user1.json in UserDataReducers and set the list of brokers as the default store there
- The full stack app does not use this action/reducer - purely a front end mechanism