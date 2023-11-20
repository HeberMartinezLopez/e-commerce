const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  try {
    const categoryInfo = await Category.findAll({
      include: [Product]
    });
    res.json(categoryInfo);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // create a new category
});

router.put('/:id', async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // update a category by its `id` value
});

router.delete('/:id', async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // delete a category by its `id` value
});

module.exports = router;
