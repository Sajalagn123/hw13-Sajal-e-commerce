const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then(r => {
    res.status(200).json(r)
  })
  .catch(e => res.status(500).json(e))
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
  //  include: [{
     // model: Category,
   // }]
  })
  .then(r => res.status(200).json(r))
  .catch(e => res.status(500).json(e))
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((cat) => {
    res.status(200).json(cat);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((cat) => {
      res.status(200).json(cat);
    })
    .catch((err) => {
       console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  return Promise.all([
    Category.destroy({ where: { id:req.params.id } })
   ])
   .then(r => res.status(200).json(r))
   .catch((err) => {
     // console.log(err);
     res.status(400).json(err);
   });
});

module.exports = router;
