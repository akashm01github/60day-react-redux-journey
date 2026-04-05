const cors = require('cors');
const express = require("express");

const app = express();
app.use(cors());


const carts = {
  1: {
    id: 1,
    userId: 1,
    date: "2020-01-15T00:00:00.000Z",
    products: [
      { productId: 1, quantity: 2 },
      { productId: 3, quantity: 1 }
    ],
    __v: 0
  },
  2: {
    id: 2,
    userId: 2,
    date: "2020-02-10T00:00:00.000Z",
    products: [
      { productId: 4, quantity: 3 },
      { productId: 5, quantity: 1 }
    ],
    __v: 0
  },
  3: {
    id: 3,
    userId: 1,
    date: "2020-02-20T00:00:00.000Z",
    products: [
      { productId: 2, quantity: 1 },
      { productId: 6, quantity: 2 },
      { productId: 9, quantity: 1 }
    ],
    __v: 0
  },
  4: {
    id: 4,
    userId: 4,
    date: "2020-02-25T00:00:00.000Z",
    products: [
      { productId: 10, quantity: 4 },
      { productId: 11, quantity: 2 }
    ],
    __v: 0
  },
  5: {
    id: 5,
    userId: 3,
    date: "2020-03-01T00:00:00.000Z",
    products: [
      { productId: 7, quantity: 1 },
      { productId: 8, quantity: 1 }
    ],
    __v: 0
  },
  6: {
    id: 6,
    userId: 5,
    date: "2020-03-05T00:00:00.000Z",
    products: [
      { productId: 12, quantity: 2 },
      { productId: 13, quantity: 3 }
    ],
    __v: 0
  },
  7: {
    id: 7,
    userId: 6,
    date: "2020-03-10T00:00:00.000Z",
    products: [
      { productId: 14, quantity: 1 },
      { productId: 15, quantity: 5 }
    ],
    __v: 0
  },
  8: {
    id: 8,
    userId: 2,
    date: "2020-03-15T00:00:00.000Z",
    products: [
      { productId: 16, quantity: 2 },
      { productId: 17, quantity: 1 },
      { productId: 18, quantity: 3 }
    ],
    __v: 0
  },
  9: {
    id: 9,
    userId: 7,
    date: "2020-03-20T00:00:00.000Z",
    products: [
      { productId: 19, quantity: 4 },
      { productId: 20, quantity: 2 }
    ],
    __v: 0
  },
  10: {
    id: 10,
    userId: 8,
    date: "2020-03-25T00:00:00.000Z",
    products: [
      { productId: 1, quantity: 1 },
      { productId: 5, quantity: 2 },
      { productId: 9, quantity: 1 }
    ],
    __v: 0
  },
  11: {
    id: 11,
    userId: 9,
    date: "2020-04-01T00:00:00.000Z",
    products: [
      { productId: 2, quantity: 2 },
      { productId: 6, quantity: 1 }
    ],
    __v: 0
  },
  12: {
    id: 12,
    userId: 3,
    date: "2020-04-05T00:00:00.000Z",
    products: [
      { productId: 7, quantity: 3 },
      { productId: 8, quantity: 2 }
    ],
    __v: 0
  },
  13: {
    id: 13,
    userId: 4,
    date: "2020-04-10T00:00:00.000Z",
    products: [
      { productId: 10, quantity: 1 },
      { productId: 11, quantity: 1 }
    ],
    __v: 0
  },
  14: {
    id: 14,
    userId: 6,
    date: "2020-04-15T00:00:00.000Z",
    products: [
      { productId: 14, quantity: 2 },
      { productId: 15, quantity: 1 }
    ],
    __v: 0
  },
  15: {
    id: 15,
    userId: 7,
    date: "2020-04-20T00:00:00.000Z",
    products: [
      { productId: 19, quantity: 1 },
      { productId: 20, quantity: 2 }
    ],
    __v: 0
  },
  16: {
    id: 16,
    userId: 2,
    date: "2020-04-25T00:00:00.000Z",
    products: [
      { productId: 16, quantity: 4 },
      { productId: 18, quantity: 2 }
    ],
    __v: 0
  },
  17: {
    id: 17,
    userId: 1,
    date: "2020-05-01T00:00:00.000Z",
    products: [
      { productId: 3, quantity: 2 },
      { productId: 9, quantity: 1 }
    ],
    __v: 0
  },
  18: {
    id: 18,
    userId: 5,
    date: "2020-05-05T00:00:00.000Z",
    products: [
      { productId: 12, quantity: 1 },
      { productId: 13, quantity: 2 }
    ],
    __v: 0
  },
  19: {
    id: 19,
    userId: 8,
    date: "2020-05-10T00:00:00.000Z",
    products: [
      { productId: 1, quantity: 3 },
      { productId: 5, quantity: 1 }
    ],
    __v: 0
  },
  20: {
    id: 20,
    userId: 10,
    date: "2020-05-15T00:00:00.000Z",
    products: [
      { productId: 4, quantity: 2 },
      { productId: 6, quantity: 3 }
    ],
    __v: 0
  }
};


app.get('/cart/:id',(req,res)=>{
    const id = req.params.id
    const cartItems = carts[id];

    res.send(cartItems)
})


app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});