const fs = require('fs')

function logger(req, res, next){
  console.log(
    req.method,
    req.url
  )
  if(req.method === 'GET'){
    console.log(
      req.params,
      req.query
    )
  } else if(req.method === 'POST'){
    console.log(
      req.body
    )
  }

  next()
}

module.exports = { logger }
