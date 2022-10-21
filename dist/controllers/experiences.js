import Experience from "../models/experiences.js";
const createExperience = async (req, res) => {
    const { year, works } = req.body;
    try {
        const data = await Experience.create({ year, works });
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ "error": err.message });
    }
};
const updateExperience = async (req, res) => {
    const { id } = req.query;
    const { year, works } = req.body;
    const update = { year, works };
    try {
        let query = { _id: id };
        let data = await Experience.findOneAndUpdate(query, update, { new: true }).catch(err => {
            res.status(500).json({ "error": "Not updated" });
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
const deleteExperience = async (req, res) => {
    const { id } = req.query;
    try {
        let query = { _id: id };
        let data = await Experience.deleteOne(query).catch(err => {
            res.status(500).json({ "error": "Not deleted" });
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
export { createExperience, updateExperience, deleteExperience };
//# sourceMappingURL=experiences.js.map