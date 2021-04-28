//some math functions b/c js doesn't support basic stuff like adding arrays
export const arrSum = (a1,a2) => {
  return a1.map((val,i)=>(val+a2[i]));
}

export const arrDiff = (a1,a2) => {
  return a1.map((val,i)=>(val-a2[i]));
}
export const arrListSum = (arrList) =>{
  return arrList.reduce((a,c)=>arrSum(a,c),[0,0]);
}

export const arrListMean = (arrList) =>{
  return arrListSum(arrList).map(a=>a/(1.0*arrList.length))
}

//sorts the vertices of a CONVEX polygon in clockwise order
export const clockwiseSort = (vertices) => {
  let interiorPoint = arrListMean(vertices);
  // console.log(interiorPoint);
  let vectors = vertices.map(v=>arrDiff(v,interiorPoint));
  // console.log(vectors);
  let vertsWithRad = vectors.map((v,i)=>[...vertices[i],Math.atan2(v[1],v[0])])
  // console.log(vertsWithRad);
  return vertsWithRad.sort((a,b)=>b[2]-a[2]).map(v=>v.slice(0,2));
}
