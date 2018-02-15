const {Asset} = require ('parcel-bundler');
const Handlebars = require('handlebars');

class HBSAsset extends Asset {

    constructor(...props) {
        super(...props);
        this.type = 'js';
    }

    parse(code) {
        this.contents = `module.exports = function(data) { return Handlebars.template(${Handlebars.precompile(code)})(data); };`;
        return super.parse(this.contents);
    }

}

module.exports = HBSAsset;