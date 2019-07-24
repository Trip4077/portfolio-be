const db = require('../../data/dbConfig');

const getAllMedia = async () => {
    return await db('media');
}

const addMedia = async skill => {
    return await db('media')
                    .insert(skill, ['*']);
}

const editMedia = async (id, update) => {
    return await db('media')
                    .where({ id })
                    .update(update);
}

const deleteMedia = async id => {
    return await db('media')
                    .where({ id })
                    .del();
}

module.exportrs = {
    getAllMedia,
    addMedia,
    editMedia,
    deleteMedia
}