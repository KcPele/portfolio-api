import WorkExperience from "../models/workExperience";
const createWorkExperience = async (req, res) => {
    const { name, company, description } = req.body;
    try {
        const data = await WorkExperience.create({ name, company, description });
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ "error": err.message });
    }
};
const updateWorkExperience = async (req, res) => {
    const { id } = req.query;
    const { name, company, description } = req.body;
    const update = { name, company, description };
    try {
        let query = { _id: id };
        let data = await WorkExperience.findOneAndUpdate(query, update, { new: true }).catch(err => {
            res.status(500).json({ "error": "Not updated" });
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
const deleteWorkExperience = async (req, res) => {
    const { id } = req.query;
    try {
        let query = { _id: id };
        let data = await WorkExperience.deleteOne(query).catch(err => {
            res.status(500).json({ "error": "Not deleted" });
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
export { createWorkExperience, updateWorkExperience, deleteWorkExperience };
//# sourceMappingURL=workExperience.js.map