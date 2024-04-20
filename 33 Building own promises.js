// you can use the Promise with new keyword to make your own promises
// Unfortunately, the syntax here takes some getting used to
//Promise accepts a single function (call it fn) as an argument
// - fn accepts two functions, resolve and reject
// - pass resolve value for the promise to resolve to that value
// - pass reject value for the promise to reject to that value



function wait (duration){
const p = new Promise(function(resolve,reject){
    setTimeout(() => {
        const rand = Math.random()
        if(rand<0.5){
            resolve("This is resolved value")
        }
        else{
            reject("this is rejected value")
        }
    }, duration);
    })
return p 
}


async function demo(){
    console.log("Hiiii")
    const value = await wait(1000)
    console.log(value)
    console.log("there")
}


 demo().then(()=>console.log("Promise executed")).catch((e)=>console.log(e))