import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const bikes = ['Royal Enfield', 'JAWA', 'Ather'];
    const cars = ['Jaguar', 'BMW', 'TATA'];
    bikes.push(...cars);
    console.log(bikes);
  }

  filter(): void {
    let characters = [
      { name: 'Batman', team: 'Justice League' },
      { name: 'Hulk', team: 'Avengers' },
      { name: 'Flash', team: 'Justice League' },
      { name: 'Iron Man', team: 'Avengers' },
      { name: 'Deadpool', team: 'X-Force' }
    ];

    const avengers = characters.filter((character: any) => {
      return character.team === 'Avengers';

    });
    const justiceLeague = characters.filter((character: any) => {
      return character.team === 'Justice League';
    });
    const xForce = characters.filter((character: any) => {
      return character.team === 'X-Force';
    });
    console.log(avengers);
    console.log(justiceLeague);
    console.log(xForce);
  }

  filterOne(){
    const characters = [
      { name: 'James T. Kirk', series: ['Star Trek'] },
      { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
      { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
      { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
    ];

    const tngCharacters = characters.filter(character => {
      return character.series.includes('Star Trek: The Next Generation');
    });
    console.log(tngCharacters);
  }

  filterSecond(){
    let cities = [
      {name: 'Los Angeles', population: 3792621},
      {name: 'New York', population: 8175133},
      {name: 'Chicago', population: 2695598},
      {name: 'Houston', population: 2099451},
      {name: 'Philadelphia', population: 1526006}
  ];
  let bigCities = cities.filter((city:any) => {
    return city.population > 3000000;
  });
  console.log(bigCities);
  }

  filterThird(){
    let creatures = [
      {name: "Shark", habitat: "Ocean"},
      {name: "Whale", habitat: "Ocean"},
      {name: "Lion", habitat: "Savanna"},
      {name: "Monkey", habitat: "Jungle"}
    ];
    let bigCreatures = creatures.filter((creature:any) => {
      return creature.habitat === "Ocean";
    });
    console.log(bigCreatures);
  }

  filterFour(){
    let files = [
      { id: 1, name: 'html.md', size: 499 },
      { id: 2, name: 'css.md', size: 612  },
      { id: 3, name: 'javascript.md', size: 1236 }
    ];

    const bigFiles = files.filter((file:any) => {
      return file.size > 1000;
    });
    console.log(bigFiles);
  }
  arr: any =[]
  filterFive(){
  let data= [{
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming...",
    "price":[{"ex":1099}] ,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89
  },{
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming...",
    "price":[{"ex":1093}] ,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89
  },{
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming...",
    "price":[{"ex":10959}] ,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89
  },{
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming...",
    "price":[{"ex":1345}] ,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89
  },{
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming...",
    "price":[{"ex":15645}] ,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89
  },{
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming...",
    "price":[{"ex":1434}] ,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89
  },{
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming...",
    "price":[{"ex":1453}] ,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89
  },{
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming...",
    "price": [{"ex":1065}, {"ex":34534}] ,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89
  },{
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming...",
    "price":[{"ex":1076}] ,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89
  },{
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming...",
    "price":[{"ex":1011}] ,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89
  }]
  let totalSum: number = 0
  const  x = data.forEach((item:any) => (item.price.forEach((prices: any) => totalSum = totalSum + prices.ex) ))
  console.log(totalSum);

  // const totalSum = data.reduce((sum, item) => {
  //   // debugger
  //   const prices = item.price.map((item) => item.ex);
  //   return sum + prices.reduce((priceSum, price) => priceSum + price);
  // },0);
  // console.log(totalSum);

  // let sum = 0;
  // for(let i=0;i<data.length;i++) {
  //   const prices = data[i].price.map((item) => item.ex);
  //    sum + prices.reduce((priceSum, price) => priceSum + price);
  // }
}

filterSix(){
 let  Actors = [
    {
      "name": "Tom Cruise",
      "age": 56,
      "Born At": "Syracuse, NY",
      "Birthdate": "July 3, 1962",
      "photo": "https://jsonformatter.org/img/tom-cruise.jpg",
      "wife": null,
      "weight": 67.5,
      "hasChildren": true,
      "hasGreyHair": false,
      "children": [
        "Suri",
        "Isabella Jane",
        "Connor"
      ]
    },
    {
      "name": "Robert Downey Jr.",
      "age": 53,
      "Born At": "New York City, NY",
      "Birthdate": "April 4, 1965",
      "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
      "wife": "Susan Downey",
      "weight": 77.1,
      "hasChildren": true,
      "hasGreyHair": false,
      "children": [
        "Indio Falconer",
        "Avri Roel",
        "Exton Elias"
      ]
    }
  ]
  let totalSum = 0;
  const x = Actors.forEach((item:any) =>  totalSum = totalSum + item.age)
  console.log(totalSum);
}
}
