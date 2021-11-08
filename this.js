const Mango = {
    color:"RED",
    price:120,
    weight:25,
    about:function(){
        return `this mangoo Color is ${this.color}`
    }
}
console.log(Mango.about());