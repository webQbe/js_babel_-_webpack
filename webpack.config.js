const path = require('path');

module.exports = {

    //define entry point
    entry: {

        // Source file with new JS features
        app: './src/app.js' 

    },

    output:{ // compiled down to ES5

        path: path.resolve(__dirname, 'build'),  // Output folder

        filename: 'app.bundle.js', // Bundled output file to be included in HTML

        publicPath: '/build/',

    },

    mode: 'development', 

    devServer: {
        static: {
          directory: path.join(__dirname, './'),
        },
        hot: true, // Enable Hot Module Replacement
        open: true, // Automatically open the browser
        compress: true,
        port: 8080,
      },

    // Babel Module
    module: {  
        
        rules: [{

            test: /\.js?$/, // Apply regex rule to .js files

            exclude: /node_modules/,

            use: {

                    loader: 'babel-loader', // Use babel-loader to transpile

                    options: {

                        presets: ['@babel/preset-env'] // use @babel/preset-env
                    }
            }
            
        }]

    }


}