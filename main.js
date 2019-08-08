fetch('https://raw.githubusercontent.com/MalenaLucero/fetch/master/cv.json')
    .then(response => response.json())
    .then(res => {
        console.log(res);
        })