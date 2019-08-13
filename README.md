# COMPONENTS LIBRARY

Personal components library that I am creating for learning purposes. The
code is organized on a monorepo created with [Lerna](https://lerna.js.org/) and the components are hosted in [my own space](https://bit.dev/a13marquez) of [bit](https://bit.dev/)

At this moment there is only a few components created with [Styled Components](https://www.styled-components.com/) and [React](https://reactjs.org). In the future more components will be added.

## How to run it?

To run the project after cloning it only is necessary to have Node and NPM 5.2+ which includes NPX and run the following command:

``` bash
npm run bootstrap
```

This will install all required dependencies.

## Development

All the development is done inside the packages folder. It contains
several folders inside that have the components.

## Testing

The testing framework included in the project is [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) for the React components. Use
the following command

``` bash
npm run test
```

## Deployment

The deployment to bit enviroment needs two steps, first one is to tag the 
components that have changed with the following command:

```bash
bit tag --all
```

After that the components can be exported to the bit environment:

```bash
bit export a13marquez.react-components
```

Each group of components will have its own namespace, in this case react-components.
More namespaces will be added when the components are created.
