const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (__req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const productData = await Tag.findAll({
      include: [
        Product,
        {
          model: Product,
          through: ProductTag
        }
      ]
    })
    res.json(productData)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const productData = await Tag.findOne({
      where: {
        id: req.params.id
      }, 
      include: [
        Product, 
        { 
          model: Product, 
          through : ProductTag
        }
      ]
    })
    res.json(productData)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const categoryInfo = await Tag.create(req.body)
    res.json(categoryInfo)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const productData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(productData)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const productData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(productData)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

module.exports = router;
