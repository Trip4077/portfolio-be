const router = require('express').Router();
const ProjectModel = require('../../data/models/projectsModel');

router.get('/', async (req, res) => {
    await ProjectModel.getAllProjects()
                      .then(projects => {
                        res.status(200).json(projects);
                      })
                      .catch(err => {
                          res.status(500).json(err);
                      });
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    await ProjectModel.getProject(id)
                      .then(project => {
                        res.status(200).json(project);
                      })
                      .catch(err => {
                        res.status(500).json(err);
                      });
});

router.post('/', async (req, res) => {
    await ProjectModel.addProject(req.body)
                      .then(project => {
                        res.status(201).json(project);
                      })
                      .catch(err => {
                        res.status(400).json(err);
                      });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const update = req.body;

    await ProjectModel.editProject(id, update)
                      .then(result => {
                          res.status(201).json(result);
                      })
                      .catch(err => {
                          res.status(500).json(err);
                      });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    
    await ProjectModel.deleteProject(id)
                      .then(result => {
                          res.status(200).json(result);
                      })
                      .catch(err => {
                          res.status(500).json(err);
                      });
});

module.exports = router;