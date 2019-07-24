const db = require('../../data/dbConfig');

const getAllProjects = async () => {
    return await db('projects');
}

const getProject = async id => {
    return await db('projects')
                    .where({ id });
}

const addProject = async project => {
    return await db('projects')
                    .insert(project, ['*']);
}

const editProject = async (id, update) => {
    return await db('projects')
                    .where({ id })
                    .update(update);
}

const deleteProject = async id => {
   return await db('projects')
                    .where({ id })
                    .del(); 
}

module.exports = {
    getAllProjects,
    getProject,
    addProject,
    editProject,
    deleteProject
}