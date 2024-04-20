//js can have generator functions - function that return a Generator that can be lazily looped over
//generators functions are basically functions can pause their execution and then resume their execution
function* evens(n) {
  while (true) {
    yield n;
    n += 2;
  }
}

//make a "Generator"
//will return even numbers 2+
let allEvens = evens(2);
// it gives you the generator object
console.log(allEvens);
// lazily get the first 10 even numbers
for (let index = 0; index < 10; index += 1) {
  console.log(allEvens.next().value);
}

//fibanocci series
function* fibanocci() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let series = fibanocci();
for (let index = 0; index < 10; index += 1) {
  console.log(series.next().value);
}

const allImages = Array.from({ length: 1000 }, (_, i) => i++);
console.log(allImages);

//we can make infinte scroll component in react using generator

// import React, { useState, useEffect, useRef } from 'react';

// // Example generator function simulating fetching data
// function* dataGenerator() {
//   let count = 0;
//   while (true) {
//     yield Array.from({ length: 20 }, () => `Item ${++count}`);
//   }
// }

// const InfiniteScrollComponent = () => {
//   const [items, setItems] = useState([]);
//   const [isFetching, setIsFetching] = useState(false);
//   const fetchMoreRef = useRef(dataGenerator()); // Store generator

//   const fetchMoreItems = () => {
//     if (isFetching) return;
//     setIsFetching(true);

//     setTimeout(() => {
//       const moreItems = fetchMoreRef.current.next().value;
//       setItems((prevItems) => [...prevItems, ...moreItems]);
//       setIsFetching(false);
//     }, 1000); // Simulate async data fetch
//   };

//   useEffect(() => {
//     fetchMoreItems(); // Initial fetch
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop !==
//         document.documentElement.offsetHeight
//       )
//         return;
//       fetchMoreItems();
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isFetching]);

//   return (
//     <div>
//       {items.map((item, index) => (
//         <div key={index}>{item}</div>
//       ))}
//       {isFetching && <div>Loading more...</div>}
//     </div>
//   );
// };

// export default InfiniteScrollComponent;
