import Cookies from "js-cookie";

// get items useing cookies;
const getCartItems=()=>{
    const cartItems=Cookies.get('cartItems');
    return cartItems?JSON.parse(cartItems):[];
}


//store in cookies all add items;
//cookies data store in the from of string .cookies do not store data in the form of array,JSON form.
const setCartItems=(cartItems)=>{
    Cookies.set('cartItems',JSON.stringify(cartItems));
}


const addToCart=(product,quantity)=>{
  const cartItems=getCartItems();
//   Single product ki id check ki hai ya nahi
  const existingItem=cartItems.find((item)=>item.id===product.id);
  if(existingItem){
    //exist hai tho quantity increase;
    existingItem.qty+=quantity;
  }else{
    //new product add 
    cartItems.push({id:product?.id,title:product?.title,price:product?.price,image:product?.thumbnail,qty:quantity})
  }
  //call the function
  setCartItems(cartItems);
}


const removeItemsFromCart=(productId)=>{
    const cartItems=getCartItems().filter((item)=>item.id !==productId);
    setCartItems(cartItems);
}

const updateCartItems=(productId,quantity)=>{
    
  const cartItems=getCartItems().map((item)=>{
    if(item.id===productId){
      return {...item,qty:quantity}
    }else{
      return item
    }
  });
  setCartItems(cartItems);
   
};

export{getCartItems,addToCart,removeItemsFromCart,updateCartItems}


