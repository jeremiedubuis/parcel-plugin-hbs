# Parcel plugin for handlebars templates

## Installation

Parcel automatically uses packages that start with parcel-plugin, you just need to add the package to your repo.

```
yarn add parcel-plugin-hbs --dev 
```
Or
```
npm i parcel-plugin-hbs --save-dev
```

## Usage

The bundler exports a function to render the template using Handlebars.template().

```javascript
import Handlebars from 'handlebars/runtime';
import myTemplate from './myTemplate.hbs';
const data = {
    title: 'Title'
};
document.body.innerHTML = myTemplate(data);
```