const quizDB = [
    {
        question:"Ques1:MS-Word is an example of _____",
        a:"A) An operating system",
        b:"B) A processing device",
        c:"C) Application software",
        d:"D) An input device",
        ans:"c"
    },
    
    {
        question:"Ques2:A computer cannot boot if it does not have the _____",
        a:"A) Compiler",
        b:"B) Loader",
        c:"C) Operating system",
        d:"D) Assembler",
        ans:"c"
    },
    
    {
        question:"Ques3:________ is the process of dividing the disk into tracks and sectors",
        a:"A) Tracking",
        b:"B) Formatting",
        c:"C) Crashing",
        d:"D) Allotting",
        ans:"b"
    },
    
    {
        question:"Ques4:Junk e-mail is also called ______",
        a:"A) Spam",
        b:"B) Spoof",
        c:"C) Spool",
        d:"C) Sniffer script",
        ans:"a"
    },
    
    {
        question:"Ques5:Microsoft Office is an example of a",
        a:"A) Closed source software",
        b:"B) Open source software",
        c:"C) Horizontal market software",
        d:"D) vertical market softwar",
        ans:"c"
    }
]

const question = document.querySelector('#question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('.Submit');

const answers = document.querySelectorAll('.ans');
console.log(answers);
var score = 0;
var countQues = 0;

function loadQues(){
    question.innerText = quizDB[countQues].question;
    option1.innerText = quizDB[countQues].a;
    option2.innerText = quizDB[countQues].b;
    option3.innerText = quizDB[countQues].c;
    option4.innerText = quizDB[countQues].d;
}

loadQues();

let ans;
let answer;
const getValue = (clicked) => {
    answer = clicked;
    // console.log(answer);
    ans = document.getElementById(answer).value;
}

// const Next = ()  => {
//     document.getElementById(answer).style.backgroundColor = "#fff";
//     document.getElementById(check).style.backgroundColor = "#fff";
//     if(countQues<quizDB.length){
//         loadQues();
//     }
//     else{
//         document.querySelector('.showArea').style.contentVisibility = "visible";
//         document.querySelector('.showText').innerText = "You Scored " + score + "out of " + quizDB.length ;
//     }
// }
let check;
const getAnswer = () => {
    if(ans === quizDB[countQues].ans && countQues<quizDB.length){
        score++;
        document.getElementById(answer).style.backgroundColor = "#9ef01a";   
        countQues++;
    }else if(ans != quizDB[countQues].ans && countQues<quizDB.length){
        document.getElementById(answer).style.backgroundColor = "#ef3f2a";
        for(let i=0;i<4;i++){
            if(answers[i].value === quizDB[countQues].ans){
                check = answers[i].id;    
            }
        }  
        document.getElementById(check).style.backgroundColor = "#9ef01a";
        countQues++;
    }
}
function Next(){
    if(countQues<quizDB.length){
        loadQues();
        document.getElementById(answer).style.backgroundColor = "#fff";
        document.getElementById(check).style.backgroundColor = "#fff";
    }else{
        document.querySelector('.showText').innerText = "your score is  " + score + "  out of " + quizDB.length;
        document.querySelector('.showArea').style.contentVisibility = "visible";
        document.querySelector('.Next').style.visibility = "hidden";
        document.querySelector('.Try').style.visibility = "visible";      
        // document.querySelector('.Next').innerText = "Try Again";
        // document.querySelector('.Next').script.onclick = "location.reload()"
    }
}