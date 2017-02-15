const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config  = require('./webpack.config');

const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const compiler = webpack(config);

const dashboard = new Dashboard();
compiler.apply(new DashboardPlugin(dashboard.setData));

const server = new WebpackDevServer(compiler, {
        quiet: true,
        hot: true,
        publicPath: config.output.publicPath,
        stats: {
            colors: true,
        },
        historyApiFallback:  {
            index: config.output.path
      },
});

server.listen(8080, 'localhost', function (err, result) {
    if(err) {
        return console.log(err);
    }
    console.log('listening at httpL://localhost:8080/')
});