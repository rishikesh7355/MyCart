import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'
import React,{useState} from 'react';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
function App() {
  const products = [
    {
      price: 99999,
      name: "iPhone 10S max",
      quantity: 0
    },
    {
      price: 9999,
      name: "Mi 10S max",
      quantity: 0
    },
  ]
let [productList,setProductList] = useState(products)
let [totalAmount, setTotalAmount] = useState(0);

const incrementQuantity = (index) => {
  let newProductList = [...productList];
  newProductList[index].quantity++
  let newTotalAmount = totalAmount
  newTotalAmount += newProductList[index].price
  setTotalAmount(newTotalAmount);
  setProductList(newProductList);
}
const decrementQuantity = (index) => {
  //state cannot be changed directly
  //so cloning it into new variable using spread operator 
  let newProductList = [...productList];
  let newTotalAmount = totalAmount
  if (newProductList[index].quantity>0){
     newProductList[index].quantity-- ; 
     newTotalAmount -= newProductList[index].price
  }
  setTotalAmount(newTotalAmount);
  setProductList(newProductList);
};

const resetQuantity =() =>{
  let newProductList = [...productList];
  newProductList.map((products)=>{
    return products.quantity=0
  })
setProductList(newProductList);
setTotalAmount(0)
}

const removeItem = (index) => {
  let newProductList = [...productList]
  let newTotalAmount  = totalAmount;
  newTotalAmount -= newProductList[index].quantity * newProductList[index].price
  newProductList.splice(index,1);
  setProductList(newProductList);
  setTotalAmount(newTotalAmount)
};
const addItem = (name,price )=>{
  let newProductList=[...productList];
  newProductList.push({
  price:price,
  name:name,
  quantity:0
  })
  setProductList(newProductList)
}

  return (
   <>
   <div className='container'>
     <Navbar/>
     <AddItem addItem={addItem}/>
     <ProductList 
     productList={productList} 
     incrementQuantity={incrementQuantity}
     decrementQuantity={decrementQuantity}
     removeItem={removeItem}
     />

     <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
     </div>
   </> 
  )
}

export default App;
