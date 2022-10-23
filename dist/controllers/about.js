import About from "../models/about.js";
const createAbout = async (req, res) => {
    const { title, description } = req.body;
    const imgUrl = req.file.path
    try {
        const data = await About.create({ title, description, imgUrl });
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ "error": err.message });
    }
};
const updateAbout = async (req, res) => {
    const { id } = req.query;
    const { title, description } = req.body;
    const imgUrl =req.file.path
    const update = { title, description, imgUrl };
    
    try {
        let query = { _id: id };
        let data = await About.findOneAndUpdate(query, update, { new: true }).catch(err => {
            res.status(500).json({ "error": "Not updated" });
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
const deleteAbout = async (req, res) => {
    const { id } = req.query;
    try {
        let query = { _id: id };
        let data = await About.deleteOne(query).catch(err => {
            res.status(500).json({ "error": "Not deleted" });
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
export { createAbout, updateAbout, deleteAbout };
//# sourceMappingURL=about.js.map