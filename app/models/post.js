const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
PostSchema.index({
  name: 'text'
})
PostSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Post', PostSchema)
