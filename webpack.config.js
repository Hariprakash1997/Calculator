const path = require('path');
let appConfig = require('./appConfig.js');
var config = {
   entry: './src/index.js', // entry point
   mode: 'development',
   output: {
        path: '/',
        filename: 'bundle.js',       
    },
   devServer: {
         inline: true, // autorefresh
         port: appConfig.appconfig.appPort, // development port server
         headers: {
            'Access-Control-Allow-Origin': '*'
        }                    
      },
   module: {
         rules: [
            {
               test: /\.jsx?$/, // search for js files 
               exclude: /node_modules/,
               loader: 'babel-loader',
            query: {
                presets: ['es2016', 'react'], // use es2015 and react
                plugins: [ "babel-plugin-transform-class-properties"],
            }
         },
         { test: /\.css$/, loader: "css-loader" },
         {
            test: /\.scss$/,
            loader: 'style!css!sass?outputStyle=expanded&' + 'includePaths[]=' +
                      (path.resolve(__dirname, './node_modules'))
          },
          { 
              test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
              loader: 'url-loader?limit=100000' },
        {
            test: /\.(ttf|eot|svg|gif|mp3)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?prefix=images/&name=[path][name].[ext]',
        },    
      ]
   }   
}
module.exports = config;