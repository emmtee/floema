const {merge} = require('webpack-merge')
const path = require('path')

const config = require('./webpack.config')

module.exports = merge(config, {
    mode: 'development',


    devtool: 'inline-source-map',

    devServer:{
        writeToDisk: true
    },

    output: {
        path: path.resolve(__dirname, 'public')
    }

})

// Here's a line-by-line explanation of the code you provided:

// 1. `const {merge} = require('webpack-merge')`: This line imports the `merge` function from the `webpack-merge` module. This function is used to merge two configuration objects.
// 2. `const path = require('path')`: This line imports the `path` module, which provides functions for working with file paths.
// 3. `const config = require('./webpack.config')`: This line imports the `webpack.config` file, which contains the default configuration for the Webpack build.
// 4. `module.exports = merge(config, {...})`: This line defines the export of the configuration object, which is created by merging the default configuration with the additional configuration provided in the curly braces.
// 5. `node: 'development'`: This line sets the `node` field of the configuration object to `'development'`, which tells Webpack to use the development configuration.
// 6. `devtool: 'inline-source-map'`: This line sets the `devtool` field of the configuration object to `'inline-source-map'`, which enables source maps for the development build.
// 7. `devServer: {...}`: This line defines the `devServer` field of the configuration object, which contains additional configuration for the development server.
// 8. `writeToDisk: true`: This line sets the `writeToDisk` field of the `devServer` object to `true`, which tells Webpack to write the source maps to disk.
// 9. `output: {...}`: This line defines the `output` field of the configuration object, which contains additional configuration for the output of the build.
// 10. `path: path.resolve(__dirname, 'public')`: This line sets the `path` field of the `output` object to the resolved path of the `public` directory, which is the directory where the built assets will be output.

// In summary, this code defines a Webpack configuration object that merges the default configuration with additional configuration for the development build, including source maps and output to the `public` directory