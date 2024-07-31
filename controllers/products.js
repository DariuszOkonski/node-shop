const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true,
  });
}

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(products);
  res.redirect('/');
}

exports.getProducts = (req, res) => { 
  res.render('shop', {
    prods: products,
    path: '/',
    pageTitle: 'Shop',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
}