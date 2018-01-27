const express = require('express')
const router = express.Router()

const actionRunner = require('../actions/util').actionRunner
const actions = require('../actions/users')
const BaseController = require('./baseCtrl')

class UsersController extends BaseController {
  static get router () {
    router.get('/', actionRunner(actions.List))
    router.post('/', actionRunner(actions.Create))

    return router
  }
}

module.exports = UsersController.router