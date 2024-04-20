//why we reuires asychronousity in js
//and the answer is Javascript can only run one bit of code at a single moment in time.
//if we stop at some line for execution for 5 seconds so JS would actually be stopped and it could not do other things.

//js is single-threaded, only bit of code can run at once
//If js actually stopped there, it could not do other things
// - Respond to the events
// - Repaint DOM changes in browser

// async/await
//async functions always return promises
//in async functions, you write the code that looks synchronous, but it doesn't block js
//await pauses the execution of the function not of javascript itself, it doesn't halt all fo javascript, but it will act synchronous in this function
//await waits for promises to resolve and evalutes to its resolved value
//then it resumes execution
