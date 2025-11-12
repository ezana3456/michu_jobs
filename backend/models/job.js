import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: String,
  type: String, // Full-time, Part-time, etc.
  description: String,
  salary: String,
  postedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Job", jobSchema);
