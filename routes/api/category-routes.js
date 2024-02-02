const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: Product,
    });
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  const categoryId = req.params.id;

  try {
    const category = await Category.findByPk(categoryId, {
      include: Product,
    });

    if(!category) {
      return res.status(404).json({ error: 'Category not found' });
    } 

    res.json(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
