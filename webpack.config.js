/**
 * Created by ������ on 2016/7/6.
 */
var path=require("path");
module.exports={
    entry:"./src/js/entry.js",//����ļ�
    output:{
        path:path.join(__dirname,"out"),//��������·��
        filename:"bundle.js"//����������
        //library:"bundle",
        //libraryTarget:"amd"
        //publicPath:"./"//html����·���������Ǳ���·��
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:"style!css"
            }
        ]
    },
    watch:true//�Զ�����ļ��仯�����Զ����
}