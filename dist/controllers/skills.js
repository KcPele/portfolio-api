import Skill from "../models/skills.js";
const createSkills = async (req, res) => {
    const { name, bgColor } = req.body;
    const iconUrl = req.file.path
    try {
        const data = await Skill.create({ name, iconUrl, bgColor });
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ "error": err.message });
    }
};
const updateSkills = async (req, res) => {
    const { id } = req.query;
    const { name, bgColor } = req.body;
    const update = { name, bgColor };
    if (req.file) {
        update.iconUrl = req.file.path
    }
    try {
        let query = { _id: id };
        let data = await Skill.findOneAndUpdate(query, update, { new: true }).catch(err => {
            res.status(500).json({ "error": "Not updated" });
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
const deleteSkills = async (req, res) => {
    const { id } = req.query;
    try {
        let query = { _id: id };
        let data = await Skill.deleteOne(query).catch(err => {
            res.status(500).json({ "error": "Not deleted" });
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
export { createSkills, updateSkills, deleteSkills };
//# sourceMappingURL=skills.js.map