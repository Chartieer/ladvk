const model = require('../models/post')
const { matchedData } = require('express-validator/filter')
const {
  isIDGood,
  buildErrObject,
  handleError,
  checkQueryString
} = require('./base')

const {
  _createItemInDB,
  _getAllItemsFromDB,
  _getItemsFromDB,
  _getItemFromDB,
  _updateItemInDB,
  _deleteItemFromDB
} = require('./helpers')

/*********************
 * Private functions *
 *********************/

const ExistsExcludingItself = async (id, name) => {
  return new Promise((resolve, reject) => {
    model.findOne(
      {
        name,
        _id: {
          $ne: id
        }
      },
      (err, item) => {
        if (err) {
          reject(buildErrObject(422, err.message))
        }
        if (item) {
          reject(buildErrObject(422, 'ALREADY_EXISTS_SHOULD_BE_UNIQUE'))
        }
        resolve(false)
      }
    )
  })
}

const Exists = async name => {
  return new Promise((resolve, reject) => {
    model.findOne(
      {
        name
      },
      (err, item) => {
        if (err) {
          reject(buildErrObject(422, err.message))
        }
        if (item) {
          reject(buildErrObject(422, 'ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

/********************
 * Public functions *
 ********************/

exports.createItem = async (req, res) => {
  try {
    req = matchedData(req)
    const _Exists = await Exists(req.name)
    if (!_Exists) {
      res.status(201).json(await _createItemInDB(req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

exports.getAllItems = async (req, res) => {
  try {
    res.status(200).json(await _getAllItemsFromDB(model))
  } catch (error) {
    handleError(res, error)
  }
}

exports.getItems = async (req, res) => {
  try {
    const query = await checkQueryString(req.query.filter)
    res.status(200).json(await _getItemsFromDB(model, req, query))
  } catch (error) {
    handleError(res, error)
  }
}

exports.getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await _getItemFromDB(model, id))
  } catch (error) {
    handleError(res, error)
  }
}

exports.updateItem = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const _Exists = await ExistsExcludingItself(id, req.name)
    if (!_Exists) {
      res.status(200).json(await _updateItemInDB(model, id, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

exports.deleteItem = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await _deleteItemFromDB(model, id))
  } catch (error) {
    handleError(res, error)
  }
}
