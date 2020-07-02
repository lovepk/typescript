const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 注意 __dirname 是当前文件所在的目录, 不是项目根目录哦
const htmlPlug = new HtmlWebpackPlugin({
    template: path.join(__dirname, '../src/index.html'),
    filename: 'index.html'
})
module.exports = {
    // entry: './src/index.ts',  // 和下面等价的
    entry: path.join(__dirname, '../src/index.ts'),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        htmlPlug,
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [
                    { loader: 'ts-loader'}
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
}