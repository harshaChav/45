

function reverseANumberJs1(){
    let resultIs1=0;
    let inputNumJs1=document.getElementById("numberInputJs1");
    let valueInputNumJs1=inputNumJs1.value;

    while(valueInputNumJs1>0){
        rightmostDigit=valueInputNumJs1%10;
        resultIs1=resultIs1*10+rightmostDigit;
        valueInputNumJs1= Math.floor(valueInputNumJs1/10);
    }

    document.getElementById("outputjs1").innerHTML=resultIs1;
    

}

function palindromeJs2(){
    let inputStrJs2=document.getElementById("numberInputJs2");
    let valueInputNumJs2=inputStrJs2.value;
    const lengthStrJs2=valueInputNumJs2.length;
    // document.getElementById("outputjs2").innerHTML=lengthStrJs2;
    for(let index=0;index<Math.floor(lengthStrJs2/2);index++){
        if(valueInputNumJs2[index]===valueInputNumJs2[lengthStrJs2-1-index]){
            document.getElementById("outputjs2").innerHTML='It is a palindrome';
         }
         else{ 
            document.getElementById("outputjs2").innerHTML='It is not a palindrome';
        }
    
   
    }

}

// function generateCombinations(str) {
//     let result = [];
  
//     // Define a recursive function to generate combinations
//     function generateHelper(prefix, remaining) {
//       if (remaining.length === 0) {
//         result.push(prefix);
//         return;
//       }
  
//       for (let i = 0; i < remaining.length; i++) {
//         let char = remaining[i];
//         let suffix = remaining.slice(i + 1);
//         generateHelper(prefix + char, suffix);
//       }
//     }
  
//     generateHelper("", str);
//     return result;
//   }
  
  

function substringJs3(){
    let inputStrJs3=document.getElementById("numberInputJs3");
    let valueInputNumJs3=inputStrJs3.value;
    const lengthStrJs3=valueInputNumJs3.length;

    let listOfStrings=[];
    for(let i=0;i<lengthStrJs3;i++){
        for( let j=i+1;j<lengthStrJs3+1;j++){
            listOfStrings.push(valueInputNumJs3.slice(i,j))
        }
    }
    document.getElementById("outputjs3").innerHTML=listOfStrings;


}





function alphabeticalJs4(){
    let inputStrJs4=document.getElementById("numberInputJs4");
    let valueInputNumJs4=inputStrJs4.value;
    // document.getElementById("outputjs4").innerHTML=valueInputNumJs4.split('').sort().join(' ');
    let charArrJs4=valueInputNumJs4.split('');
    let lengthStrJs4=charArrJs4.length;
    for(let i=0;i<lengthStrJs4;i++){
        for(let j = 0; j < lengthStrJs4 - i - 1; j++){
            if(charArrJs4[j] > charArrJs4[j + 1]){
                let temp = charArrJs4[j];
                charArrJs4[j] = charArrJs4[j + 1];
                charArrJs4[j + 1] = temp;
            }
        }
    }
    let joinArrJs4=charArrJs4.join('');
    document.getElementById("outputjs4").innerHTML=joinArrJs4;

}

function firstletterToUpperCase5(){
    let inputStrJs5=document.getElementById("numberInputJs5");
    let valueInputNumJs5=inputStrJs5.value;
    let charArrJs5=valueInputNumJs5.split(' ');
    let lengthStrJs5=charArrJs5.length;
    let result5=[];
    for(let index5=0;index5<lengthStrJs5;index5++){
        result5.push(charArrJs5[index5].charAt(0).toUpperCase()+charArrJs5[index5].slice(1));

    }
    let joinArrJs5=result5.join(' ');
    document.getElementById("outputjs5").innerHTML=joinArrJs5;

}

function longestWordWithinAString6(){
    let inputStrJs6=document.getElementById("numberInputJs6");
    let valueInputNumJs6=inputStrJs6.value;
    let charArrJs6=valueInputNumJs6.split(' ');
    let lengthStrJs6=charArrJs6.length;
    let result6=charArrJs6[0];
    for(let index6=1;index6<lengthStrJs6;index6++){
        if(charArrJs6[index6].length>result6.length){
            result6=charArrJs6[index6];
        }
       

    }
    
    document.getElementById("outputjs6").innerHTML=result6;

}


function noOfVowels7(){
    let inputStrJs7=document.getElementById("numberInputJs7");
    let valueInputNumJs7=inputStrJs7.value;
    // let charArrJs7=valueInputNumJs7.split(' ');
    let lengthStrJs7=valueInputNumJs7.length;
    // document.getElementById("outputjs7").innerHTML=lengthStrJs7
    let vowels7='aeiouAEIOU';
    let vowelCount7=0;
    for(let index7=0;index7<lengthStrJs7;index7++){
        if(vowels7.indexOf(valueInputNumJs7[index7])!==-1){
            vowelCount7+=1;
        }
       

    }
    
    document.getElementById("outputjs7").innerHTML=vowelCount7;

}


function primeOrNot8(){
    let inputStrJs8=document.getElementById("numberInputJs8");
    let valueInputNumJs8=inputStrJs8.value;
    let parseInt8=parseInt(valueInputNumJs8);
    function inner8(parseInt8){
        if(parseInt8===0 || parseInt8===1){
            return "Not a Prime Number";
    
        }
        else if(parseInt8===2){
            return "Is a Prime Number";
    
        }
        else{
            for(let num=2;num<parseInt8;num++){
                if(parseInt8%2===0){
                    return "Not a Prime Number";

                }
            }
            return "Is  a Prime Number";
    
        }

    }
    document.getElementById("outputjs8").innerHTML=inner8(parseInt8);

}

function argAndReturn9(){
    let inputValue9=10;
    // let inputValue9=prompt();
    document.getElementById("outputjs9").innerHTML=typeof(inputValue9);



}

function getIdentityMatrix10(){
    // let resultmatrixJs10=[];
    let inputStrJs10=document.getElementById("numberInputJs10");
    let valueInputNumJs10=inputStrJs10.value;
    let parseInt10=parseInt(valueInputNumJs10);
    for(let indexI10=0;indexI10<parseInt10;indexI10++){
        // let resultRowIndex10=[];
        for(let indexJ10=0;indexJ10<parseInt10;indexJ10++){
            if(indexI10===indexJ10){
                // resultRowIndex10.push(1);
                document.getElementById("outputjs10").innerHTML+=1;
            }
            else{
                // resultRowIndex10.push(0);
                document.getElementById("outputjs10").innerHTML+=0;

            }
         
        }
        // resultmatrixJs10.push(resultRowIndex10);
        document.getElementById("outputjs10").innerHTML+="<br>";
       
    }
    
   
    // console.log(resultmatrixJs10);
    // document.getElementById("outputjs10").innerHTML=resultmatrixJs10;
}

function secondLowestAndSecondGreatest11(){
    let inputStrJs11=document.getElementById("numberInputJs11");
    let valueInputNumJs11=inputStrJs11.value;
    let charArr11=valueInputNumJs11.split(',');
    let intArr11=[];
    let lengthStrJs11=charArr11.length;
    for(let i11=0;i11<lengthStrJs11;i11++){
        intArr11.push(parseInt(charArr11[i11]))

    }
    let outputArr11=[];
    outputArr11.push(intArr11[1]);
    outputArr11.push(intArr11[(lengthStrJs11)-2]);
    document.getElementById("outputjs11").innerHTML=outputArr11;
}

function perfectNumber12(){
    let inputStrJs12=document.getElementById("numberInputJs12");
    let valueInputNumJs12=inputStrJs12.value;
    let intValue12=parseInt(valueInputNumJs12);
    let factorArr12=[];
    for(let i12=1;i12<intValue12;i12++){
        if(intValue12%i12===0){
            factorArr12.push(i12)
        }
    }
    var sum=0;
    
    lenOfArr12=factorArr12.length;
    for(let iA12=0;iA12<lenOfArr12;iA12++){
        sum=sum+factorArr12[iA12];

    }
    
    if(sum===intValue12){
        document.getElementById("outputjs12").innerHTML="It is a Perfect Number";

    }
    else{
        document.getElementById("outputjs12").innerHTML="It is Not a Perfect Number";
    }

}

function factorsOfPositiveInteger13(){
    let inputStrJs13=document.getElementById("numberInputJs13");
    let valueInputNumJs13=inputStrJs13.value;
    let intValue13=parseInt(valueInputNumJs13);
    let outputArr13=[];
    for(let i13=1;i13<=intValue13;i13++){
        if(intValue13%i13===0){
            outputArr13.push(i13)
        }
    }
    document.getElementById("outputjs13").innerHTML=outputArr13;
}



function convertAmountToCoins14(){
    let amount14=parseInt(document.getElementById("numberInputJs14").value);
    const coinValues14 = [25, 10, 5, 2, 1];
    if(amount14<=0){
        document.getElementById("outputjs14").innerHTML="Enter number greater than 0"

    }
    const coins14 = [];
  
    for (let i14 = 0; i14 < coinValues14.length; i14++) {
      while (amount14 >= coinValues14[i14]) {
        coins14.push(coinValues14[i14]);
        amount14 -= coinValues14[i14];
      }
    }
  
    document.getElementById("outputjs14").innerHTML=coins14;

}




// function convertAmountToCoins14(){
//     let inputStrJs14=document.getElementById("numberInputJs14");
//     let valueInputNumJs14=inputStrJs14.value;
//     let charArr14=valueInputNumJs14.split(',');
//     let intArr14=[];
//     let lengthStrJs14=charArr14.length;
//     for(let i14=0;i14<lengthStrJs14;i14++){
//         intArr14.push(parseInt(charArr14[i14]))

//     }
    
//     let resArr14=[];
//     let amount14=intArr14[0];
//     // document.getElementById("outputjs14").innerHTML= amount14;
//     for(let i14=1;i14<lengthStrJs14;i14++){
//         if(intArr14[i14]>amount14){
//             resArr14.push(intArr14[i14]);
//             amount14=amount14-intArr14[i14];
//         }
//         else if (amount14===0){
//             document.getElementById("outputjs14").innerHTML=resArr14;
            
//         }
//         else{
//             continue;
//         }

//     }
//     document.getElementById("outputjs14").innerHTML=resArr14;
    
   

// }

function powerOfNumber15(){
    let inputStrJs15=document.getElementById("numberInputJs15");
    let valueInputNumJs15=inputStrJs15.value;
    let charArr15=valueInputNumJs15.split(',');
    let lengthStrJs15=charArr15.length;
    let intArr15=[];
    for(let i15=0;i15<lengthStrJs15;i15++){
        intArr15.push(parseInt(charArr15[i15]))
    }
    let result15=1;
    for(let i15=0;i15<intArr15[1];i15++){
        result15*=intArr15[0];
    }
    document.getElementById("outputjs15").innerHTML=result15;

    
}

function uniqueCharactersInAString16(){
    let inputStrJs16=document.getElementById("numberInputJs16");
    let valueInputNumJs16=inputStrJs16.value;
    let uniStr16="";
    for(let i16=0;i16<valueInputNumJs16.length;i16++){
        if(uniStr16.includes(valueInputNumJs16[i16])===false){
            uniStr16+=valueInputNumJs16[i16];
        }
    }
    document.getElementById("outputjs16").innerHTML=uniStr16;
    

}

function noOfOccurrencesInAString17(){
    let inputStrJs17=document.getElementById("numberInputJs17");
    let valueInputNumJs17=inputStrJs17.value;
    let lengthStrJs17=valueInputNumJs17.length;
    if(lengthStrJs17===0){
        document.getElementById("outputjs17").innerHTML="Invalid String";

    }
    // let result17;
    for(let i17=0;i17<lengthStrJs17;i17++){
        let countOcc17=0;
        for(let j17=0;j17<lengthStrJs17;j17++){
            if(valueInputNumJs17[i17]===valueInputNumJs17[j17] && i17>j17){
                break;
            }
            if(valueInputNumJs17[i17]===valueInputNumJs17[j17]){
                countOcc17++;

            }
            if(countOcc17>0){
                console.log(`${valueInputNumJs17[i17]} occurs ${countOcc17} times `);
                
            }
        }
       
    }

}


// function searchingArrUsingBinarySearch18(){
//     let arrInput18=document.getElementById("arrayInputJs18");
//     let numInput18=document.getElementById("elementInputJs18");
//     let arrSplit18=arrInput18.split(',');
//     let arrLenght18=arrSplit18.length;
//     let intArr18=[];
//     for(let i18=0;i18<arrLenght18;i18++){
//         intArr18.push(parseInt(arrSplit18[i18]))
//     }
//     let numValueJs18=parseInt(numInput18.value);
//     console.log(numValueJs18);
//     let middleElePos18=Math.floor((arrLenght18)/2);
//     if(intArr18[middleElePos18]===numValueJs18){
//         console.log(middleElePos18);
       


//     }



// }
function searchingArrUsingBinarySearch18(){
    function binarySearch(arr, val) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === val) {
        return mid;
      } else if (arr[mid] < val) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1;
  }
  document.getElementById("outputjs18").innerHTML=binarySearch([1,2,3,4,5,6],3);

}


function arrElementsLargerThanNumber19(){
    let inputNumJs19=parseInt(document.getElementById("numberInputJs19").value);
    // document.getElementById("outputjs19").innerHTML=inputNumJs19;
    let strInput19=document.getElementById("arrInputJs19").value;
    let strArrInput19=strInput19.split(',');
    let arrLength19=strArrInput19.length;
    let intArr19=[];
    for(let i19=0;i19<arrLength19;i19++){
        intArr19.push(parseInt(strArrInput19[i19]));
    }
    // document.getElementById("outputjs19").innerHTML=intArr19;
    let resArr19=[];
    for(let i19=0;i19<arrLength19;i19++){
        if(intArr19[i19]>inputNumJs19){
            resArr19.push(intArr19[i19]);

        }

    }
    document.getElementById("outputjs19").innerHTML=resArr19;
}

function randomChar20(){
    let inputNumJs20=parseInt(document.getElementById("numberInputJs20").value);
    let charArr20=document.getElementById("charInputJs20").value;
    let charLen20=charArr20.length;
    let resultStr20="";
    for(let i20=0;i20<inputNumJs20;i20++){
        resultStr20+=charArr20.charAt(Math.floor(Math.random()*charLen20));

    }
    document.getElementById("outputjs20").innerHTML=resultStr20;

}

function allPossibleSubsets21(){
    let numberInputJs21=parseInt(document.getElementById("numberInputJs21").value);
    let arrInputJs21=document.getElementById("arrInputJs21").value;
    let strArrInput21=arrInputJs21.split(',');
    let arrLength21=strArrInput21.length;
    let intArr21=[];
    for(let i21=0;i21<arrLength21;i21++){
        intArr21.push(parseInt(strArrInput21[i21]));
    }
    function getSubsets(arr, len) {
        const result = [];
        const helper = (startIndex = 0, subset = []) => {
          if (subset.length === len) {
            result.push(subset);
            return;
          }
          for (let i = startIndex; i < arr.length; i++) {
            helper(i + 1, [...subset, arr[i]]);
          }
        };
        helper();
        return result;
      }
      console.log(getSubsets(intArr21,numberInputJs21));
    

}

// function getSubsets(arr, len) {
//     const result = [];
//     const helper = (startIndex = 0, subset = []) => {
//       if (subset.length === len) {
//         result.push(subset);
//         return;
//       }
//       for (let i = startIndex; i < arr.length; i++) {
//         helper(i + 1, [...subset, arr[i]]);
//       }
//     };
//     helper();
//     return result;
//   }
  
function noOfOccOfLetter22(){
    let charArrInputJs22=document.getElementById("charArrInputJs22").value;
    let charInputJs22=document.getElementById("charInputJs22").value;
    let charLen22=charArrInputJs22.length;
    let countOcc22=0;
    for(let i22=0;i22<charLen22;i22++){
        if(charArrInputJs22.charAt(i22)===charInputJs22){
            countOcc22++;
        }
    }
    document.getElementById("outputjs22").innerHTML=countOcc22;

}