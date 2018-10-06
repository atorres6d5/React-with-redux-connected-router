# Create-React-App W/ Redux and Connected-Router

this is a boiler plate project to make production of apps quicker, this is a common set up i use. Built on top of ```create-react-app```

```git clone```

```npm install```

```npm run start```

## ---- Redux Setup ----

### --Actions--
To add new action first add action to types.js file and export to index.js file and then create action. Use Axios for API calls.

ReduxThunk is added to for use of ```dispatch(<action>)``` inside of other actions

### --Reducers--
Use src/reducers/index.js to export reducers. to add new reducer create new ```<reducer>.js ``` file and import here and add as new key value. This file is the RootReducer that gets imoprted into ```./src/index.js```  on line 13



## ---- Router Setup ----
### -- Router --
Using connected-react-router inside the ```./src/components/root.js``` import new component for navigation here. public routes are made using the ```<Route>``` component and Private Routes with the ```<PrivateRoute>``` component. Private routes only check to see if correct token is present. They don't authenticate token.
if present route will render of not then will be Redirected to "/" route

### -- Nav --
use ```this.props.history``` to navigate around the app. example to navigate home use ```this.props.history.push('/home')``` to go to the home path in the router. see line 15 in ```./src/App.js``` and line 16 in ```./src/components/home.js``` for examples