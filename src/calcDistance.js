var dist         = require('gps-distance-calc')
var findCustomer = require('./customerResult')
var fs           = require('fs')


const readCustomerFile = file => {
    return new Promise((resolve,reject) => {
        fs.readFile(file, (err,data) => {
            if(err) reject('Could not find the file')
            resolve(data)
        })
    })
}


const findCustomerInRange = async() => {
	const dataArray = []
	try {
		let data = await readCustomerFile('./inputFile/customer.txt')
		data=data.toString()	
		data = data.split("\n")	
		dataArray.push(data)	
		findCustomer(dataArray)	
	}
	catch (err) {
		console.log(err)
	}
} 

findCustomerInRange()




