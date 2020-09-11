
Promise.resolve(1).then(res =>{
   console.log(1,res);
}).catch(err =>{
    console.log(2,err);
 }).then(res =>{
    console.log(3,res);
 })
