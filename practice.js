let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to test rejection
    setTimeout(() => {
        if (success) {
            resolve("Operation Successful! ✅");
        } else {
            reject("Operation Failed! ❌");
        }
    }, 2000); // Simulating a 2-second delay
});

myPromise
    .then(result => console.log(result))  // Runs if resolved
    .catch(error => console.error(error)) // Runs if rejected
    .finally(() => console.log("Promise completed! 🎯")); // Always runs