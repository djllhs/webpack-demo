/**
 * Created by 代佳玲 on 2016/7/13.
 */
class People{
    constructor(name){
        this.name=name;
    }
    sayHi(){
        console.log(`hi ${this.name} !`);
    }
}
module.exports = People;