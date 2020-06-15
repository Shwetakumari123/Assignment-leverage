var dist    = require('gps-distance-calc')
var fs      = require('fs')
var source  = require('./globalVar')

const sourceLat  = source.lat
const sourceLong = source.lon

const writeCustomerFile = (file,data) => {
    return new Promise((resolve,reject) => {
        fs.writeFile (file, data, {'flag':'a'}, err => {
            if(err) reject('Couldnt write file' )
            resolve('success')
        })
    })
}

const findCustomer = async(data) => {
    try {
        for (const key of data) {
            for (const value in key) {
                if ( key[value] ) {
                    let loc =  JSON.parse( key[value] )
                    const distance =  dist ( parseInt(loc.latitude), parseInt(loc.longitude), sourceLat, sourceLong )
                    if ( distance > 100 ) {
                        let user = {
                            "user_id"  : loc.user_id,
                            "name"     : loc.name,
                            "distance" : distance,
                        }
                        let jsonContent = JSON.stringify(user);
						await writeCustomerFile('./outputFile/customer-result.txt',jsonContent + "\n",'utf-8')
                        console.log(user)}
						
                }
            }
        }
		console.log("The result is written in outputFile/customer-result.txt")
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = findCustomer
