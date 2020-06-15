var degreeToRadians = require('./degreeIntoRadians')

const distanceCalc = (lat1, long1, lat2, long2) => {
	//if Latitute and Longitute is same as the source
	if (( lat1 == lat2 ) && ( long1 == long2 )) {
		return 0;
	}

	else {
		//For converting latitude of both points into radians
		let radianlat1  = degreeToRadians(lat1);
		let radianlat2  = degreeToRadians(lat2);
		//Difference of longitude of both points
		let theta = long1-long2;
		//Dofference of longitude into randians
		let radiantheta = degreeToRadians(theta)

		let dist = Math.sin(radianlat1) * Math.sin(radianlat2) + Math.cos(radianlat1) * Math.cos(radianlat2) * Math.cos(radiantheta);

		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		//To convert distance into KM
		dist = dist * 60 * 1.1515;
		dist = dist * 1.609344 

		return dist;
	}
}

module.exports = distanceCalc
