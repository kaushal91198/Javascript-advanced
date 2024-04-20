console.log(Number.MAX_VALUE); //max number in Javascript
console.log(Number.MAX_SAFE_INTEGER); //largest integer that we can safely do math up until this point

console.log(BigInt("5644545454564858545"));

//when we add the n to number it becomes big int

// BigInt: The BigInt type was introduced to represent integers with arbitrary precision. This means you can safely work with very large integers beyond the safe range of the Number type without losing precis

// Usage
// Number is used for most numerical variables, calculations, and operations in JavaScript. It supports standard arithmetic operations and can be used with all built-in math functions.
// BigInt is specifically used when integer values exceed the safe range of Number. It's beneficial for high-precision mathematics, handling large integers such as IDs, timestamps, or calculations requiring precise large integer arithmetic. Arithmetic operations can be performed on BigInt values, but BigInt cannot be mixed with Number in operations directly; explicit conversions are necessary.

// Syntax
// Number: Created simply by writing the numeric value, e.g., let num = 123;.
// BigInt: Created by appending n to the end of an integer literal or by calling the BigInt() function, e.g., let bigIntNum = 123456789012345678901234567890n; or let bigIntNum = BigInt("123456789012345678901234567890");.
// Limitations and Considerations
// Number:
// Precision issues with floating-point arithmetic.
// Not suitable for operations requiring more than 53 bits of integer precision.
// BigInt:
// Cannot be used with the Math object's methods which are designed for Number type.
// Cannot be mixed with Number in operations like addition or comparison without explicit conversion.
// Not universally supported in all environments or JSON format without serialization.
// Compatibility and JSON
// Number is fully compatible with JSON and can be stringified/parsed without issues.
// BigInt is not natively supported in JSON. Serialization and deserialization require custom handling, typically involving converting BigInt values to strings.
