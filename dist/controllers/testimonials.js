import Testimonial from "../models/testimonials.js";
const createTestimonial = async (req, res) => {
    const { name, company, feedback } = req.body;
    const imgUrl = {
        contentType: req.file?.mimetype,
        buffer: req.file?.buffer
    };
    try {
        const data = await Testimonial.create({ name, imgUrl, company, feedback });
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ "error": err.message });
    }
};
const updateTestiminial = async (req, res) => {
    const { id } = req.query;
    const { name, company, feedback } = req.body;
    const update = { name, company, feedback };
    if (req.file) {
        update.imgUrl = {
            contentType: req.file.mimetype,
            buffer: req.file.buffer
        };
    }
    try {
        let query = { _id: id };
        let data = await Testimonial.findOneAndUpdate(query, update, { new: true }).catch(err => {
            res.status(500).json({ "error": "Not updated" });
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
const deleteTestimonial = async (req, res) => {
    const { id } = req.query;
    try {
        let query = { _id: id };
        let data = await Testimonial.deleteOne(query).catch(err => {
            res.status(500).json({ "error": "Not deleted" });
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
export { createTestimonial, updateTestiminial, deleteTestimonial };
//# sourceMappingURL=testimonials.js.map