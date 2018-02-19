const {Asset} = require ('parcel-bundler');
const Handlebars = require('handlebars');
const fs = require('fs');

class HBSAsset extends Asset {

    constructor(...props) {
        super(...props);
        this.type = 'js';
    }

    /**
     * If .parcelrc exists in project then parse file to check if
     * hbs instanceName was overridden
     */
    async getConfig() {
        const exists  = await fs.existsSync(__dirname + '/../../.parcelrc');
        if (exists) {
            let data = await fs.readFileSync(__dirname + '/../../.parcelrc', 'utf8');
            data = JSON.parse(data);
            if (data.hbs) return data.hbs;
        }
        return {
            instanceName: 'Handlebars'
        };
    }

    async load() {
        const config = await this.getConfig();
        this.instanceName = config.instanceName;
        return await super.load();
    }

    parse(code) {
        this.contents = `module.exports = function(data) { return ${ this.instanceName }.template(${Handlebars.precompile(code)})(data); };`;
        return super.parse(this.contents);
    }

}

module.exports = HBSAsset;