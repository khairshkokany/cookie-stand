'use strict';


let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let seattle={

  name:'seattle',
  min:23,
  max:65,
  avg:6.3,
  randomCust:[],
  avgCookie:[],
  sum:0,

  getRandomCust:function(){

    for (let i = 0; i < hours.length; i++) {
      this.randomCust[i] = randomNumber(this.min,this.max);

    }
    console.log(this.randomCust);
  },
  getavgCookies:function () {
    for (let i = 0; i < this.randomCust.length; i++) {
      this.avgCookie.push(Math.floor(this.randomCust[i]*this.avg));
      this.sum +=this.randomCust[i]*this.avg;

    }
    console.log(this.avgCookie);
    console.log(this.sum);

  },
  render:function(){

    let parent = document.getElementById('salmonProject');

    let mainElement = document.createElement('main');

    parent.appendChild(mainElement);


    let ulElement = document.createElement('ul');
    mainElement.appendChild(ulElement);
    ulElement.textContent = seattle.name ;
    for (let i = 0; i < hours.length; i++) {

      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hours[i]} ${this.avgCookie[i]} cookies`;

    }
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`Total : ${Math.floor(seattle.sum)} cookies`;
  }


};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;



}

console.log(seattle.randomCust);
console.log(seattle.avgCookie);



seattle.getRandomCust();
seattle.getavgCookies();
seattle.render();


// -------------------------tokyo----------------------


let tokyo={

  name:'tokyo',
  min:3,
  max:24,
  avg:1.2,
  randomCust:[],
  avgCookie:[],
  sum:0,

  getRandomCust:function(){

    for (let i = 0; i < hours.length; i++) {
      this.randomCust[i] = randomNumber(this.min,this.max);

    }
    console.log(this.randomCust);
  },
  getavgCookies:function () {
    for (let i = 0; i < this.randomCust.length; i++) {
      this.avgCookie.push(Math.floor(this.randomCust[i]*this.avg));
      this.sum +=this.randomCust[i]*this.avg;

    }
    console.log(this.avgCookie);
    console.log(this.sum);

  },
  render:function(){

    let parent = document.getElementById('salmonProject');

    let mainElement = document.createElement('main');

    parent.appendChild(mainElement);


    let ulElement = document.createElement('ul');
    mainElement.appendChild(ulElement);
    ulElement.textContent = tokyo.name ;
    for (let i = 0; i < hours.length; i++) {

      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hours[i]} ${this.avgCookie[i]} cookies`;

    }
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`Total : ${Math.floor(tokyo.sum)} cookies`;
  }


};

console.log(tokyo.randomCust);
console.log(tokyo.avgCookie);


tokyo.getRandomCust();
tokyo.getavgCookies();
tokyo.render();


// ----------------dubai----------------------

let dubai={

  name:'dubai',
  min:11,
  max:38,
  avg:3.7,
  randomCust:[],
  avgCookie:[],
  sum:0,

  getRandomCust:function(){

    for (let i = 0; i < hours.length; i++) {
      this.randomCust[i] = randomNumber(this.min,this.max);

    }
    console.log(this.randomCust);
  },
  getavgCookies:function () {
    for (let i = 0; i < this.randomCust.length; i++) {
      this.avgCookie.push(Math.floor(this.randomCust[i]*this.avg));
      this.sum +=this.randomCust[i]*this.avg;

    }
    console.log(this.avgCookie);
    console.log(this.sum);

  },
  render:function(){

    let parent = document.getElementById('salmonProject');

    let mainElement = document.createElement('main');

    parent.appendChild(mainElement);


    let ulElement = document.createElement('ul');
    mainElement.appendChild(ulElement);
    ulElement.textContent = dubai.name ;
    for (let i = 0; i < hours.length; i++) {

      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hours[i]} ${this.avgCookie[i]} cookies`;

    }
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`Total : ${Math.floor(dubai.sum)} cookies`;
  }


};

console.log(dubai.randomCust);
console.log(dubai.avgCookie);


dubai.getRandomCust();
dubai.getavgCookies();
dubai.render();



// ----------------paris----------------------

let paris={

  name:'paris',
  min:20,
  max:38,
  avg:2.3,
  randomCust:[],
  avgCookie:[],
  sum:0,

  getRandomCust:function(){

    for (let i = 0; i < hours.length; i++) {
      this.randomCust[i] = randomNumber(this.min,this.max);

    }
    console.log(this.randomCust);
  },
  getavgCookies:function () {
    for (let i = 0; i < this.randomCust.length; i++) {
      this.avgCookie.push(Math.floor(this.randomCust[i]*this.avg));
      this.sum +=this.randomCust[i]*this.avg;

    }
    console.log(this.avgCookie);
    console.log(this.sum);

  },
  render:function(){

    let parent = document.getElementById('salmonProject');

    let mainElement = document.createElement('main');

    parent.appendChild(mainElement);


    let ulElement = document.createElement('ul');
    mainElement.appendChild(ulElement);
    ulElement.textContent = paris.name ;
    for (let i = 0; i < hours.length; i++) {

      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hours[i]} ${this.avgCookie[i]} cookies`;

    }
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`Total : ${Math.floor(paris.sum)} cookies`;
  }


};

console.log(paris.randomCust);
console.log(paris.avgCookie);


paris.getRandomCust();
paris.getavgCookies();
paris.render();



// ----------------lima----------------------

let lima={

  name:'lima',
  min:2,
  max:16,
  avg:4.6,
  randomCust:[],
  avgCookie:[],
  sum:0,

  getRandomCust:function(){

    for (let i = 0; i < hours.length; i++) {
      this.randomCust[i] = randomNumber(this.min,this.max);

    }
    console.log(this.randomCust);
  },
  getavgCookies:function () {
    for (let i = 0; i < this.randomCust.length; i++) {
      this.avgCookie.push(Math.floor(this.randomCust[i]*this.avg));
      this.sum +=this.randomCust[i]*this.avg;

    }
    console.log(this.avgCookie);
    console.log(this.sum);

  },
  render:function(){

    let parent = document.getElementById('salmonProject');

    let mainElement = document.createElement('main');

    parent.appendChild(mainElement);


    let ulElement = document.createElement('ul');
    mainElement.appendChild(ulElement);
    ulElement.textContent = lima.name ;
    for (let i = 0; i < hours.length; i++) {

      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hours[i]} ${this.avgCookie[i]} cookies`;

    }
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`Total : ${Math.floor(lima.sum)} cookies`;
  }


};

console.log(lima.randomCust);
console.log(lima.avgCookie);


lima.getRandomCust();
lima.getavgCookies();
lima.render();
