const { useCallback } = require("react");

function sum(a,b){
    return a+b;
}
function sumWithMsg(clbk,msg){
    const result=clbk(15,30);
    const fresult="HI"+" "+msg+" "+"Your score is=" + result;
    console.log(fresult);
}

sumWithMsg(sum,"Mr.Ayush");