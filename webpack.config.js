/**
 * Created by 代佳玲 on 2016/7/6.
 */
var path=require("path");
module.exports={
    entry:"./src/js/entry.js",//入口文件
    output:{
        path:path.join(__dirname,"out"),//打包输出的路径
        filename:"bundle.js",//打包后的名字
        //library:"bundle",
        //libraryTarget:"amd"
        publicPath:"./out/"//html引用路径，这里是本地路径
    },
    module:{
        loaders:[
            { test:/\.css$/, loader:"style!css"},
            { test:/\.js$/, loader:"babel"},
            { test:/\.(jpg|png)$/, loader:"url?limit=8192"},
            { test:/\.scss$/, loader:"style!css!sass"},

        ]
    },
    watch:true//自动检测文件变化并且自动打包
}