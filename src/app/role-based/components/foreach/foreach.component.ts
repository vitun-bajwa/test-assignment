import { Component, OnInit } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-foreach',
  templateUrl: './foreach.component.html',
  styleUrls: ['./foreach.component.css']
})
export class ForeachComponent implements OnInit {
  city: any = [];
  componentName = 'hello';
  constructor() { }

  ngOnInit(): void {
  }

  forEach() {
    let characters = [
      { name: 'Batman', team: 'Justice League' },
      { name: 'Hulk', team: 'Avengers' },
      { name: 'Flash', team: 'Justice League' },
      { name: 'Iron Man', team: 'Avengers' },
      { name: 'Deadpool', team: 'X-Force' }
    ];
    characters.forEach((character: any) => {
      this.city.push(character.name);
      console.log(character.name);
    });
  }

  forEachOne() {
    const characters = [
      { name: 'James T. Kirk', series: ['Star Trek'] },
      { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
      { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
      { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
    ];

    characters.forEach(character => {
      console.log(character)
    });
  }

  forEachSecond() {
    const staffsDetails = [
      { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
      { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
      { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
      { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
    ];

    staffsDetails.forEach((staffDetail) => {
      let sentence = `I am ${staffDetail.name} a staff of Royal Suites.`;
      console.log(sentence);
    });

  }

  forEachThird() {
    const staffsDetails = [
      { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
      { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
      { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
      { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
    ];

    staffsDetails.forEach((staffDetail, index) => {
      let sentence = `index ${index} : I am ${staffDetail.name} a staff of Royal Suites.`;
      console.log(sentence);
    });

  }

  forEachFour() {
    const staffsDetails = [
      { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
      { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
      { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
      { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
    ];

    staffsDetails.forEach(({name, salary}) => {
      if(salary >= 4000){
        console.log(name);
      }
    });

  }
}
