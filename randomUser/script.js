function fetchUser(){
    showSpinner()
    const url = "https://randomuser.me/api/";
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        hideSpinner()
        displayUser(data.results[0]);
    })
}

function displayUser(user){
    const userDisplay = document.querySelector('.user')

    if(user.gender === 'female'){
        document.body.style.backgroundColor = 'rebaccapurple'
    }else{
        document.body.style.backgroundColor = 'steelblue'
    }

    userDisplay.innerHTML = `<div class="user-img">
        <img src="${user.picture.large}" alt="img">
        </div>
        <div class="user-info">
            <p id="name">
                <span>Name:</span>
                ${user.name.title} ${user.name.first} ${user.name.last}  
            </p>
            <p id="sex">
                <span>Sex:</span>
                ${user.gender}
            </p>
            <p id="age">
            <span>Age:</span>
                ${user.dob.age}
            </p>
            <p id="email">
                <span>Email:</span>
                ${user.email}
            </p>
            <p id="country">
                <span>Country:</span>
                ${user.location.country}
            </p>
            <p id="city">
                <span>City:</span>
               ${user.location.city}
            </p>
            <p id="phone">
                <span>Phone:</span>
                ${user.phone}
            </p>
           
        </div>`


    }
    function showSpinner(){
        document.querySelector('.spinner').style.display = 'block'
    }
    function hideSpinner(){
        document.querySelector('.spinner').style.display = 'none'
    }

const generateBtn = document.querySelector('#btn')
generateBtn.addEventListener('click', fetchUser)

fetchUser()