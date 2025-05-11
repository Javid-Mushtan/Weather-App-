let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to test rejection
    setTimeout(() => {
        if (success) {
            resolve("Operation Successful! ✅");
        } else {
            reject("Operation Failed! ❌");
        }
    }, 2000);
});

myPromise
    .then(result => console.log(result)) 
    .catch(error => console.error(error))
    .finally(() => console.log("Promise completed! 🎯"));
