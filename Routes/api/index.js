const router = require('express').Router();

const projectRoutes = require('./projectRoutes');
const mediaRoutes = require('./mediaRoutes');
const skillRoutes = require('./skillRoutes');

router.use('/projects', projectRoutes);
router.use('/media', mediaRoutes); 
router.use('/skills', skillRoutes);

module.exports = router;