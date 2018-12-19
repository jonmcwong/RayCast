//alert("importing Maths.js")

//These functions only work on length 3 vectors.
function dotProd(vect1,vect2){return vect1[0]*vect2[0] + vect1[1]*vect2[1] + vect1[2]*vect2[2]}

function itemwiseAdd(vect1,vect2){
	if (typeof(vect2) == typeof([]))    {return [vect1[0]+vect2[0] , vect1[1]+vect2[1] , vect1[2]+vect2[2]]}
	else if (typeof(vect2) == typeof(1)){return [vect1[0]+vect2    , vect1[1]+vect2    , vect1[2]+vect2   ]}
	else {alert("itemwiseAdd - incorrect data input: received "+typeof(vect1) +" and " + typeof(vect2) + " type.")}
}
function itemwiseSub(vect1,vect2){
	if (typeof(vect2) == typeof([]))    {return [vect1[0]-vect2[0] , vect1[1]-vect2[1] , vect1[2]-vect2[2]]}
	else if (typeof(vect2) == typeof(1)){return [vect1[0]-vect2    , vect1[1]-vect2    , vect1[2]-vect2   ]}
	else {alert("itemwiseSub - incorrect data input: received "+typeof(vect1) +" and " + typeof(vect2) + " type.")}
}
function itemwiseMul(vect1,vect2){
	if (typeof(vect2) == typeof([]))    {return [vect1[0]*vect2[0] , vect1[1]*vect2[1] , vect1[2]*vect2[2]]}
	else if (typeof(vect2) == typeof(1)){return [vect1[0]*vect2    , vect1[1]*vect2    , vect1[2]*vect2   ]}
	else {alert("itemwiseMul - incorrect data input: received "+typeof(vect1) +" and " + typeof(vect2) + " type.")}
}
function itemwiseDiv(vect1,vect2){
	if (typeof(vect2) == typeof([]))    {return [vect1[0]/vect2[0] , vect1[1]/vect2[1] , vect1[2]/vect2[2]]}
	else if (typeof(vect2) == typeof(1)){return [vect1[0]/vect2    , vect1[1]/vect2    , vect1[2]/vect2   ]}
	else {alert("itemwiseDiv - incorrect data input: received "+typeof(vect1) +" and " + typeof(vect2) + " type.")}
}
function normalise(vect){return itemwiseDiv(vect,magnitude(vect))}

function asRad(angle){return angle*Math.PI/180}
function asDeg(angle){return angle*180/Math.PI}
function magnitude(vect){return Math.sqrt(dotProd(vect,vect))}
function loopAngle(theta){return (theta+(3*Math.PI))%(2*Math.PI)-(1*Math.PI)}
//The coordinate system is cartesian.
//However, turning the camera will be done polar-ly. 
//This polar system will be like a globe. Radius-latitude-longditude, where the north pole points in the z-axis.
//Points will be plotted relative to the camera, in terms of a globe with its north orientated in the camera's direction.
//All angles should be in radians unless stated.

function asCartes(polVect){
	//inpuys ArrayOfLength3 of form (r,t,p)
	//outputs ArrayofLength3 of form (x,y,z)
	return [polVect[0]*Math.cos(polVect[2])*Math.cos(polVect[1]),
			polVect[0]*Math.cos(polVect[2])*Math.sin(polVect[1]),
			polVect[0]*Math.sin(polVect[2])
	]
}
//theta is the angle in the horizontal plane. -pi <= theta < pi
//phi is the angle of elevation. -pi/2 <= phi < pi/2
//when looking around with the camera, it should be impossible to look directly upwards.
//It should be like one of those games where you end up spinning around on the spot when you try to look up. 

function asPolar(vect){
	//inputs ArrayofLength3 of form (x,y,z)
	//outputs ArrayOfLength3 of form (r,t,p)
	return [magnitude(vect),
			loopAngle(Math.atan(vect[1]/(vect[0]+0.000000001))+Math.PI*(vect[0]<0)),//cba dealing with div0 errors
			Math.atan(vect[2]/(magnitude(itemwiseMul(vect,[1,1,0]))+0.000000000001))// divides the z by the magnitude of [x,y,0].
	]
	// var r = magnitude(x,y,z);
	// // alert(r);
	// var t = loopAngle(Math.asin(y/x)+Math.PI*(x<0));
	// alert(t);
	// var p = Math.asin(z/magnitude(x,y,0));
	// alert(p)
	// return [r,t,p]
}

//alert("finished Maths.js")

//For matrix/vector calculations, see http://mathjs.org/docs/datatypes/matrices.html
//This means you will have to download that library though. Also its name ("math") is vwery similar to the built in library "Math"
//Therefore I did not download it, so well have to define our own functions.