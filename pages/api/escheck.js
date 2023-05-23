export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  
    // Handle POST request
    if (req.method === 'POST') {
      const data = req.body;
      console.log(data);
  
      const price = data.amt;
      const title = data.hello;
      const paymentIntent = {
        amt: 200,
        psc: 0,
        pdc: 0,
        txAmt: 0,
        tAmt: 200,
        scd: 'EPAYTEST',
        su: 'https://localhost:3000/',
        fu: 'https://localhost:3000/contact',
      };
  
      const formData = new FormData();
      for (const key in paymentIntent) {
        formData.append(key, paymentIntent[key]);
      }
  
      fetch('https://uat.esewa.com.np', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          return res.status(200).json({ msg: data });
        })
        .catch((err) => {
            console.log(err)
          return res.status(405).json({ msg: err });
        });
    }
  }
  