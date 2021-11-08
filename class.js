class Fruit{
    constructor(name){
        this.name=name;
    }
    fol(){
        console.log(this.name+' Is too much tasty');
    }

    static jackfruite(){
        console.log('Jackfruit is very popular');
    }
}
let add = new Fruit('Mango');
add.fol();

Fruit.jackfruite();