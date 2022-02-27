
let c = 0.551915024494;

function calculateNeedlePosition(theta) {
    const r = 100 // radius
    return {
      x: Math.cos(radians(theta)) * r * -1, // -1 inverts the direction of the rotation
      y: Math.sin(radians(theta)) * r
    }
  }

  function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}

function drawBezierSemicircle(x0,y0,x1,y1) {
    // Find the distance between the points (hypotenuse)
    let d = Math.hypot((x0-x1),(y0-y1))
    // Scale the control handle radius by multiplying the diameter by `c`
    let r = d/2 * c
    // The midpoint of the baseline
    let mid = [(x0+x1)/2,(y0+y1)/2]
    // Returns positive 1 if up, and -1 if down
    let direction = ((x0 < x1) ? 1 : -1);
    // Calculate the overall rotation of the circle
    let rot = degrees(Math.atan((y1-mid[1])/(x1-mid[0])));
    // The parallel angle to the rotation
    let rotParallel = radians((direction * 90) + rot);
    // The apex of the semicircle
    let apex = [Math.cos(rotParallel)*(d/2)+mid[0],Math.sin(rotParallel)*(d/2)+mid[1]]
    
    // Each anchor point needed to draw two bezier curves that make up the semicircle
    let p0 = [x0+Math.cos(rotParallel)*r,y0+Math.sin(rotParallel)*r];
    let p1 = [apex[0]-Math.cos(radians(rot))*r*direction,apex[1]-Math.sin(radians(rot))*r*direction]
    let p2 = [apex[0]+Math.cos(radians(rot))*r*direction,apex[1]+Math.sin(radians(rot))*r*direction]
    let p3 = [x1+Math.cos(rotParallel)*r,y1+Math.sin(rotParallel)*r];
    return ({
      structs: `
        M ${x0},${y0}
        L ${x1},${y1}
        M ${mid[0]},${mid[1]}
        L ${apex[0]} ${apex[1]}
      `,
      handles: `
        M ${x0},${y0}
        L ${p0[0]},${p0[1]}
        M ${apex[0]},${apex[1]}
        L ${p1[0]} ${p1[1]} 
        M ${apex[0]},${apex[1]}
        L ${p2[0]} ${p2[1]}
        M ${x1},${y1}
        L ${p3[0]} ${p3[1]}
      `,
      path: `
        M ${x0},${y0}
        C ${p0[0]},${p0[1]}
          ${p1[0]},${p1[1]}
          ${apex[0]} ${apex[1]}
        C ${p2[0]} ${p2[1]}
          ${p3[0]} ${p3[1]}
          ${x1} ${y1}
      `
    });
  }