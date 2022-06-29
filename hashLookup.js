import https from 'https'

export default (hex) => {

  const options = {
    headers: {
      'apikey': '74ceb41ca68b06944e1cc12773d9b84e'
    }
  }

  https.get(`https://api.metadefender.com/v4/hash/${hex}`, options, res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date'
    console.log('Status Code:', res.statusCode)
    console.log('Date in Response header:', headerDate)

    let responseString = ''

    res.on('data', function (chunk) {
      responseString += chunk
    });
  
    res.on('end', function () {
      const responseObj = JSON.parse(responseString)
      if ('error' in responseObj) {
        if (responseObj.error.code === 400064)
          return false
        else
          console.log('Error: ', responseObj.error.code)
      }
      else {
        console.log(responseObj)
        return true
      }
    });

  }).on('error', err => {
    console.log('Error: ', err.message)
  })

}



