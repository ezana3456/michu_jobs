import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

export const createJob = async (req, res) => {
  const newJob = new Job(req.body);
  const savedJob = await newJob.save();
  res.status(201).json(savedJob);
};
