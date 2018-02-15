module.exports = (bundler) => {
    bundler.addAssetType('hbs', require.resolve('./asset.js'));
    bundler.addAssetType('handlebars', require.resolve('./asset.js'));
};