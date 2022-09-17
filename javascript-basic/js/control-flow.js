/**
 * Conditional
 */

let age = 5;
let school = 'School 3';

function checkAgeWithIfElse(age){
    if(age < 18){
        console.log('Under Age')
    }else if(age >= 18 && age < 30){
        console.log('Youth')
    }else if(age >= 30 &&  age < 50){
        console.log('Adult')
    }else{
        console.log('Over Age')
    }
}

function printSchoolGradeWithSwitch(school){
    let result = '';
    switch(school){
        case 'School 1':
            result = 'Grade 1';
            break;
        case 'School 2':
            result = 'Grade 2';
            break;
        default:
            result = 'No grade';
            break;
    }

    console.log(result)
}

checkAgeWithIfElse(age)

printSchoolGradeWithSwitch(school)