import https from 'https'


export default (hex) => {
    
    const options = {
        URL: 'https://api.metadefender.com/v4/file',
        method: 'POST',
        headers: {
            'apikey': '74ceb41ca68b06944e1cc12773d9b84e',
            'Content-type': 'multipart/form-data'
        }
      }

    const req = https.request(options, res => {
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date'
        console.log('Status Code:', res.statusCode)
        console.log('Date in Response header:', headerDate)

        
    
    }).on('error', err => {
        console.log('Error: ', err.message)
    })

    const form = req.form();
    form.append('file', '<FILE_DATA>', {
      filename: 'myfile.txt',
      contentType: 'multipart/form-data'
    });

    req.write(postData);
    req.end();

    console.log('send to scan')

}



