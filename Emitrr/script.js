const startBtn=document.querySelector('.start-btn');
const loginbtn=document.querySelector('.login-btn')
const popupInfo=document.querySelector('.popup-info');
const popupLogin=document.querySelector('.popup-login')
const exitBtn=document.querySelector('.exit-btn');
const exitBtn2=document.querySelector('.exit-btn2');
const main=document.querySelector('.main');
const continueBtn=document.querySelector('.continue-btn');
const quizSection=document.querySelector('.quiz-section');
const quizBox=document.querySelector('.quiz-box');
const resultBox=document.querySelector('.result-box');
const resultBox2=document.querySelector('.result-box2');
const tryAgainBtn=document.querySelector('.tryAgain-btn');
const goHomeBtn=document.querySelector('.goHome-btn');
const performlogin=document.querySelector('.perform-login-btn');
const performregister=document.querySelector('.perform-register-btn');
const logoutbtn=document.querySelector('.logout');
const myname=document.querySelector('.myname');
const registerbtn=document.querySelector('.perform-register-btn');
const popupreg=document.querySelector('.popup-register')
const regbackend=document.querySelector('.register-backend-btn');




regbackend.onclick=()=>{
    const url = 'http://127.0.0.1:8000/apiv1/myusers/register/';
    const username = document.getElementById('regusername').value;
    const email=document.getElementById('regemail').value;
    const password = document.getElementById('regpassword').value;
const data = {
    username: username,
    email: email,
    password: password,
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('done')
        console.log('Registration successful:', data);
    })
    .catch(error => {
        console.error('Registration error:', error);
    });



}


registerbtn.onclick = ()=>{
    popupLogin.classList.remove('active');
    main.classList.remove('active');
    popupreg.classList.add('active')
    main.classList.add('active');
}



window.onload = function() {
    checkAccessToken();
    loadquestions();
    //loadlanguages();
   
};

function checkAccessToken() {
    // Retrieve the access token from localStorage
    const accessToken = localStorage.getItem('access_token');
    const username=localStorage.getItem('user_name')

    // Check if the access token exists
    if (accessToken) {
        // Access token is present, perform actions (e.g., redirect)
        console.log('Access token found:', accessToken);
        loginbtn.classList.add('active');
        popupLogin.classList.remove('active');
        main.classList.remove('active');
        logoutbtn.classList.remove('active');
        myname.textContent=`Hii!! ${username}`
        loadquestions();
        // Redirect or perform additional actions as needed
        // window.location.href = '/dashboard'; // Replace with the actual URL
    } else {
        console.log('Access token not found.');
        loginbtn.classList.remove('active');
        logoutbtn.classList.add('active');
        
        // Access token is not present, no action required
    }
}



logoutbtn.onclick = () =>{
    logoutbtn.classList.add('active');
    localStorage.removeItem('access_token');
    loginbtn.classList.remove('active');

}

performlogin.onclick = () =>{
    const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Create an object with the login data
            const loginData = {
                username: username,
                password: password
            };

            // Make a POST request to your login endpoint
            fetch('http://127.0.0.1:8000/api/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            })
            .then(response => {
                if (response.ok) {
                    // Parse and log the JSON response (token)
                    return response.json();
                } else {
                    console.error('Login failed. Please check your credentials.');
                    // Handle login failure as needed
                }
            })
            .then(data => {
                // Log the parsed JSON data (token)
                console.log('Access token:', data.access);

                // Store the access token in localStorage (or sessionStorage)
                localStorage.setItem('access_token', data.access);
                localStorage.setItem('user_name',username)

                loginbtn.classList.add('active');
                popupLogin.classList.remove('active');
                main.classList.remove('active');
                logoutbtn.classList.remove('active');
                myname.textContent=`Hii ${username}`
                loadquestions();
                // Redirect or perform additional actions as needed
                // window.location.href = '/dashboard'; // Replace with the actual URL
            })
            .catch(error => {
                console.error('Error during login:', error);
                // Handle error as needed
            });
        
    }





loginbtn.onclick = () =>{
    popupLogin.classList.add('active');
    main.classList.add('active');
}


startBtn.onclick = () =>{

    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () =>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}
exitBtn2.onclick = () =>{
    quizSection.classList.remove('active');
    quizBox.classList.remove('active');
    main.classList.remove('active');
    questionCount=0;
    questionNumb=1;
    userScore=0;
     quizData=[];
     leaderboardData = [];
}

continueBtn.onclick = () =>{
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
}

tryAgainBtn.onclick = () =>{
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');
    resultBox2.classList.remove('active');
    questionCount=0;
    questionNumb=1;
    userScore=0;
    quizData=[]
    leaderboardData=[]
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
}

goHomeBtn.onclick = () =>{
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');
    resultBox2.classList.remove('active');
    questionCount=0;
    questionNumb=1;
    userScore=0;
    leaderboardData=[]
    showQuestions(questionCount);
    questionCounter(questionNumb);
}


let questionCount=0;
let questionNumb=1;
let userScore=0;
let quizData=[];

const nextBtn=document.querySelector('.next-btn');

nextBtn.onclick = () =>{
    if(questionCount<questions.length-1){
        questionCount++;
        showQuestions(questionCount);
        
        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');
    }
    else{
        showResultBox();
        
    }
}

const optionList=document.querySelector('.option-list');

//getting questions ans options from array
function showQuestions(index){
    const questionText=document.querySelector('.question-text');
    questionText.textContent=`${questions[index].numb}. ${questions[index].question}`;

    let optionTag=`<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;
    
    optionList.innerHTML=optionTag;

    const option=document.querySelectorAll('.option');
    for(let i=0;i<option.length;i++){
        option[i].setAttribute('onclick','optionSelected(this)')
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer === correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        quizData.push({
            [questions[questionCount].numb]: correctAnswer
        });
        headerScore();
    } else {
        answer.classList.add('incorrect');

        // Check if the correct answer is not already selected
        const correctOption = Array.from(optionList.children).find(option =>
            option.textContent === correctAnswer && !option.classList.contains('correct')
        );

        // If the correct answer is found, select it
        if (correctOption) {
            correctOption.setAttribute('class', 'option correct');
        }
    }

    // Disable all options after the user has selected an answer
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}


function questionCounter(index){
    const questionTotal=document.querySelector('.question-total');
    questionTotal.textContent=`${index} of ${questions.length} Questions`;
}

function headerScore(){
    const headerScoreText=document.querySelector('.header-score');
    headerScoreText.textContent=`Score:${userScore}/${questions.length}`;
}

function showResultBox(){

    

    console.log(quizData)
    // Assuming quizData is already populated

const url = 'http://127.0.0.1:8000/apiv1/myusers/submission/';

// Retrieve the access token from localStorage
const accessToken = localStorage.getItem('access_token');

// Check if the access token is available
if (!accessToken) {
    console.error('Access token not found in localStorage');
} else {
    // Create the request object with the necessary headers and method
    const transformedQuizData = {};
    quizData.forEach(item => {
        const key = Object.keys(item)[0];
        transformedQuizData[key] = item[key];
    });
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({...transformedQuizData }),
    };

    // Make the fetch request
    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Submission successful:', data);
        })
        .catch(error => {
            console.log('Error submitting quiz data:', error);
        });
}

const apiUrl = 'http://127.0.0.1:8000/apiv1/myusers/leaderboard/';

// Retrieve access token from local storage

// Check if the access token is available
if (!accessToken) {
    console.error('Access token not found in local storage');
} else {
    // Fetch data from the API with the access token in the Authorization header
    fetch(apiUrl, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            // Log the response status
            console.log('Response Status:', response.status);

            // Check if the response is successful (status code in the range 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON response
            return response.json();
        })
        .then(responseData => {
            // Log the raw response data
            console.log('Raw Response Data:', responseData);

            // Check if the "data" property exists and is an array
            if (Array.isArray(responseData.data)) {
                // Example: Add the leaderboard data to a list
                
                const leaderboardData = responseData.data.map(item => ({ ...item }));
                // Log the processed leaderboard data
                console.log('Processed Leaderboard Data:', leaderboardData);

                const leaderboardTbody = document.querySelector('.leaderboard');
                while (leaderboardTbody.firstChild) {
                    leaderboardTbody.removeChild(leaderboardTbody.firstChild);
                }
                // Iterate over the fetched data and create rows
                leaderboardData.forEach((data, index) => {
                    // Create a new row
                    const newRow = document.createElement('tr');
        
                    // Add rank, name, and score cells
                    const rankCell = document.createElement('td');
                    rankCell.textContent = (index + 1).toString(); // Rank starts from 1
                    newRow.appendChild(rankCell);
        
                    const nameCell = document.createElement('td');
                    nameCell.textContent = data["0"]; // Assuming "0" represents the name
                    newRow.appendChild(nameCell);
        
                    const scoreCell = document.createElement('td');
                    scoreCell.textContent = data["1"]; // Assuming "1" represents the score
                    newRow.appendChild(scoreCell);
        
                    // Append the new row to the existing leaderboard tbody
                    leaderboardTbody.appendChild(newRow);

                   
                });
                

            } else {
                console.log('Unexpected data structure. Expected an object with a "data" property that is an array.');
            }
        })
        .catch(error => {
            console.log('Error fetching leaderboard:', error);
        });
}



    quizBox.classList.remove('active');
    resultBox.classList.add('active');
    resultBox2.classList.add('active');



    const scoreText=document.querySelector('.score-text');
    scoreText.textContent=`Your Score ${userScore} out of ${questions.length}`;

    const ciruclarProgress=document.querySelector('.circular-progress');
    const progressValue=document.querySelector('.progress-value');
    let progressStartValue=-1;
    let progressEndValue=(userScore/questions.length)*100;
    console.log(userScore)
    console.log(questions.length)
    let speed=20;

    let progress=setInterval(()=>{
        progressStartValue++;

        progressValue.textContent=`${progressStartValue}%`;
        ciruclarProgress.style.background = `conic-gradient(#c40094 ${progressStartValue*3.6}deg, rgba(255,255,255,.1) 0deg)`;
        if(progressStartValue>=progressEndValue){
            clearInterval(progress);
        }
    },speed);
   
      
}