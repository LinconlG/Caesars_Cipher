function rot13(str) {

    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let regex = /[\?\.\!\,\s]/;
    let novaStr = "";
  
    for(let i = 0; i < str.length; i++){
  
      let letter = str[i];
  
      if(!(regex.test(letter))){
  
        let index = alphabet.indexOf(letter);
        index += 13;
  
        if(index > 25){
          index -= 26;
        }
  
        novaStr += alphabet[index];
  
      }else{
        novaStr += letter;
      }
    }
  
    return novaStr;
  }
  
  rot13("SERR PBQR PNZC");