//alert("importing Maths.js")
function deg2rad(angle){return angle*Math.PI/180}
function rad2deg(angle){return angle*180/Math.PI}
function calcMod(x,y,z){return Math.sqrt(x*x + y*y + z*z)}
function loopAngle(theta){return (theta+(3*Math.PI))%(2*Math.PI)-(1*Math.PI)}
//The coordinate system is cartesian.
//However, turning the camera will be done polar-ly. 
//This polar system will be like a globe. Radius-latitude-longditude, where the north pole points in the z-axis.
//Points will be plotted relative to the camera, in terms of a globe with its north orientated in the camera's direction.
//All angles should be in radians unless stated.

function pol2xyz(r,theta,phi){
	return [r*Math.cos(phi)*Math.cos(theta),
			r*Math.cos(phi)*Math.sin(theta),
			r*Math.sin(phi)
	]
}
//theta is the angle in the horizontal plane. -pi <= theta < pi
//phi is the angle of elevation

function xyz2pol(x,y,z){
	return [mod(x,y,z),
			loopAngle(Math.asin(y/x)+Math.PI*(x<0)),
			Math.asin(z/mod(x,y,0))
	]
}