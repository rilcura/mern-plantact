import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import { isAuth, isAdmin } from '../utils.js';

const productRouter = express.Router();

// Get Products
productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// Create Post (admin)
productRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newProduct = new Product({
      name: 'Enter name ' + Date.now(),
      image: 'Enter Image URL',
      videoLink: 'Enter Video Link',
      description: 'Enter description',
      date: 'Enter date',
      location: 'Enter location',
    });
    const product = await newProduct.save();
    res.send({ message: 'Post Created', product });
  })
);

// Update Product (admin)
productRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.image = req.body.image;
      product.videoLink = req.body.videoLink;
      product.description = req.body.description;
      product.date = req.body.date;
      product.location = req.body.location;
      await product.save();
      res.send({ message: 'Post Updated' });
    } else {
      res.status(404).send({ message: 'Post Not Found' });
    }
  })
);

// Delete Product (admin)
productRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.send({ message: 'Product Deleted' });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

const PAGE_SIZE = 10;

// Get Products (admin)
productRouter.get(
  '/admin',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = query.page || 1;
    const pageSize = query.pageSize || PAGE_SIZE;

    const products = await Product.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const countProducts = await Product.countDocuments();
    res.send({
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    });
  })
);

// Search bar
productRouter.get(
  '/search',
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const searchQuery = query.query || '';

    const queryFilter =
      searchQuery && searchQuery !== 'all'
        ? {
          name: {
            $regex: searchQuery,
            $options: 'i',
          },
        }
        : {};
    const categoryFilter = category && category !== 'all' ? { category } : {};

    const products = await Product.find({
      ...queryFilter,
      ...categoryFilter,

    })
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countProducts = await Product.countDocuments({
      ...queryFilter,
      ...categoryFilter,

    });
    res.send({
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    });
  })
);

// Sidebar 
productRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct('category');
    res.send(categories);
  })
);

// Something from youtube
productRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Post Not Found' });
  }
});

// Get Post by ID
productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Post Not Found' });
  }
});

export default productRouter;
