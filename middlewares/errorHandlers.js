module.exports = (req, res, next) => {
  let status = 500
  let msg = 'internal server error'
  console.log(err)
  res.status(status).json(msg)
}