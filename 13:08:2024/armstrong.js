function isArmstrong(num) {
    
    let temp = num;
    let sum = 0;
   
    const numberOfDigits = num.toString().length;

    while (temp > 0) {
      
        let digit = temp % 10;
        
        sum += Math.pow(digit, numberOfDigits);
        
        temp = Math.floor(temp / 10);
    }

    
    return sum === num;
}