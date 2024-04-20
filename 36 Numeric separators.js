//Numeric separators enhance readability by allowing underscores inserted between digits in numeric literals

let numbers  = 900_000_00_0000
console.log(Number(numbers))

//The idea of separating large numeric values with a special character might sound 
// familiar on account of it being a syntax present in multiple other languages, such as 
// Java, Python, Ruby etc. From what I can tell, numeric separators are at their best when 
// creating shared constants that will not change and are very large, have many repeated digits 
// and/or can be ambiguous.

