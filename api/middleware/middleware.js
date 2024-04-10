function logger(req, res, next) {
  // DO YOUR MAGIC
  const timeStamp = new Date().toLocaleString()
  const method = req.method
  const url = req.originalUrl
  console.log(`${timeStamp} ${method} to ${url}`)


  console.log('logger/')

  next()
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  console.log('validateUserId/')
  next()

}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  console.log('validateUser/')
  next()

}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log('validatePost')
  next()

}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}
