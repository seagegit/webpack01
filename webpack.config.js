const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/app.js', './src/sub.js'],
    output: {
        path: path.resolve(__dirname, 'public') ,
        filename: 'bundle.js'
    }
}