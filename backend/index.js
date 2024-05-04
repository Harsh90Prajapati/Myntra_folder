const express = require('express');
const bodyParser = require('body-parser');

const { getStoredItems, storeItems } = require('./data/items.js');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/',(req,res)=>{
  res.send("running")
})

app.get('/items',(req,res)=>{
  res.json({
    "items": [
      [
        {
          "id": "001",
          "image": "img/products/n1.jpg",
          "company": "Carlton London",
          "item_name": "Rhodium-Plated CZ Floral Studs",
          "original_price": 1045,
          "current_price": 606,
          "discount_percentage": 42,
          "return_period": 14,
          "delivery_date": "10 Oct 2023",
          "rating": { "stars": 4.5, "count": 1400 }
        },
        {
          "id": "002",
          "image": "img/products/n2.jpg",
          "company": "CUKOO",
          "item_name": "Women Padded Halter Neck Swimming Dress",
          "original_price": 2599,
          "current_price": 1507,
          "discount_percentage": 42,
          "return_period": 14,
          "delivery_date": "10 Oct 2023",
          "rating": { "stars": 4.3, "count": 24 }
        },
        {
          "id": "003",
          "image": "img/products/n3.jpg",
          "company": "NUEVOSDAMAS",
          "item_name": "Women Red & White Printed A-Line Knee-Length Skirts",
          "original_price": 1599,
          "current_price": 495,
          "discount_percentage": 69,
          "return_period": 14,
          "delivery_date": "10 Oct 2023",
          "rating": { "stars": 4.1, "count": 249 }
        },
        {
          "id": "004",
          "image": "img/products/n4.jpg",
          "company": "ADIDAS",
          "item_name": "Indian Cricket ODI Jersey",
          "original_price": 999,
          "current_price": 999,
          "discount_percentage": 0,
          "return_period": 14,
          "delivery_date": "10 Oct 2023",
          "rating": { "stars": 5, "count": 10 }
        },
        {
          "id": "005",
          "image": "img/products/n5.jpg",
          "company": "Roadster",
          "item_name": "Pure Cotton T-shirt",
          "original_price": 1399,
          "current_price": 489,
          "discount_percentage": 65,
          "return_period": 14,
          "delivery_date": "10 Oct 2023",
          "rating": { "stars": 4.2, "count": 3500 }
        },
        {
          "id": "006",
          "image": "img/products/n6.jpg",
          "company": "Nike",
          "item_name": "Men ReactX Running Shoes",
          "original_price": 14995,
          "current_price": 14995,
          "discount_percentage": 0,
          "return_period": 14,
          "delivery_date": "10 Oct 2023",
          "rating": { "stars": 0, "count": 0 }
        },
        {
          "id": "007",
          "image": "img/products/n7.jpg",
          "company": "The Indian Garage Co",
          "item_name": "Men Slim Fit Regular Shorts",
          "original_price": 1599,
          "current_price": 639,
          "discount_percentage": 60,
          "rating": { "stars": 4.2, "count": 388 }
        },
        {
          "id": "008",
          "image": "img/products/n8.jpg",
          "company": "Nivea",
          "item_name": "Men Fresh Deodrant 150ml",
          "original_price": 285,
          "current_price": 142,
          "discount_percentage": 50,
          "return_period": 14,
          "delivery_date": "10 Oct 2023",
          "rating": { "stars": 4.2, "count": 5200 }
        }
      ]
    ]
  })
})

// app.get('/items', async (req, res) => {
//   const storedItems = await getStoredItems();
//   await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
//   res.json({ items: storedItems });
// });

app.get('/items/:id', async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
});

app.listen(8080,()=>console.log('server is running 8080'));