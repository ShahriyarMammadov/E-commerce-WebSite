const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
const port = 8000;

let featured = [
  {
    id: 1,
    productBrand: "Sarah Bell",
    ProductName: "Mascara Voluminous",
    Price: 652.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/27-550x550.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/28-550x550.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/muller-550x550.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/15-550x550.jpg",
    },
  },
  {
    id: 2,
    productBrand: "Chic D'or",
    ProductName: "Liquid Lipstick",
    Price: 321.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/26-550x550.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/powder-550x550.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/powder-550x550.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/6-550x550.jpg",
    },
  },
  {
    id: 3,
    productBrand: "Sarah Bloom",
    ProductName: "Powder Brush",
    Price: 579.0,
    gift: "true",
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/brush-550x550.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/brush-case-550x550.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/set3-550x550.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/set6-550x550.jpg",
    },
  },
  {
    id: 4,
    productBrand: "Sarah Bell",
    ProductName: "Body Scrub",
    Price: 165.0,
    gift: 72,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/14-550x550.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/11-550x550.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/15-550x550.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/8-550x550.jpg",
    },
  },
  {
    id: 5,
    productBrand: "Sarah Bell",
    ProductName: "Hydrating Face Cream",
    Price: 248.0,
    gift: "HOT",
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/5-550x550.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/4-550x550.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/1-550x550.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/20-550x550.jpg",
    },
  },
];

let bestSellers = [
  {
    id: 1,
    productBrand: "Sarah Bell",
    ProductName: "Scrub Gift Set",
    Price: 809.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/basket3-550x550.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/set2-550x550.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/31-550x550.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/basket5-550x550.jpg",
    },
  },
  {
    id: 2,
    productBrand: "Chic D'or",
    ProductName: "Liquid Liqstick",
    Price: 321.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/26-550x550.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/34-550x550.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/home/armchair/additional/2-550x550.png",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/home/armchair/additional/3-550x550.png",
    },
  },
  {
    id: 3,
    productBrand: "Scandinavian Sunglasses",
    ProductName: "Oversized Sunglasses for Long Summer Day",
    Price: 3680.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/sunglasses/glasses3-550x550.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/sunglasses/glasses2-550x550.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/sunglasses/glasses-case-550x550.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/sunglasses/glasses1-550x550.jpg",
    },
  },
  {
    id: 4,
    productBrand: "Apple",
    ProductName: "Apple Cinema 30",
    Price: 90.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/demo/apple_cinema_30-550x550w.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/demo/canon_eos_5d_1-550x550w.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/demo/hp_1-550x550w.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/demo/canon_eos_5d_2-550x550w.jpg",
    },
  },
];

let newArrivals = [
  {
    id: 1,
    productBrand: "Sarah Bloom",
    ProductName: "Yellow Modern Armchair",
    Price: 3680.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/home/armchair/9-550x550.png",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/home/armchair/additional/8-550x550.png",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/home/armchair/additional/qq-550x550.png",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/home/armchair/10-550x550.png",
    },
  },
  {
    id: 2,
    productBrand: "Fort Cane",
    ProductName: "Modern Cane",
    Price: 3680.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/home/armchair/4-550x550.png",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/home/armchair/additional/6-550x550.png",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/home/armchair/additional/2-550x550.png",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/home/armchair/additional/3-550x550.png",
    },
  },
  {
    id: 3,
    productBrand: "Ericksson",
    ProductName: "Lazy Armchair",
    Price: 3680.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/home/armchair/additional/qq-550x550.png",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/brush-case-550x550.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/set3-550x550.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/set6-550x550.jpg",
    },
  },
  {
    id: 4,
    productBrand: "Sarah Bell",
    ProductName: "Gray Armchair",
    Price: 680.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/home/armchair/1-550x550.png",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/brush-case-550x550.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/set3-550x550.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/set6-550x550.jpg",
    },
  },
];

let specialDelas = [
  {
    id: 1,
    productBrand: "Ericksson",
    ProductName: "Headphones",
    Price: 999.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-550x550.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/electronics/additional/apple-rose-550x550.png",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/electronics/camera-550x550.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/electronics/beolab-19-by-bang-olufsen-550x550.jpg",
    },
  },
  {
    id: 2,
    productBrand: "Apple",
    ProductName: "Apple Cinema 30",
    Price: 90.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/demo/apple_cinema_30-550x550w.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/demo/canon_eos_5d_1-550x550w.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/demo/hp_1-550x550w.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/demo/canon_eos_5d_2-550x550w.jpg",
    },
  },
  {
    id: 3,
    productBrand: "Olivia Smith",
    ProductName: "Body Oil",
    Price: 100.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/2-550x550.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/8-550x550.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/18-550x550.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/3-550x550.jpg",
    },
  },
  {
    id: 4,
    productBrand: "Chic D'or",
    ProductName: "Eau de Parfum",
    Price: 200.0,
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/33-550x550.jpg",
      b: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/4-550x550.jpg",
      c: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/31-550x550.jpg",
      d: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/3-550x550.jpg",
    },
  },
];

let category = [
  {
    id: 1,
    categories: "Accessories",
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/14-200x240h.jpg",
    },
  },
  {
    id: 2,
    categories: "Body",
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/25-200x240h.jpg",
    },
  },
  {
    id: 3,
    categories: "Lipstick",
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/additional/brush-case-200x240h.jpg",
    },
  },
  {
    id: 4,
    categories: "Makeup",
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/28-200x240h.jpg",
    },
  },
  {
    id: 5,
    categories: "Mascara",
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/basket4-200x240h.jpg",
    },
  },
  {
    id: 6,
    categories: "Spa",
    image: {
      a: "https://www.journal-theme.com/11/image/cache/catalog/journal3/products/beauty/set6-200x240h.jpg",
    },
  },
];

let idCounter = 105;

app.get("/featured", (req, res) => {
  res.send(featured);
});
app.get("/category", (req, res) => {
  res.send(category);
});
app.get("/bestSellers", (req, res) => {
  res.send(bestSellers);
});
app.get("/newArrivals", (req, res) => {
  res.send(newArrivals);
});
app.get("/specialDelas", (req, res) => {
  res.send(specialDelas);
});

app.get("/featured/:id", (req, res) => {
  const id = req.params.id;

  const selectProducts = featured.find((product) => product.id == id);

  if (selectProducts) {
    res.send(selectProducts);
    res.status(200);
  } else {
    console.log("there is no such user");
    res.status(404).json({ message: "there is no such user.." });
  }
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;

  const selectProducts = category.find((product) => product.id == id);

  if (selectProducts) {
    res.send(selectProducts);
    res.status(200);
  } else {
    console.log("there is no such user");
    res.status(404).json({ message: "there is no such user.." });
  }
});

app.get("/bestSellers/:id", (req, res) => {
  const id = req.params.id;

  const selectProducts = bestSellers.find((product) => product.id == id);

  if (selectProducts) {
    res.send(selectProducts);
    res.status(200);
  } else {
    console.log("there is no such user");
    res.status(404).json({ message: "there is no such user.." });
  }
});

app.get("/newArrivals/:id", (req, res) => {
  const id = req.params.id;

  const selectProducts = newArrivals.find((product) => product.id == id);

  if (selectProducts) {
    res.send(selectProducts);
    res.status(200);
  } else {
    console.log("there is no such user");
    res.status(404).json({ message: "there is no such user.." });
  }
});
app.get("/specialDelas/:id", (req, res) => {
  const id = req.params.id;

  const selectProducts = specialDelas.find((product) => product.id == id);

  if (selectProducts) {
    res.send(selectProducts);
    res.status(200);
  } else {
    console.log("there is no such user");
    res.status(404).json({ message: "there is no such user.." });
  }
});

app.delete("/prod/:id", (req, res) => {
  const id = +req.params.id;

  prod = prod.filter((q) => q.id !== id);
  res.status(200).json({ message: "succesfully deleted" });
});

app.post("/prod", (req, res) => {
  console.log(req);
  const prodObj = {
    id: idCounter++,
    prodname: req.body?.a,
    PRICE: req.body?.price,
    images: req.body?.images,
  };
  prod.push(prodObj);
});

app.put("/prod/:id", (req, res) => {
  const { id } = +req.params;
  prod = prod.filter((elem) => elem.id !== id);

  const updatedUser = {
    id: id,
    name: req.body.name,
    username: req.body.username,
  };
  prod.push(updatedUser);
});

app.listen(port, () => {
  console.log(`this app is listining on port ${port}`);
});
