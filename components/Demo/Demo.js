import React, { useEffect, useState } from 'react'

const Demo = () => {
    const [users, setUsers] = useState([]);
    useEffect(
     () => {
              getData()  
     },[]
    ) 
    const getData =  async( ) => {
        
        try{

            const res = await fetch("https://reqres.in/api/users")
            const allData = await res.json();
            console.log(allData.data)
            setUsers(allData.data)
        }
        catch(er){
            // close.length(er)
        }
        console.log(users)
        
    }
   return (
    <div style={{backgroundColor:'black' , color:'wheat'}}>
        
            {/* Get Dta */}
        <div>
            {users.map(item => {
                return(
                    <div style={{backgroundColor:'black' , color:'white'}}>
                        <h1>{item.email}</h1>
                        <h1>{item.first_name}</h1>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Demo



/* 
Array(6) [ {…}, {…}, {…}, {…}, {…}, {…} ]
​
0: Object { id: 1, email: "george.bluth@reqres.in", first_name: "George", … }
​
1: Object { id: 2, email: "janet.weaver@reqres.in", first_name: "Janet", … }
​
2: Object { id: 3, email: "emma.wong@reqres.in", first_name: "Emma", … }
​
3: Object { id: 4, email: "eve.holt@reqres.in", first_name: "Eve", … }
​
4: Object { id: 5, email: "charles.morris@reqres.in", first_name: "Charles", … }
​
5: Object { id: 6, email: "tracey.ramos@reqres.in", first_name: "Tracey", … }
​
length: 6


*/