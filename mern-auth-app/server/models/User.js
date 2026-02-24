// server/models/User.js (CommonJS version)
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, {
    timestamps: true // This will add createdAt and updatedAt fields automatically
});

// Add any instance methods if needed
UserSchema.methods.toJSON = function() {
    const user = this.toObject();
    delete user.password; // Remove password when converting to JSON
    delete user.__v; // Remove version key
    return user;
};

// Add any static methods if needed
UserSchema.statics.findByEmail = function(email) {
    return this.findOne({ email });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;