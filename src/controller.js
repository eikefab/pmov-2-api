const service = require('./connection/service');

module.exports = {

    async index(req, res) {
        const record = await service.index();

        return res.json(record);
    },

    async get(req, res) {
        const { id } = req.query;

        const record = await service.get(id);

        if (!record) {
            return res.status(404).send("Not found");
        }

        return res.json(record);
    },

    async create(req, res) {
        const { title, description, costumer } = req.body;

        await service.create(title, description, costumer);

        return res.send('Done.');
    },

    async update(req, res) {
        const { id, state } = req.body;

        await service.update(id, state);

        return res.send("Done.");
    },

    async delete(req, res) {
        const { id } = req.body;

        await service.delete(id);

        return res.send("Done.");
    }

}