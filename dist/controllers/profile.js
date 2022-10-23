import User from "../models/user.js";
import Profile from "../models/profile.js";
const createProfile = async (req, res) => {
    const { name } = req.body;
    const imgUrl = req.file.path
    try {
        const owner = await User.findById(req.userId);
        const profile = await Profile.create({ name, imgUrl, owner });
        res.status(200).json(profile);
    }
    catch (err) {
        res.status(500).json({ "error": err.message });
    }
};
const updateProfile = async (req, res) => {
    const { id } = req.query;
    const { name } = req.body;
    const update = { name };
    if (req.file) {
        update.imgUrl = req.file.path
    }
    try {
        let query = { _id: id, owner: req.userId };
        let profile = await Profile.findOneAndUpdate(query, update, { new: true }).catch(err => {
            res.status(500).json({ "error": "Not updated" });
        });
        res.status(200).json(profile);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
const deleteProfile = async (req, res) => {
    const { id } = req.query;
    try {
        let query = { _id: id, owner: req.userId };
        let profile = await Profile.deleteOne(query).catch(err => {
            res.status(500).json({ "error": "Not deleted" });
        });
        res.status(200).json(profile);
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
export { createProfile, updateProfile, deleteProfile };
//# sourceMappingURL=profile.js.map