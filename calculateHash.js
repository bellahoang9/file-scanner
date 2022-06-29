import crypto from 'crypto'
import fs from 'fs'

export default () => {

  const fileBuffer = fs.readFileSync('myfile.txt')
  const hashSum = crypto.createHash('sha256')

  hashSum.update(fileBuffer)
  const hex = hashSum.digest('hex')
  return hex

}