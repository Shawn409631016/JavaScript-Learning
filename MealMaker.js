const menu = {
    _meal: '',
    _price: 0,
  
    set meal (mealToCheck) {
      if(typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
      }
    },
  
    set price (priceToCheck) {
      if(typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
      }
    },
  
    get todaysSpecial () {
      if(this._meal){
        console.log(`Today's Special is ${this._meal} for \$${this._price}!`);
      }else{
        console.log('Meal or price was not set correctly!');
      }
    },
  
  };
  
  menu.meal = 'burger';
  menu.price = 10;
  menu.todaysSpecial;