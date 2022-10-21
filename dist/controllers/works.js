import Work from "../models/works.js";
const createWork = async (req, res) => {
    const { title, description, projectLink, codeLink, tags } = req.body;
    const imgUrl = {
        contentType: req.file?.mimetype,
        buffer: req.file?.buffer
    };
    try {
        const jsonTags = JSON.parse(tags);
        const data = await Work.create({ title, description, projectLink, codeLink, imgUrl, tags: jsonTags });
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ "error": err.message });
    }
};
const updateWork = async (req, res) => {
    const { id } = req.query;
    const { title, description, projectLink, codeLink, tags } = req.body;
    const update = { title, description, projectLink, codeLink };
    if (tags) {
        const jsonTags = JSON.parse(tags);
        update.tags = jsonTags;
    }
    if (req.file) {
        update.imgUrl = {
            contentType: req.file.mimetype,
            buffer: req.file.buffer
        };
    }
    try {
        let query = { _id: id };
        let data = await Work.findOneAndUpdate(query, update, { new: true }).catch(err => {
            res.status(500).json({ "error": "Not updated" });
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
const deleteWork = async (req, res) => {
    const { id } = req.query;
    try {
        let query = { _id: id };
        let data = await Work.deleteOne(query).catch(err => {
            res.status(500).json({ "error": "Not deleted" });
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
export { createWork, updateWork, deleteWork };
//# sourceMappingURL=works.js.map