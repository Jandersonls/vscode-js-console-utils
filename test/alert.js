alert 
let myName = 'Default';
myName = 'Chris';
const myage = '42';
section.innerHTML = ' ';
const para1 =
document.createElement('p');
para1.textContent = myName;
para2.textContent = 'In 20 years, I will be ${myage + 20}';
section.appendChild(para1);
section.appendChild(para2);


