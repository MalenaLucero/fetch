const home = () =>{
    showElement('education')
    showElement('languages')
    showElement('portfolio')
    showElement('contact')
    if(window.innerWidth <= 600) showElement('personalInfo')
    toggleMenu()
}

const education = () =>{
    showElement('education')
    hideElement('languages')
    hideElement('portfolio')
    hideElement('contact')
    if(window.innerWidth <= 600) hideElement('personalInfo')
    toggleMenu()
}

const languages = () =>{
    showElement('languages')
    hideElement('education')
    hideElement('portfolio')
    hideElement('contact')
    if(window.innerWidth <= 600) hideElement('personalInfo')
    toggleMenu()
}

const portfolio = () =>{
    showElement('portfolio')
    hideElement('languages')
    hideElement('education')
    hideElement('contact')
    if(window.innerWidth <= 600) hideElement('personalInfo')
    toggleMenu()
}

const contact = () =>{
    showElement('contact')
    hideElement('languages')
    hideElement('portfolio')
    hideElement('education')
    if(window.innerWidth <= 600) hideElement('personalInfo')
    toggleMenu()
}

const showElement = (elementId) =>{
    let element = document.getElementById(elementId)
    element.classList.replace('hide', 'show')
}

const hideElement = (elementId) =>{
    let element = document.getElementById(elementId)
    element.classList.replace('show', 'hide')
}

const toggleMenu = () =>{
    if(window.innerWidth <= 600){
        var menu = document.getElementById('menu')
        menu.classList.toggle('open')
    }
}

fetch('https://raw.githubusercontent.com/MalenaLucero/fetch/master/cv.json')
    .then(response => response.json())
    .then(res => {
        personalInformation(res)
        fetchEducation(res.education)
        fetchSkills(res.skills)
    })

const personalInformation = (res) =>{
    innerText('fetchName', res.name)
    innerText('fetchCvTitle', res.cvTitle)
    innerText('fetchCvDescription', res.cvDescription)
    innerText('fetchPhoneMail', `${res.contact.phone} / ${res.contact.email}`)
    innerTextList('socialMediaContainer', res.social.map(e=>e.name), res.social.map(e=>e.link))
}

const innerText = (containerId, content) =>{
    let element = document.getElementById(containerId)
    element.innerText = content
}

const innerTextList = (containerId, firstArray, secondArray) =>{
    let container = document.getElementById(containerId)
    firstArray.forEach((e, index)=>{
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.href = secondArray[index]
        a.innerText = e
        li.appendChild(a)
        container.appendChild(li)
    })
}

const fetchEducation = (education) =>{
    education.forEach(e=>{
        let container = document.getElementById('education')
        let div = document.createElement('div')
        div.classList.add('education')
        let title = document.createElement('h4')
        title.innerText = e.title
        let endYear = document.createElement('h4')
        endYear.innerText = e.endYear
        endYear.classList.add('degreeTranslation')
        let institution = document.createElement('h5')
        institution.innerText = e.institution
        let description = document.createElement('p')
        description.innerText = e.description
        div.appendChild(title)
        div.appendChild(endYear)
        div.appendChild(institution)
        div.appendChild(description)
        container.appendChild(div)
    })
}

const fetchSkills = (skills) =>{
    let container = document.getElementById('skills')
    let smallerContainer = document.createElement('div')
    smallerContainer.classList.add('languagesContent')
    skills.forEach(e=>{
        let h4 = document.createElement('h4')
        h4.innerText = e.title
        smallerContainer.appendChild(h4)
        let h5 = document.createElement('h5')
        h5.innerText = `Level: ${e.level}`
        smallerContainer.appendChild(h5)
    })
    container.appendChild(smallerContainer)
}



