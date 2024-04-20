//The nullish coalescing operator (??) is a logical operator that returns its right hand operand when its left hand
// operand when its left hand operand is null or undefined, and otherwise returns its left-hand operand. THis is a way 
// to handle default values more predictably than using the OR (||) operator  

console.log(false || "anoymous")
console.log(0 || "anoymous")
console.log("" || "anoymous")


console.log(false ?? "anoymous") 
console.log(0 ?? "anoymous")
console.log("" ?? "anoymous")
console.log(undefined ?? "anoymous")
console.log(null ?? "anoymous")
