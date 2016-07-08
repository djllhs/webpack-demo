/**
 * Created by ´ú¼ÑÁá on 2016/7/6.
 */
module.exports={
    entry:"./entry.js",
    output:{
        //path:__dirname,
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:"style!css"}
        ]
    }
}