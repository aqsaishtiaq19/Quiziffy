const question =[
{
    question: "What is the largest organ of the human body?",
    answers:[
        { text:"Skin", correct:true },
        { text:"blood", correct:false },
        { text:"Hair", correct:false },
    ]
},
{
    question: "After death, which stays viable longer?",
    answers:[
        { text:"Ears", correct:false},
        { text:"Corneas of the eyes", correct:true },
        { text:"Brain Cells", correct:false },
    ]
},

{
    question: "Which animal can live over 150 years?",
    answers:[
        { text:"Horse", correct:false},
        { text:"Elephant", correct:false},
        { text:"Giant tortoise", correct:true },
    ]
},
{
    question: "Which male animal carries young and gives birth?",
    answers:[
        { text:"Seal", correct:false},
        { text:"Seahorse", correct:true },
        { text:"Elephant", correct:false },
    ]
},
{

    question:"How do bats reproduce?",
    answers:[
        {text:"Lay eggs", correct:false},
        {text:"Give birth to live young but don't feed them milk",correct:flase },
        {text:"Give birth and nurse with milk",correct:true} 
     ]
    },
    {
        question:"Body-language experts commonly say feet pointing toward the door suggest the person is... ",
        answer:[
            {text:"Interested ", correct:"false"},
            {text:" Want to leave",correct:"true" },
    
            {text:"want to talk", coorect:"false"},
        ]
    },
    { 
        question:"which is the capital city of punjab?",
        answer:[
            {text:"Islamabad", correct:"false"},
            {text:"Karachi", correct:"false"},
            {text:"Lahore", correct:"true"},
        ]
        }

]
const questionElement = document.getElementsByClassName("question");
const answerElement= document.getElementById("answer"); 