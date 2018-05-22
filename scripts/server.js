const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxy = require('http-proxy-middleware');

const config = require('../config/webpack.config');

const app = express();
const compiler = webpack(config);
const APP_DIR = path.resolve(__dirname, '../src');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

function log(msg, ...args) {
    console.log(`\nWebpack:  ${msg}`, ...args);
}

app.use(webpackHotMiddleware(compiler));

app.use(express.static(APP_DIR + '/static'));

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

app.use('/api', proxy({
    target: 'http://localhost:8080',
    pathRewrite: {
        '^/api/': '/'
    }
}));

app.use('*', (req, res) => {
    const filename = path.join(compiler.outputPath, '/index.html');

    compiler.outputFileSystem.readFile(filename, (err, result) => {
        res.set('content-type', 'text/html');

        if (err) {
            res.send(`<meta http-equiv="refresh" content="1">
        <center style="line-height: 100vh;">Hold your horses! Still bundling the files…</center>`);
        } else {
            res.send(result);
        }

        res.end();
    });
});

app.listen(port, host, (err) => {
    if (err) {
        log(err);
        return;
    }

    log('🚧  App is listening at http://%s:%s', host, port);
});
