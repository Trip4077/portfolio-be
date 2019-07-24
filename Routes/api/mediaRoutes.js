const router = require('express').Router();
const MediaModel = require('../../data/models/mediaModel');

router.get('/', async (req, res) => {
    await MediaModel.getAllMedia()
                    .then(media => {
                        res.status(200).json(media);
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
});

router.post('/', async (req, res) => {
    await MediaModel.addMedia(req.body)
                    .then(media => {
                        res.status(201).json(media);
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const update = req.body;

    await MediaModel.editMedia(id, update)
                    .then(result => {
                        res.status(201).json(result);
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    await MediaModel.deleteMedia(id)
                    .then(result => {
                        res.status(200).json(result);
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
});

module.exports = router;