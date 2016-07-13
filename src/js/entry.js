/**
 * Created by 代佳玲 on 2016/7/6.
 */
//require("!style!css./style.css");
//require("!style!css!./style.css");
//require("./style.css");//绑定加载器

/*写法一*/
require("../css/style.css");

require("./content.js");
let People=require("./module-es6.js");
let p=new People("dada");
p.sayHi();
///*写法二*/
//require("./content.js")();
