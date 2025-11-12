import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["jobseeker", "company", "privateclient"],
    default: "jobseeker",
  },
  package: {
    type: String,
    enum: ["none", "basic", "premium"],
    default: "none",
  },
  jobsPosted: { type: Number, default: 0 },
  hasPaid: { type: Boolean, default: false }, // for private client payment
});

export default mongoose.model("User", userSchema);
