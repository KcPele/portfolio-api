import Brand from "../models/brands.js";
const createBrand = async (req, res) => {
    const { name } = req.body;
    const imgUrl = req.file.path
    try {
        const brand = await Brand.create({ name, imgUrl });
        res.status(200).json(brand);
    }
    catch (err) {
        res.status(500).json({ "error": err.message });
    }
};
const updateBrand = async (req, res) => {
    const { id } = req.query;
    const { name } = req.body;
    const update = { name };
    if (req.file) {
        update.imgUrl = req.file.path
    }
    try {
        let query = { _id: id };
        let brand = await Brand.findOneAndUpdate(query, update, { new: true }).catch(err => {
            res.status(500).json({ "error": "Not updated" });
        });
        res.status(200).json(brand);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
const deleteBrand = async (req, res) => {
    const { id } = req.query;
    try {
        let query = { _id: id };
        let brand = await Brand.deleteOne(query).catch(err => {
            res.status(500).json({ "error": "Not deleted" });
        });
        res.status(200).json(brand);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
export { createBrand, updateBrand, deleteBrand };
//# sourceMappingURL=brands.js.map