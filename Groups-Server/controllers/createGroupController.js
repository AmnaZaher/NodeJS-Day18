//Group Controller

const Group = require('../models/Group');

// Create a new group
const createGroup = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Validate input
        if (!name) {
            return res.status(400).json({ message: 'Group name is required' });
        }
        if (description && description.length > 500) {
            return res.status(400).json({ message: 'Description is too long' });
        }
        // Check for duplicate group name
        const existingGroup = await Group.findOne({ name });
        if (existingGroup) {
            return res.status(400).json({ message: 'Group name already exists' });
        }

        // Create and save the new group
        const group = new Group({ name, description });
        await group.save();

        return res.status(201).json({ message: `Group created successfully by ${req.session.username}`, group });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createGroup };