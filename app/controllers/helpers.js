const {
  isIDGood,
  buildSuccObject,
  buildErrObject,
  handleError,
  listInitOptions,
  cleanPaginationID,
  checkQueryString
} = require('./base')

exports._getAllItemsFromDB = async _model => {
  return new Promise((resolve, reject) => {
    _model.find(
      {},
      '-updatedAt -createdAt',
      {
        sort: {
          name: 1
        }
      },
      (err, items) => {
        if (err) {
          reject(buildErrObject(422, err.message))
        }
        resolve(items)
      }
    )
  })
}

exports._getItemsFromDB = async (model, req, query) => {
  const options = await listInitOptions(req)
  return new Promise((resolve, reject) => {
    model.paginate(query, options, (err, items) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      resolve(cleanPaginationID(items))
    })
  })
}

exports._getItemFromDB = async (model, id) => {
  return new Promise((resolve, reject) => {
    model.findById(id, (err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      if (!item) {
        reject(buildErrObject(404, 'NOT_FOUND'))
      }
      resolve(item)
    })
  })
}

exports._deleteItemFromDB = async (model, id) => {
  return new Promise((resolve, reject) => {
    model.findByIdAndRemove(id, (err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      if (!item) {
        reject(buildErrObject(404, 'NOT_FOUND'))
      }
      resolve(buildSuccObject('DELETED'))
    })
  })
}

exports._createItemInDB = async (model, req) => {
  return new Promise((resolve, reject) => {
    model.create(req, (err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      resolve(item)
    })
  })
}

exports._updateItemInDB = async (model, id, req) => {
  return new Promise((resolve, reject) => {
    model.findByIdAndUpdate(
      id,
      req,
      {
        new: true
      },
      (err, item) => {
        if (err) {
          reject(buildErrObject(422, err.message))
        }
        if (!item) {
          reject(buildErrObject(404, 'NOT_FOUND'))
        }
        resolve(item)
      }
    )
  })
}

exports._createItemInDB = async (model, req) => {
  return new Promise((resolve, reject) => {
    model.create(req, (err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      resolve(item)
    })
  })
}
