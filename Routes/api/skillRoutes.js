const router = require('express').Router();
const SkillModel = require('../../data/models/skillsModel');

router.get('/', async (req, res) => {
    await SkillModel.getAllSkills()
                    .then(skills => {
                        res.status(200).json(skills);
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
});

router.post('/', async (req, res) => {
    await SkillModel.addSkill(req.body)
                    .then(skill => {
                        res.status(201).json(skill);
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const update = req.body;

    await SkillModel.editSkill(id, update)
                    .then(result => {
                        res.status(201).json(result);
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    await SkillModel.deleteSkill(id)
                    .then(result => {
                        res.status(200).json(result);
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
});

module.exports = router;