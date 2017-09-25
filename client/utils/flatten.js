export default function flatten(arr: Array) {
  return arr.reduce((prev, current) => {
    // console.log("PREV , CURENT", prev, current)    
    if (Array.isArray(prev)) return flatten(prev).concat(current)
    return [prev].concat(current);
  })
}