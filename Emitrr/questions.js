let questions = [];
const langbtn=document.querySelector('#cars')

async function loadquestions() {

    let lang='English'
    try{
    lang=langbtn.value;
    }
    catch{
        lang='English'
    }
    const url = `http://127.0.0.1:8000/apiv1/exercises/questions/${lang}/`;

    try {
        // Retrieve access token from local storage
        const accessToken = localStorage.getItem('access_token');

        // Check if the access token is present
        if (!accessToken) {
            throw new Error('Access token not found in local storage');
        }

        // Fetch request with authorization header
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json' // You can adjust the content type as needed
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        questions = data.map(apiQuestion => ({
            numb: apiQuestion.id,
            question: apiQuestion.text,
            answer: apiQuestion.ans,
            options: apiQuestion.options.split(',').map(option => option.trim())
        }));

        console.log(questions);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Call the function to load questions
