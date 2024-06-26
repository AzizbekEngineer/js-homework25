const API_URL = 'https://dummyjson.com/users'
const wrapper = document.querySelector('.wrapper')
const loading = document.querySelector('.loading')

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
    data.users.forEach(user => {
        cards += `
                <div class="card">
                    <div class="card__img">
                        <img src=${user.image} alt="">
                    </div>
                    <div class="card__info">
                        <h3>FirstName:${user.firstName}</h3>
                        <h3>LastName:${user.lastName}</h3>
                        <p class = "desc">Address: ${user.address.address + ' ' + user.address.city}</p>
                        <p>Email:${user.email}</p>
                        <p class = "desc">University:${user.university}</p>
                        <p>Age:${user.age}</p>
                        <p>BirthDate:${user.birthDate}</p>
                        <p>Phone:${user.birthDate}</p>
                        <p>CardNumber:${user.bank.cardNumber}</p>
                        <p class = "desc">UserAgent:${user.userAgent}</p>
                        <p>Password:${user.password}</p>
                        <p>Height:${user.height}</p>
                        <p>Weight:${user.weight}</p>
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

const leanMore = document.querySelector('#learn')
console.log(leanMore);
