const router = require('express').Router();
const { Category, Product } = require('../../models');
const { update } = require('../../models/Category');

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

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(
      { category_name: req.body.category_name },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (updatedCategory[0] === 1) {
      res.status(200).json({ message: 'Category updated successfully' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id);

    if (categoryData) {
      await categoryData.destroy();
      res.status(200).json({ message: 'Category deleted successfully' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
