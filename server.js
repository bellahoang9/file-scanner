import express from 'express'

import calculateHash from './calculateHash.js'
import hashLookup from './hashLookup.js'
import scanfile from './scanfile.js'

const app = express()
const port = 3000

const hex = calculateHash()
let fileScanStatus = null

fileScanStatus = hashLookup()

if (!fileScanStatus) scanfile()

app.get('/', (req, res) => {
  res.send(`filename: samplefile.txt
  overall_status: Clean ${hex}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
