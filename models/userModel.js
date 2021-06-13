import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
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
    role: {
        type: String,
        default: 'user'
    },
    root: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: 'https://firebasestorage.googleapis.com/v0/b/next-app-12820.appspot.com/o/user%2Fcbd0b1a6345a44b58dda0f6a355eb39ce4e8a56a.png?alt=media&token=96beadb5-17fb-4b05-8c0f-4e4ae640d18a'
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset