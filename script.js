let btn = document.getElementById('done');

btn.addEventListener('click', () => {
    // console.log('hello');
    let list = document.createElement('div');

    let text = document.getElementById('input');
    list.innerText = text.value;

    text.value = '';
    // console.log(list);
    // console.log(document.getElementById('input').value);


    let val = document.querySelector('#task');
    val.append(list);


    list.setAttribute('class', 'i');
    // console.log(val);

    let j = document.querySelectorAll('.i');

    j.forEach(function (val, idx) {
        val.addEventListener('click', () => {
            val.style.opacity = '0.5';
            val.style.background = 'greenyellow';
            val.style.color = 'black';
            console.log(idx);

            val.remove();

            let id = document.querySelector('#task');
            id.prepend(val);

        })
    });
})