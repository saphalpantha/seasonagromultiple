import { useState, useEffect, useContext } from "react";
import CartContext from "../../context/cartContext";
import CartItem from "../Cart/CartItem";

let form = null;

export default function Main() {

    const ctx  = useContext(CartContext);

  const [params, setParams] = useState({
    amt: ctx.totalAmount,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: ctx.totalAmount,
    pid:0,
    scd: 'EPAYTEST',
    su: 'https://localhost:3000/',
    fu: 'https://localhost:3000/contact',
  });


  const khaltiPaymentIntent = {
    return_url:"https://localhost:3000",
    website_url:"https://localhost:3000",
    amount:ctx.totalAmount,
    purchase_order_id: "test123",
    purchase_order_name: "honey",
  }

  useEffect(() => {
    post();
  });




  const handleKhaltiSubmit = () =>  {

    fetch('https://a.khalti.com/api/v2/initiate', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(khaltiPaymentIntent),
      
    }).then(res => res.json()).then(msg => console.log(msg)).catch(err => console.log(err))
  }



















  const post = () => {
    form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "https://uat.esewa.com.np/epay/main");
    // form.setAttribute("action", "https://esewa.com.np/epay/main");
    
    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    // form.submit();
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <div className="flex flex-row h-[100vh] font-light">

        <div className="bg-white shadow-2xl h-[90vh] overflow-scroll rounded-3xl mt-5">
            {ctx.items.map(item => {
                return(
                    <div className="flex flex-col space-y-12 p-5">
                    <CartItem key={item.id} imgUrl={item.imgUrl} id={item.id} title={item.title} price={item.price} qty={item.qty} description={item.description}  />
                        </div>
                )
            })}
        </div>
        {ctx.items.length >= 1  ?  <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-[20rem] h-[5rem]" type="submit">
          Pay with eSewa
        </button>  : <span className="text-4xl text-orange-400 text-center mx-auto">No Items to Check out</span>}
        {ctx.items.length >= 1  ?  <button onClick={handleKhaltiSubmit} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-[20rem] h-[5rem]" type="submit">
          Pay with Khalti
        </button>  : <span className="text-4xl text-orange-400 text-center mx-auto">No Items to Check out</span>}
    
    </div>
  );
}
