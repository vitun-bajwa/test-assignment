import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  find() {
    let carList = [
      { id: 13, brand: "BMW", model: "X5", price: "$23000", release_date: "2015-10-12" },
      { id: 9, brand: "Audi", model: "S3", price: "$35000", release_date: "2013-08-23" },
      { id: 11, brand: "Bugatti", model: "Veyron", price: "$500000", release_date: "2006-02-10" },
      { id: 7, brand: "VW", model: "Polo", price: "$8000", release_date: "2018-05-03" },
      { id: 4, brand: "Fiat", model: "Punto", price: "$6000", release_date: "2017-01-25" }]

    const product = carList.find((item: any) => {
      return item.brand === "BMW" && item.model === "X5";
    });
    console.log(product);
  }
  findOne() {
    let myArray = [
      { "id": 1, "name": "Alice" },
      { "id": 2, "name": "Peter" },
      { "id": 3, "name": "Harry" }
    ];

    const result = myArray.find((item: any) => {
      return item.id === 2;
    });
    console.log(result);
  }

  findSecond() {
    let characters = [
      { name: 'Batman', team: 'Justice League' },
      { name: 'Hulk', team: 'Avengers' },
      { name: 'Flash', team: 'Justice League' },
      { name: 'Iron Man', team: 'Avengers' },
      { name: 'Deadpool', team: 'X-Force' }
    ];

    const avengers = characters.find((character: any) => {
      return character.team === 'Avengers';

    });
    const justiceLeague = characters.find((character: any) => {
      return character.team === 'Justice League';
    });
    const xForce = characters.find((character: any) => {
      return character.team === 'X-Force';
    });
    console.log(avengers);
    console.log(justiceLeague);
    console.log(xForce);

  }

  findThird() {
    const characters = [
      { name: 'James T. Kirk', series: ['Star Trek'] },
      { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
      { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
      { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
    ];

    const tngCharacters = characters.find(character => {
      return character.series.includes('Star Trek: The Next Generation');
    });
    console.log(tngCharacters);

  }

  findFour() {
    let cities = [
      {name: 'Los Angeles', population: 3792621},
      {name: 'New York', population: 8175133},
      {name: 'Chicago', population: 2695598},
      {name: 'Houston', population: 2099451},
      {name: 'Philadelphia', population: 1526006}
  ];
  let bigCities = cities.find((city:any) => {
    return city.population > 3000000;
  });
  console.log(bigCities)

  }

}
