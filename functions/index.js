const fn = require('firebase-functions');
const translate = require('./translate')

exports.helloWorld = fn.https.onRequest((_req, res) => {
  res.send('hello world')
})

exports.translate = fn.https.onRequest((req, res) => {
  if(JSON.stringify(req.body) === '{}'){
    res.status(200).send(translate.readme)
    return
  }
  try{
    const resp = translate.translate(req)
    res.status(200).send(resp)
  }catch(e){
    res.status(400).send(e)
  }
})