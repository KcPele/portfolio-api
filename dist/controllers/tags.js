import Tag from "../models/tags.js";
const createTag = async (req, res) => {
    const { tag } = req.body;
    try {
        const tags = await Tag.create({ tag });
        res.status(200).json(tags);
    }
    catch (err) {
        res.status(500).json({ "error": err.message });
    }
};
const updateTag = async (req, res) => {
    const { id } = req.query;
    const { tag } = req.body;
    const update = { tag };
    try {
        let query = { _id: id };
        let tags = await Tag.findOneAndUpdate(query, update, { new: true }).catch(err => {
            res.status(500).json({ "error": "Not updated" });
        });
        res.status(200).json(tags);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
const deleteTag = async (req, res) => {
    const { id } = req.query;
    try {
        let query = { _id: id };
        let tags = await Tag.deleteOne(query).catch(err => {
            res.status(500).json({ "error": "Not deleted" });
        });
        res.status(200).json(tags);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
export { createTag, updateTag, deleteTag };
//# sourceMappingURL=tags.js.map