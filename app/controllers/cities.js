const model = require('../models/city')
const { matchedData } = require('express-validator/filter')
const {
  isIDGood,
  buildSuccObject,
  buildErrObject,
  handleError,
  listInitOptions,
  cleanPaginationID,
  checkQueryString
} = require('./base')

const {
  _getAllItemsFromDB,
  _getItemsFromDB,
  _getItemFromDB,
  _deleteItemFromDB,
  _updateItemInDB,
  _createItemInDB
} = require('./helpers')
/*********************
 * Private functions *
 *********************/

const cityExistsExcludingItself = async (id, name) => {
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
          reject(buildErrObject(422, 'CITY_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

const cityExists = async name => {
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
          reject(buildErrObject(422, 'CITY_ALREADY_EXISTS'))
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
    const doesCityExists = await cityExists(req.name)
    if (!doesCityExists) {
      res.status(201).json(await _createItemInDB(model, req))
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
    const doesCityExists = await cityExistsExcludingItself(id, req.name)
    if (!doesCityExists) {
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
