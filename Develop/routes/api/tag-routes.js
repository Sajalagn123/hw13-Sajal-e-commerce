const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll().then(r => {
    res.status(200).json(r)
  })
  .catch(e => res.status(500).json(e))
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    })
    .then(r => res.status(200).json(r))
    .catch(e => res.status(500).json(e))
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
       console.log(err);
      res.status(400).json(err);
    });
  });

router.delete('/:id', (req, res) => {
  return Promise.all([
     Tag.destroy({ where: { id:req.params.id } })
    ])
    .then(r => res.status(200).json(r))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
 });


module.exports = router;
