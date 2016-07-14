/**
 * Created by ������ on 2016/7/6.
 */
var path=require("path");
module.exports={
    entry:"./src/js/entry.js",//����ļ�
    output:{
        path:path.join(__dirname,"out"),//��������·��
        filename:"bundle.js",//����������
        //library:"bundle",
        //libraryTarget:"amd"
        publicPath:"./out/"//html����·���������Ǳ���·��
    },
    module:{
        loaders:[
            { test:/\.css$/, loader:"style!css"},
            { test:/\.js$/, loader:"babel"},
            { test:/\.(jpg|png)$/, loader:"url?limit=8192"},
            { test:/\.scss$/, loader:"style!css!sass"},

        ]
    },
    watch:true//�Զ�����ļ��仯�����Զ����
}