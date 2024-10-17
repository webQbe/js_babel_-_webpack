const path = require('path');

module.exports = {

    //define entry points
    entry: {

        // specify source file (entry point to app)
        app: './src/app.js' // contains new JS features
    },

    output:{ // compiled down to ES5

        // build/app.bundle.js output location
        path: path.resolve(__dirname, 'build'), 
        filename: 'app.bundle.js' // file to be included in HTML

    },

    module: {
            // babel loader module
        loaders: [{

            test: /\.js?$/, // regex
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {

                presets: ['env']

            }

        }]

    }


}