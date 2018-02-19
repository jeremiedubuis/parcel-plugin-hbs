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

## Configuration

.parcelrc file is supported to change Handlebars instance name (to avoid conflicts), in this example
we will replace all calls to Handlebars.template by Handlebars2.template

```json
{
    "hbs": {
        "instanceName": "Handlebars2"
    }
}
```