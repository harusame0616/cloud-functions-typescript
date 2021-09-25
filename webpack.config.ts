import * as path from 'path';
import webpack from 'webpack';
import  nodeExternals from 'webpack-node-externals';

export const config: webpack.Configuration = {
    mode: 'development',
    target: 'node',
    externals:[nodeExternals()],
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: __dirname,
        filename: 'index.js',
        library: {
            // module.export = 形式で出力
            type: 'commonjs2',
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: '/node_modules'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}

const isMode = (mode: any): mode is 'production' | 'development' | 'none' =>
    ['production', 'development', 'none'].includes(mode);


if (isMode(process.env.NODE_ENV)) {
    config.mode = process.env.NODE_ENV;
}

export default config;
