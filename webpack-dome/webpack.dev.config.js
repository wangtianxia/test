/**
 * Created by web on 2018/1/31.
 */
var htmlWebpackPlugin = require('html-webpack-plugin'); //自动插入html的插件
var path = require('path');  //
module.exports = {
    // entry:['./src/script/main.js','./src/script/a.js'],
    entry:{
       "main":"./src/script/main.js",
        "a":"./src/script/a.js"
    },
    output:{  //必须为项目或硬盘的绝对路径
        // path:path.resolve(__dirname,'dist/js'), // 设置绝对路径
        path: __dirname+'/dist/js',
        // filename:'bundle.js'
        filename:'[name].js' //对象中有两个值的情况
    },
     plugins:[
         new htmlWebpackPlugin()
     ]
}