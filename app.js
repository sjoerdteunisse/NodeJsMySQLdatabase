



async function f (c){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(c + c * 2);
        },100);
    });
}




async function asyncCall() {
    console.log('calling');
    var result = await f(20);
    console.log(result);
    // expected output: 'resolved'
  }
  
  
  asyncCall();









































