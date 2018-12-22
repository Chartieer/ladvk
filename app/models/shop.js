const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ShopSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
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

ShopSchema.index({
  name: 'text'
})

ShopSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Shop', ShopSchema)
