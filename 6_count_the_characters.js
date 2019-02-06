/*
    Write a function that accepts a string, and returns how many times a specific character appears, taking case into account.

    solution("The rain in Spain", "a")       == 2
    solution("Mississippi", "i")             == 4
    solution("Hacking with JavaScript", "i") == 3
*/

// Loop
function solution1(str1, str2){
    let count=0;
    for(let i=0; i<str1.length; i++){
        if(str1[i]==str2){
            count++;
        }
    }
    return count++;
}

// reduce
function solution2(str1, str2) {
    return str1.split('').reduce(
        function(acc,e,i,arr){
           if(e==str2){
               acc++;
           }
           return acc;
        },
        0
    );
}

// reduce (short)
function solution3(str1, str2) {
    return str1.split('').reduce(
        (acc,e)=>e==str2?(acc+=1):acc,0);
}

// delete str2 from str1
function solution4(str1, str2) {
    let count=0;
    while(str1=str1.replace(str2)){
        count++;
    }
    return count;
}

// delete str2 from ste1 using RegExp
function solution5(str1, str2) {
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import huge strings for performance tests

// test solution1()

console.assert(solution1("The rain in Spain", "a")== 2);
console.assert(solution1("Mississippi", "i")==4);
console.assert(solution1("Hacking with JavaScript", "i")==3);

// test solution2()

console.assert(solution2("The rain in Spain", "a")== 2);
console.assert(solution2("Mississippi", "i")==4);
console.assert(solution2("Hacking with JavaScript", "i")==3);

// test solution3()

console.assert(solution3("The rain in Spain", "a")== 2);
console.assert(solution3("Mississippi", "i")==4);
console.assert(solution3("Hacking with JavaScript", "i")==3);

// test solution4()

console.assert(solution4("The rain in Spain", "a")== 2);
console.assert(solution4("Mississippi", "i")==4);
console.assert(solution4("Hacking with JavaScript", "i")==3);

// test solution5()

/*
************************* PERFORMANCE RESULTS *************************
*/