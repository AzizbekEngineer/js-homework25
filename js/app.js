const API_URL = 'https://dummyjson.com/users'
const wrapper = document.querySelector('.wrapper')
const loading = document.querySelector('.loading')
const leanMore = document.querySelector('#learn')
console.log(leanMore);
const module = document.querySelector('.module')
async function fetchUsers(URL) {
    let data = await fetch(URL, {
        method: "GET"
    })
    data
        .json()
        .then(res => createUser(res))
        .catch(err => console.log(err))
        .finally(() => {
            loading.style.display = 'none'
        })
}
fetchUsers(API_URL)

function createUser(data) {
    console.log(data.users);
    let cards = ''
    data.users.slice(0, 10).forEach(user => {
        cards += `
                <div class="card">
                    <div class="card__img">
                        <img src=${user.image} alt="">
                    </div>
                    <div class="card__info">
                        <h3>FirstName:${user.firstName}</h3>
                        <h3>lastName:${user.lastName}</h3>
                        <p class = "desc">Address: ${user.address.address + ' ' + user.address.city}</p>
                        <p>Email:${user.email}</p>
                        <p class = "desc">University:${user.university}</p>
                        <p>Age:${user.age}</p>
                        <button class="learn__more btn" id="learn" type="button">Learn more</button>
                        <div class="module">
                            <div class="close__btn">
                                <button class="close__info btn">Close info</button>
                            </div>
                            <div class="module__infos">
                                <ul class = "module__info">
                                    <li><p class = "desc">Address: ${user.address.address + ' ' + user.address.city}</p></li>
                                    <li> <p>Email:${user.email}</p></li>
                                    <li><p class = "desc">University:${user.university}</p></li>
                                    <li><p>Age:${user.age}</p></li>
                                    <li>BirthDate:${user.birthDate}</li>
                                    <li>Phone:${user.birthDate}</li>
                                    <li>CardNumber:${user.bank.cardNumber}</li>
                                    <li class = "desc">UserAgent:${user.userAgent}</li>
                                    <li>Password:${user.password}</li>
                                    <li>Height:${user.height}</li>
                                    <li>Weight:${user.weight}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        `
    });
    wrapper.innerHTML = cards
}


function createLoad(count) {
    let loadingCards = ''
    for (let i = 0; i < count; i++) {
        loadingCards += `
         <div class="loading__item">
            <div class="loading__img bg__animation"></div>
            <div class="loading__title bg__animation"></div>
            <div class="loading__title bg__animation"></div>
        </div>
        `
    };
    loading.innerHTML = loadingCards

}
createLoad(8)

leanMore.addEventListener('click', function () {
    module.style.display = 'flex'
    console.log('b');
})


