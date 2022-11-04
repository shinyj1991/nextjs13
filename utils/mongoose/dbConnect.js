import mongoose from 'mongoose'

const { MONGODB_URI } = process.env

export default async (req, res, next) => {
  if (!global.mongoose) {
    global.mongoose = await mongoose.connect(MONGODB_URI)
  }
  return next()
}
