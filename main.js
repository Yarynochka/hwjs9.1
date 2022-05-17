// // Все робити за допомоги js.
// // - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
//
// let block = document.createElement('div');
// block.innerText='hello';
//
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// console.log(block.classList);
//
// block.style.background='silver';
// block.style.width='400px';
// block.style.height='400px';
// block.style.fontSize='100px';
// block.style.margin='20px';
//
// document.body.appendChild(block);
//
// const blockClone = block.cloneNode(true);
// document.body.appendChild(blockClone);


// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
//
// let arrays = ['Main','Products','About us', 'Contacts'];
// for (const array of arrays) {
//     const liList=document.createElement('li');
//     liList.innerText=`${array}`;
//
//     const list= document.getElementsByClassName('menu')[0];
//     list.appendChild(liList);
// }

// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const wrap= document.createElement('div');
// wrap.innerText='List of courses:';
// document.body.appendChild(wrap);
//
// for (let i=0;i<coursesAndDurationArray.length; i++) {
//     const courses = coursesAndDurationArray[i];
//
//     const coursesDiv = document.createElement('div');
//     coursesDiv.style.margin='20px';
//     coursesDiv.innerHTML=`
//     Title: ${courses.title} <br>
//     Duration: ${courses.monthDuration} <hr>`
//
//     wrap.appendChild(coursesDiv);
// }

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const wrap= document.createElement('div');
wrap.innerText='List of courses:';
document.body.appendChild(wrap);

for(let i=0;i<coursesAndDurationArray.length; i++){
    const courses = coursesAndDurationArray[i];

    const coursesDiv = document.createElement('div');
    coursesDiv.classList.add('item');
    wrap.appendChild(coursesDiv);

    const h1title = document.createElement('h1');
    h1title.classList.add('heading');
    h1title.style.marginTop='20px';
    h1title.innerHTML=`
    Title: ${courses.title};
    `
    coursesDiv.appendChild(h1title);

    const pDescrip = document.createElement('p');
    pDescrip.classList.add('description');

    pDescrip.innerHTML=`
    Duration: ${courses.monthDuration} <hr>`;
    coursesDiv.appendChild(pDescrip);

}

