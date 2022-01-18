class Basket {
    constructor(capacity){
        this.items = []
        this.capacity = capacity
    }

    add(item){
        if( this.items.length < this.capacity){
            this.items.push(item)
        } else {
            return 'Error: Basket is full'
        }
    }

    remove(item){
        for (let i = 0; i < this.items.length; i++){
            if( this.items[i] === item){
                this.items.splice(i, 1)
            }
        }
    }


}

let basket = new Basket();
basket.add('bagel');

console.log(basket.items)

module.exports = Basket;