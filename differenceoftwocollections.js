// Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

// The collections can contain any character and can contain duplicates.

// Example
// A = [a, a, t, e, f, i, j]

// B = [t, g, g, i, k, f]

// difference = [a, e, g, j, k]



function diff(a, b){
  
  const newSet = new Set([...a, ...b])
  
  const difference = []
  
  for(const nums of a) {
    if(newSet.has(nums) && !b.includes(nums)) {
      
    difference.push(nums)
    }
  }
  
  for(const nums of b) {
    if(newSet.has(nums) && !a.includes(nums)) {
      difference.push(nums)
    }
  }
  
  return [...new Set(difference.sort())]

}