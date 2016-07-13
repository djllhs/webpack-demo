/**
 * Created by 代佳玲 on 2016/7/13.
 */
/*使用AMD机制*/
define(["./module2.js"],function(sum){
    return console.log("1+2="+sum(1,2));
})