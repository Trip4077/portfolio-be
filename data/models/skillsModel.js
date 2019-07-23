const db = require('../../dbConfig');

const getAllSkills = async () => {
    return await db('skills');
}

const addSkill = async skill => {
    return await db('skills')
                    .insert(skill, ['*']);
}

const editSkill = async (id, update) => {
    return await db('skills')
                    .where({ id })
                    .update(update);
}

const deleteSkill = async id => {
    return await db('skills')
                    .where({ id })
                    .del();
}

module.exportrs = {
    getAllSkills,
    addSkill,
    editSkill,
    deleteSkill
}