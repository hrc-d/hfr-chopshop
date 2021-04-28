const polygons = require('../polygons');

test('adding two arrays', () =>{
  expect(polygons.arrSum([1,2],[3,4])).toEqual([4,6]);
});

test('arrMean', () =>{
  expect(polygons.arrListMean([[1,1],[1,5],[4,1],[4,5]])).toEqual([2.5,3])
});

test('difference between two lists of arrays', () =>{
  expect([[1,1],[1,5],[4,1],[4,5]].map(x=>polygons.arrDiff(x,[2.5,3]))).toEqual([[-1.5,-2],[-1.5,2],[1.5,-2],[1.5,2]]);
});

test('clockwise sort', ()=>{
  expect(polygons.clockwiseSort([[1,1],[1,5],[4,1],[4,5]])).toEqual([[1,5],[4,5],[4,1],[1,1]]);
});
