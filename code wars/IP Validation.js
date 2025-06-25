

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal
// format. IPs should be considered valid if they consist of four octets, 
// with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// solution: 

  function isValidIP(str){
    const parts=str.split('.');
    if(parts.length !== 4){
        return false;
    }
    for(let i=0; i< parts.length; i++){
        const part=parts[i]
        if(part === ''){
            return false;
        }
        for(let char of part){
            if(char < '0' || char > '9'){
                return false;
            }
        }
        
        if(part.length >1 && part[0]==='0'){
            return false
        }
        const number=Number(part)
        if(number < 0 || number > 255){
            return false;
        }
    }
    return true;
  }