//Running two parallel promises

const p1 = new Promise( (resolve) => {
    setTimeout( () => {
        console.log('First promise ...');
        resolve({id : 1, user : "Alice"});
    }, 2000); 
});

const p2 = new Promise( (resolve) => {
    setTimeout( () => {
        console.log('Second promise ...');
        resolve({id : 2, user : "Bob"});
    }, 2000);
});

//Both of the promises are resolved
Promise.all([p1, p2])
    .then(result => console.log(result))
