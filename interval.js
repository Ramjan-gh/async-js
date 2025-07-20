setTimeout(()=>{
    console.log(1);
},4000)

let num = 0;
const clockId  = setInterval(()=>{
    
    num++;
    // console.log('I M U');
    if(num>3){
        clearInterval(clockId);
    }
    console.log(clockId, num);
}, 2000)