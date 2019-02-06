/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
*/

let pattern=/Shania Twain/ig; 
let str="This str has shania twain again Shania Twain";

console.log('shania twain:',pattern.test(str));

let matches=str.match(pattern); 
console.log(matches); //returns array with matches

pattern=/[a-zA-Z1-9]/;
str="asfasfeuasdjsdfjsdfsldfjsldfj111119zABBB";

console.log(str);
console.log(pattern.test(str));

pattern=/^Stevie .* Wonder$/;
str='Stevie AAA Wonder';

console.log(str);
console.log(pattern);
console.log(pattern.test(str));

pattern=/^Stevie .+ Wonder$/; //* -> zero or more
str='Stevie A Wonder'; //zero or more
//+ means one or more
console.log(str);
console.log(pattern);
console.log(pattern.test(str));
/*
 \d ->digits  0,1,2,3,4... 11
 \D -> non digits a,b,c,d,e  \D\D aa or bb cd ef and so on
 \s ->means any space characters '' '    ' \r \n \t
 \S ->non space characters
 \w ->Any alpha numeric characters. a-zA-Z1-9
 
*/

pattern=/\w/g; //* -> zero or more
str='Stevie A Wonder some more wordssss !'; //zero or more
console.log(str);
console.log(pattern);
console.log(str.match(pattern));


pattern=/\s/g; // \s means space characters
str='Stevie A Wonder some more \t wordssss \r\n !'; //zero or more
console.log(str);
console.log(pattern);
console.log(str.match(pattern));

//returns boolean true or false;

////Regular expression exercise.
///We will test if string contains phone number or not. Phone numbers should be this format (123)456-7890, (345)567-7878 etc. the function should return boolean
function checksForPhoneNumber(str){
    let phonePattern=/\d*\(\d{3}\)\d{3}-\d{4}/;
    //    \d* -> zero or more digits
    //    \d{3} -> strictly 3 digits
    //    \d{4} -> strictly 4 digits
    //    \d{2,5} -> 2, 3, 4 or 5 digits 11,111,2222,11111 all passes
    return phonePattern.test(str);
}

str='(343)344-3334';
str2='This string has (343)344-33345';
str3='(343)344-3334';
str4='(343)334';

console.log(str);
console.log(checksForPhoneNumber(str));

console.log(str2);
console.log(checksForPhoneNumber(str2));

console.log(str3);
console.log(checksForPhoneNumber(str3));

console.log(str4);
console.log(checksForPhoneNumber(str4));

/*

Given a string with social security number, you will have to censor out(or put *) the last 4 digits of social security number.

 'This string has a ss# 123-45-6789'
  will output to 'This string has a ss# 123-45-****'

  'two ss# 123-45-6789  ss# 456-78-9999' will output
  'two ss# 123-45-****  ss# 456-78-****'
*/

str1='This string has a ss# 123-45-6789';
str2='two ss# 123-45-6789  ss# 456-78-9999';
str3='three ss# 123-45-6789 blah blah ss# 456-78-9999 blah blah ss# 345-67-8999';

function censorSocialSecurity(str){
    let pattern = /[\d]{3}-[\d]{2}-[\d]{4}/; //pattern for ss#
    //pattern.test(str)? output = str.replace(/-[\d]{4}/g,"-****") : str;
    //if(pattern.test(str)){
       //There is a social security number. so censor it
       str=str.replace(/-[\d]{4}/g,"-****");
    //}
    return str;
}

console.log(str1);
console.log(censorSocialSecurity(str1));

console.log(str2);
console.log(censorSocialSecurity(str2));

console.log(str3);
console.log(censorSocialSecurity(str2));

/*
Given a string that might contain one or more phone numbers; you will have to extract the phone numbers and return as a list.

For example, 'This str has 2 phone numbers (123)456-7777 and 
(456)777-8888' will return :

'phone 1: (123)456-7777
 phone 2: (456)777-8888

 etc. */

 //the phone number will have stricly (ddd)ddd-dddd pattern

 str1='This str has 2 phone numbers (123)456-7777 and (456)777-8888'; 718-343-34343
 str2='This str has 3 phone numbers (123)456-7777 and (456)777-8888 and (789)123-4567';
 str3='This str has invalid phone number (123)444--5555'; // notice --

 function extractPhoneNumbers(str){
    let outputStr='';
    let phonePattern=/\(\d{3}\)\d{3}-\d{4}/g; //pattern for phone
    matchedArr=str.match(phonePattern);
    if(matchedArr!=null){
        for(let i in matchedArr){
            outputStr +='phone '+(Number(i)+1)+':'+matchedArr[i]+'\n';
        }
    }
    return outputStr;
 }

 console.log(str1);
 console.log(extractPhoneNumbers(str1));

 console.log(str3);
 console.log(extractPhoneNumbers(str3));


 str1='abc@def'; //wrong email
 str2='abc@def.com'; //right email
 str3='abc@def.#$%'; //wrong email

 ///pattern is characters followd by @ followed by characters followed by . followed by more characters

 function checksIfEmail(str){
     //abcded... A...Z 1...9
    let emailPattern=/[a-zA-Z1-9]+@[\w]+\.[\w]+/;
    return emailPattern.test(str);
 }
 // \w means it has to be a alphanumeric characters. no special characters will pass

 console.log(str1);
 console.log(checksIfEmail(str1));

 console.log(str2);
 console.log(checksIfEmail(str2));

 console.log(str3);
 console.log(checksIfEmail(str3));

str1=`
 This string has lots of emails abc@def.com
 This string has lots of emails abc@def.net
 This string has lots of emails abc@def.org
 This string has lots of emails abc@def
 This string has lots of emails abc@def.echo
 This string has lots of emails #$%@def.com
`;

////We will extract all the emails from our text
 function extractEmails(str){
   let emailPattern=/[a-zA-Z1-9]+@[\w]+\.[\w]+/g;
   let outputArr=str.match(emailPattern);
   console.log(outputArr);
   let outputStr='';
   if(outputArr!=null){
       for(let i in outputArr){
          outputStr +='email'+i+':'+outputArr[i]+'\n';
       }
   }
   return outputStr;

   //return emailPattern.test(str);
}

console.log(str1);
console.log(extractEmails(str1));




