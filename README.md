# Descriptions:
This is a simple search box to lookup NFL player with the current season.

For more information of the API go to:
    [https://developer.fantasydata.com/docs/services/57a01ec514338d17388660cb/operations/57a01ec514338d0a985480e7?](https://developer.fantasydata.com/docs/services/57a01ec514338d17388660cb/operations/57a01ec514338d0a985480e7?)

## Project Structure

```
.
├── build                    # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
│   └── index.html           # Main HTML page container for app
├── src                      # Application source code
│   ├── index.js             # Application main file for React and Redux configurations/integrations
│   ├── App.js               # Application bootstrap and rendering Routes
│   ├── Layouts              # Components that dictate and encapsulated major page structure
│   │   ├── index.js         # Main file of layout that will automatically exported
│   │   ├── components       # Layout encapsulated Components
│   │   └── module           # Layout encapsulated Redux actions, constants, and reducers
│   ├── store                # Redux-specific pieces
│   │   └── reducers.js      # Reducer registry and injection
|   └── module               # Share functions and components to be use anymore
|       ├── module           # Share module
|       └── components       # Share components
└── tests                    # Unit tests
```

## Installations
```bash
$ npm install
```

```bash
$ npm run start
```

## License

[MIT](https://tldrlegal.com/license/mit-license)