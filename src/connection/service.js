const db = require('./');

module.exports = {

    async index() {
        const record = await db('services').select();

        return record;
    },

    async create(title, description, customer) {
        await db('services').insert({ title, description, customer });
    },

    async get(id) {
        const record = await db('services').where({ id }).select();

        return record;
    },

    async update(id, state) {
        await db('services').where({ id }).update({ state});
    },

    async delete(id) {
        await db('services').where({ id }).del();
    }

}