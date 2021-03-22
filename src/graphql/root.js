const Event = require('../models/bicycle_login');

module.exports = {
    listUsers() {
        return Event.find();
    },
    createUser(input) {
        const newEvent = new Event(input);
        return newEvent.save();
    },
    updateUser(input) {
        const { id, ...rest } = input;
        return Event.findByIdAndUpdate(id, { $set: rest }, { new: true }).catch(
            err => console.error(err)
        );
    },
    deleteUser({ id }) {
        return Event.findByIdAndDelete(id)
            .then(event => event.remove())
            .then(() => `${id} successfully deleted`)
            .catch(err => console.error(err));
    }
};