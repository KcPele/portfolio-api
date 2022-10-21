import Service from "../models/service.js";
const createService = async (req, res) => {
    const { name, price, description } = req.body;
    const contentType = req.file?.mimetype;
    const buffer = req.file?.buffer;
    const userId = req.userId;
    const service = await Service.createNewService(name, price, contentType, buffer, userId, description);
    res.status(200).json(service);
};
const updateService = async (req, res) => {
    const { id } = req.query;
    const { name, price, description } = req.body;
    const update = { name, price, description };
    if (req.file) {
        update.imgUrl = {
            contentType: req.file.mimetype,
            buffer: req.file.buffer
        };
    }
    try {
        let query = { _id: id, owner: req.userId };
        let service = await Service.findOneAndUpdate(query, update, { new: true }).catch(err => {
            res.status(500).json({ "error": "Not updated" });
        });
        res.status(200).json(service);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
const deleteService = async (req, res) => {
    const id = req.query.id;
    try {
        let query = { _id: id, owner: req.userId };
        let service = await Service.deleteOne(query).catch(err => {
            res.status(500).json({ "error": "Not deleted" });
        });
        res.status(200).json(service);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
export { createService, updateService, deleteService };
//# sourceMappingURL=services.js.map