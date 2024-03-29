const model = require('../models/user')
const uuid = require('uuid')
const { matchedData } = require('express-validator/filter')
const {
  isIDGood,
  buildSuccObject,
  buildErrObject,
  handleError,
  listInitOptions,
  cleanPaginationID,
  checkQueryString,
  emailExistsExcludingMyself,
  emailExists,
  sendRegistrationEmailMessage
} = require('./base')

const {
  _getItemsFromDB,
  _getItemFromDB,
  _deleteItemFromDB
} = require('./helpers')

/*********************
 * Private functions *
 *********************/

const updateItemInDB = async (id, req) => {
  return new Promise((resolve, reject) => {
    model.findByIdAndUpdate(
      id,
      req,
      {
        new: true,
        runValidators: true
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

const createItemInDB = async req => {
  return new Promise((resolve, reject) => {
    const user = new model({
      name: req.name,
      email: req.email,
      password: req.password,
      friends: req.friends,
      role: req.role,
      city: req.city,
      verification: uuid.v4()
    })
    user.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      item = item.toObject()
      delete item.password
      delete item.blockExpires
      delete item.loginAttempts
      resolve(item)
    })
  })
}

/********************
 * Public functions *
 ********************/

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
    const doesEmailExists = await emailExistsExcludingMyself(id, req.email)
    if (!doesEmailExists) {
      res.status(200).json(await updateItemInDB(id, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

exports.createItem = async (req, res) => {
  try {
    req = matchedData(req)
    const doesEmailExists = await emailExists(req.email)
    if (!doesEmailExists) {
      const item = await createItemInDB(req)
      sendRegistrationEmailMessage(item)
      res.status(201).json(item)
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
