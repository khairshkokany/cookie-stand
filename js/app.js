'use strict';
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function randomNumber(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let city=[];

// let randomCust=[];
// let randomCust=[];
// let avgCookie=[];
function City(name,min,max,avg){

  this.name=name;
  this.min=min;
  this.max=max;
  this.avg=avg;
  this.randomCust=[];
  this.avgCookie=[];
  this.sum=0;
  city.push(this);
}



// let seattle={

//   name:'seattle',
//   min:23,
//   max:65,
//   avg:6.3,
//   randomCust:[],
//   avgCookie:[],
//   sum:0,

City.prototype.getRandomCust=function(){
  // let rand=0;
  for (let i = 0; i < hours.length; i++) {

    // this.randomCust[i] = randomNumber(this.min,this.max);

    // rand=(randomNumber(this.min,this.max));
    // this.randomCust=(randomNumber(this.min,this.max));
    this.randomCust.push(randomNumber(this.min,this.max));
  }
}


City.prototype.getAvgCookies=function () {
  // let y=0;
  for (let i = 0; i < this.randomCust.length; i++) {
    // y=(Math.floor(this.randomCust[i]*this.avg));
    this.avgCookie.push(Math.floor(this.randomCust[i]*this.avg));
    this.sum +=this.avgCookie[i];
    // this.sum.push();
  }
  // console.log(this.avgCookie);
}




let parent = document.getElementById('salmonProject');

let mainElement = document.createElement('main');

parent.appendChild(mainElement);


let table = document.createElement('table');
parent.appendChild(table);
// tableElement.textContent = seattle.name ;
function header() {

  let headingRow=document.createElement('tr');
  table.appendChild(headingRow);
  let firstThElement=document.createElement('th');
  headingRow.appendChild(firstThElement);
  firstThElement.textContent='name of city/hour';
  for (let i = 0; i < hours.length; i++) {
    let hoursRow=document.createElement('th');
    headingRow.appendChild(hoursRow);
    hoursRow.textContent=hours[i];
  }
  let lasElement=document.createElement('th');
  headingRow.appendChild(lasElement);
  lasElement.textContent='Daily Location Total';
}
// console.log(header);


// // seattle.sum();
City.prototype.render=function(){
  let cityElement=document.createElement('tr');
  table.appendChild(cityElement);
  let tdElement=document.createElement('td');
  cityElement.appendChild(tdElement);
  tdElement.textContent=this.name;

  for (let i = 0; i < hours.length; i++) {
    let noElement=document.createElement('td');
    cityElement.appendChild(noElement);
    noElement.textContent = this.randomCust[i];
  }
  console.log(this.randomCust);
  let totalTd=document.createElement('td');
  cityElement.appendChild(totalTd);
  totalTd.textContent = this.sum;
}
console.log(this.sum);

function footer() {
  let lastrow=document.createElement('tr');
  table.appendChild(lastrow);
  let firElement=document.createElement('th');
  lastrow.appendChild(firElement);
  firElement.textContent='TOTAL';


  let dailyTotal=0;


  for (let i = 0; i < hours.length; i++) {

    let totalPer=0;
    for (let j = 0; j < 5; j++) {

      totalPer+=city[j].avgCookie[i];
      dailyTotal+=city[j].avgCookie[i];

    }
    console.log(totalPer);
    let thelemnt=document.createElement('th');
    lastrow.appendChild(thelemnt);
    thelemnt.textContent=totalPer;
    // console.log(totalPer);
    // dailyTotal=dailyTotal+totalPer;
  }
  let lastElement = document.createElement('th');
  lastrow.appendChild(lastElement);
  lastElement.textContent=dailyTotal;

}

let seattle = new City('Seattle',23,65,6.3);
let tokyo = new City('Tokyo',3,24,1.2);
let dubai = new City('Dubai',11,38,3.7);
let paris = new City('Paris',20,38,2.3);
let lima = new City('Lima',2,16,4.6);
header();

for (let i = 0; i < city.length; i++) {
  // eslint-disable-next-line indent
      city[i].getRandomCust();
  city[i].getAvgCookies();
  city[i].render();
  // console.log(city[i].getrandomCust);
  // console.log(city[i].getavgCookie);
}




footer();

// console.log(seattle);
// console.log(tokyo);
// console.log(this.randomCust);


//     let liElement=document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent=`Total : ${Math.floor(seattle.sum)} cookies`;
//   }


// };



// }

// console.log(seattle.randomCust);
// console.log(seattle.avgCookie);



// seattle.getRandomCust();
// seattle.getavgCookies();
// seattle.render();


// -------------------------tokyo----------------------


// let tokyo={

//   name:'tokyo',
//   min:3,
//   max:24,
//   avg:1.2,
//   randomCust:[],
//   avgCookie:[],
//   sum:0,

//   getRandomCust:function(){

//     for (let i = 0; i < hours.length; i++) {
//       this.randomCust[i] = randomNumber(this.min,this.max);

//     }
//     console.log(this.randomCust);
//   },
//   getavgCookies:function () {
//     for (let i = 0; i < this.randomCust.length; i++) {
//       this.avgCookie.push(Math.floor(this.randomCust[i]*this.avg));
//       this.sum +=this.randomCust[i]*this.avg;

//     }
//     console.log(this.avgCookie);
//     console.log(this.sum);

//   },
//   render:function(){

//     let parent = document.getElementById('salmonProject');

//     let mainElement = document.createElement('main');

//     parent.appendChild(mainElement);


//     let ulElement = document.createElement('ul');
//     mainElement.appendChild(ulElement);
//     ulElement.textContent = tokyo.name ;
//     for (let i = 0; i < hours.length; i++) {

//       let liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`${hours[i]} ${this.avgCookie[i]} cookies`;

//     }
//     let liElement=document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent=`Total : ${Math.floor(tokyo.sum)} cookies`;
//   }


// };

// console.log(tokyo.randomCust);
// console.log(tokyo.avgCookie);


// tokyo.getRandomCust();
// tokyo.getavgCookies();
// tokyo.render();


// // ----------------dubai----------------------

// let dubai={

//   name:'dubai',
//   min:11,
//   max:38,
//   avg:3.7,
//   randomCust:[],
//   avgCookie:[],
//   sum:0,

//   getRandomCust:function(){

//     for (let i = 0; i < hours.length; i++) {
//       this.randomCust[i] = randomNumber(this.min,this.max);

//     }
//     console.log(this.randomCust);
//   },
//   getavgCookies:function () {
//     for (let i = 0; i < this.randomCust.length; i++) {
//       this.avgCookie.push(Math.floor(this.randomCust[i]*this.avg));
//       this.sum +=this.randomCust[i]*this.avg;

//     }
//     console.log(this.avgCookie);
//     console.log(this.sum);

//   },
//   render:function(){

//     let parent = document.getElementById('salmonProject');

//     let mainElement = document.createElement('main');

//     parent.appendChild(mainElement);


//     let ulElement = document.createElement('ul');
//     mainElement.appendChild(ulElement);
//     ulElement.textContent = dubai.name ;
//     for (let i = 0; i < hours.length; i++) {

//       let liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`${hours[i]} ${this.avgCookie[i]} cookies`;

//     }
//     let liElement=document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent=`Total : ${Math.floor(dubai.sum)} cookies`;
//   }


// };

// console.log(dubai.randomCust);
// console.log(dubai.avgCookie);


// dubai.getRandomCust();
// dubai.getavgCookies();
// dubai.render();



// // ----------------paris----------------------

// let paris={

//   name:'paris',
//   min:20,
//   max:38,
//   avg:2.3,
//   randomCust:[],
//   avgCookie:[],
//   sum:0,

//   getRandomCust:function(){

//     for (let i = 0; i < hours.length; i++) {
//       this.randomCust[i] = randomNumber(this.min,this.max);

//     }
//     console.log(this.randomCust);
//   },
//   getavgCookies:function () {
//     for (let i = 0; i < this.randomCust.length; i++) {
//       this.avgCookie.push(Math.floor(this.randomCust[i]*this.avg));
//       this.sum +=this.randomCust[i]*this.avg;

//     }
//     console.log(this.avgCookie);
//     console.log(this.sum);

//   },
//   render:function(){

//     let parent = document.getElementById('salmonProject');

//     let mainElement = document.createElement('main');

//     parent.appendChild(mainElement);


//     let ulElement = document.createElement('ul');
//     mainElement.appendChild(ulElement);
//     ulElement.textContent = paris.name ;
//     for (let i = 0; i < hours.length; i++) {

//       let liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`${hours[i]} ${this.avgCookie[i]} cookies`;

//     }
//     let liElement=document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent=`Total : ${Math.floor(paris.sum)} cookies`;
//   }


// };

// console.log(paris.randomCust);
// console.log(paris.avgCookie);


// paris.getRandomCust();
// paris.getavgCookies();
// paris.render();



// // ----------------lima----------------------

// let lima={

//   name:'lima',
//   min:2,
//   max:16,
//   avg:4.6,
//   randomCust:[],
//   avgCookie:[],
//   sum:0,

//   getRandomCust:function(){

//     for (let i = 0; i < hours.length; i++) {
//       this.randomCust[i] = randomNumber(this.min,this.max);

//     }
//     console.log(this.randomCust);
//   },
//   getavgCookies:function () {
//     for (let i = 0; i < this.randomCust.length; i++) {
//       this.avgCookie.push(Math.floor(this.randomCust[i]*this.avg));
//       this.sum +=this.randomCust[i]*this.avg;

//     }
//     console.log(this.avgCookie);
//     console.log(this.sum);

//   },
//   render:function(){

//     let parent = document.getElementById('salmonProject');

//     let mainElement = document.createElement('main');

//     parent.appendChild(mainElement);


//     let ulElement = document.createElement('ul');
//     mainElement.appendChild(ulElement);
//     ulElement.textContent = lima.name ;
//     for (let i = 0; i < hours.length; i++) {

//       let liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`${hours[i]} ${this.avgCookie[i]} cookies`;

//     }
//     let liElement=document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent=`Total : ${Math.floor(lima.sum)} cookies`;
//   }


// };

// console.log(lima.randomCust);
// console.log(lima.avgCookie);


// lima.getRandomCust();
// lima.getavgCookies();
// lima.render();
