
## Start
To start the project in localhost
```shell
npm start
```

To build this app
```shell
npm run build
```

## Setup : 

1. Creating a Node project
```shell
npm init -y
```

2. Installing Babel dependencies
```shell
npm install --save-dev @babel/core babel-loader @babel/cli @babel/preset-env @babel/preset-react
```

3. Installing Webpack dependencies  (Bundler)
```shell
npm install --save-dev @babel/core babel-loader @babel/cli @babel/preset-env @babel/preset-react
```

4. Installing React dependencies
```shell
npm install react react-dom 
```

5. Now configuring Babel by making .babelrc
6. Now configuring webpack by making an webpack.config.js
7. Adding scripts in package.json
```shell
"scripts": {
    "start": "webpack-dev-server .",
    "build": "webpack ."
  }
```

## Steps : 

1. First I am making ```public``` folder and creating ```index.html``` file and adding a div with id="board";
2. Now making an ```src``` folder and adding a react component ```App.js``` file.
3. In the root folder I am making an ```index.js``` and this is the entry of our kanban react app.
4. Making the new folder ```components``` inside ```src``` folder and adding small components of this web app.
5. fetching data inside the ```App.js``` using fetch() and passing them as prop.
6. Inside ```App.js``` adding a state filter and storing this state inside the localstorage and passing this also a prop.
7. Now Adding some style to Header and Board.
8. Making three more components inside new folder ```Grouping``` i.e. grouping by status , priority , users.
9. Now making the UI responsive by using media queries.
10. Making the sorting feature now.
