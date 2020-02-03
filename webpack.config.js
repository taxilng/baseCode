const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                },
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './LadderDiagram/mobile.html',
            hash: true,
            minify: {
                // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true // 压缩内联css
            }
        })
    ]
}
