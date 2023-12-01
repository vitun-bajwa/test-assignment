import { Component, OnInit } from '@angular/core';
import { Rating } from '@syncfusion/ej2-angular-inputs';
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
    this.getStudentId()
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

  filterOne() {
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

  filterSecond() {
    let cities = [
      { name: 'Los Angeles', population: 3792621 },
      { name: 'New York', population: 8175133 },
      { name: 'Chicago', population: 2695598 },
      { name: 'Houston', population: 2099451 },
      { name: 'Philadelphia', population: 1526006 }
    ];
    let bigCities = cities.filter((city: any) => {
      return city.population > 3000000;
    });
    console.log(bigCities);
  }

  filterThird() {
    let creatures = [
      { name: "Shark", habitat: "Ocean" },
      { name: "Whale", habitat: "Ocean" },
      { name: "Lion", habitat: "Savanna" },
      { name: "Monkey", habitat: "Jungle" }
    ];
    let bigCreatures = creatures.filter((creature: any) => {
      return creature.habitat === "Ocean";
    });
    console.log(bigCreatures);
  }

  filterFour() {
    let files = [
      { id: 1, name: 'html.md', size: 499 },
      { id: 2, name: 'css.md', size: 612 },
      { id: 3, name: 'javascript.md', size: 1236 }
    ];

    const bigFiles = files.filter((file: any) => {
      return file.size > 1000;
    });
    console.log(bigFiles);
  }
  arr: any = []
  filterFive() {
    let data = [{
      id: 10,
      title: "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming...",
      "price": [{ "ex": 1099 }],
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89
    }, {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming...",
      "price": [{ "ex": 1093 }],
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89
    }, {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming...",
      "price": [{ "ex": 10959 }],
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89
    }, {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming...",
      "price": [{ "ex": 1345 }],
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89
    }, {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming...",
      "price": [{ "ex": 15645 }],
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89
    }, {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming...",
      "price": [{ "ex": 1434 }],
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89
    }, {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming...",
      "price": [{ "ex": 1453 }],
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89
    }, {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming...",
      "price": [{ "ex": 1065 }, { "ex": 34534 }],
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89
    }, {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming...",
      "price": [{ "ex": 1076 }],
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89
    }, {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming...",
      "price": [{ "ex": 1011 }],
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89
    }]
    let totalSum: number = 0
    const x = data.forEach((item: any) => (item.price.forEach((prices: any) => totalSum = totalSum + prices.ex)))
    console.log(totalSum);

    let total: number = 0;
    const y = data.forEach((item: any) => (item.price.forEach((prices: any) => total += prices.ex)));
    console.log(total);

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

  filterSix() {
    let Actors = [
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
    const x = Actors.forEach((item: any) => totalSum = totalSum + item.age)
    console.log(totalSum);
  }

  filterSeven() {
    let array = [
      {
        "name": "Product A",
        "price": 19.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product B",
        "price": 29.99,
        "description": "Another great product",
        "reviews": [
          {
            "user": "Customer 3",
            "rating": 5,
            "comment": "Amazing!"
          },
          {
            "user": "Customer 4",
            "rating": 3,
            "comment": "Decent, but a bit pricey."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 39.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 49.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 59.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 69.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 79.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 89.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 99.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 109.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 119.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 129.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 139.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 149.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          }
        ]
      },
      {
        "name": "Product A",
        "price": 159.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          },
          // {
          //   "added" : 10
          // }
        ]
      }
    ]
    let totalSum: number = 0
    const x = array.forEach((item: any) => {
      totalSum = totalSum + item.price
      item.reviews.forEach((review: any) => {
        totalSum = totalSum + review.rating
      });
    })
    // const z = array.forEach((reviews: any) => totalSum = totalSum + reviews.rating)
    console.log(totalSum);
  }


  filterEight() {
    let array = [
      {
        "name": "Product A",
        "price": 19.99,
        "description": "A fantastic product",
        "reviews": [
          {
            "user": "Customer 1",
            "rating": 5,
            "comment": "Great product!"
          },
          {
            "user": "Customer 2",
            "rating": 4,
            "comment": "Not bad, but could be improved."
          },
          {
            "user": "Customer 4",
            "rating": 3,
            "comment": "Decent, but a bit pricey."
          }
        ]
      },
      {
        "name": "Product B",
        "price": 29.99,
        "description": "Another great product",
        "reviews": [
          {
            "user": "Customer 3",
            "rating": 5,
            "comment": "Amazing!"
          },
          {
            "user": "Customer 4",
            "rating": 3,
            "comment": "Decent, but a bit pricey."
          },
          {
            "user": "Customer 4",
            "rating": 3,
            "comment": "Decent, but a bit pricey."
          }
        ]
      },
    ]
    let totalSum: number = 0
    const x = array.forEach((item: any) => {
      debugger
      totalSum = totalSum + item.price
      item.reviews.forEach((review: any) => {
        totalSum = totalSum + review.rating
      });
    })

    const z = array.forEach((item: any) => {
      totalSum = totalSum * item.price
      item.reviews.forEach((review: any) => {
         totalSum = totalSum * review.rating
      });
    })

    const y = array.forEach((item: any) => {
      item.reviews.forEach((review: any) => {
        totalSum = totalSum + review.rating + item.price
      })
    })
    // const z = array.forEach((reviews: any) => totalSum = totalSum + reviews.rating)
    console.log(totalSum);
  }


  getStudentId() {
    var stud = "T.VictoriaTRAD Marquez-670026";
    let id = stud.split("-")[1];
    console.log(id);
  }

  filterNine() {
    let array = [{
      "currentUser": {
        "image": {
          "png": "./images/avatars/image-juliusomo.png",
          "webp": "./images/avatars/image-juliusomo.webp"
        },
        "username": "juliusomo"
      },
      "comments": [
        {
          "id": 1,
          "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
          "createdAt": "1 month ago",
          "score": 12,
          "user": {
            "image": {
              "png": "./images/avatars/image-amyrobson.png",
              "webp": "./images/avatars/image-amyrobson.webp"
            },
            "username": "amyrobson"
          },
          "replies": []
        },
        {
          "id": 2,
          "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
          "createdAt": "2 weeks ago",
          "score": 5,
          "user": {
            "image": {
              "png": "./images/avatars/image-maxblagun.png",
              "webp": "./images/avatars/image-maxblagun.webp"
            },
            "username": "maxblagun"
          },
          "replies": [
            {
              "id": 3,
              "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
              "createdAt": "1 week ago",
              "score": 4,
              "replyingTo": "maxblagun",
              "user": {
                "image": {
                  "png": "./images/avatars/image-ramsesmiron.png",
                  "webp": "./images/avatars/image-ramsesmiron.webp"
                },
                "username": "ramsesmiron"
              }
            },
          ]
        }
      ]
    }
    ]
  }

  filterTen() {
    const familyTree = [
      {
        id: "23b9dbff",
        name: "Jessie",
        age: 50,
        children: [
          {
            id: "5c0f3094",
            name: "Peter",
            age: 20
          },
          {
            id: "c1484221",
            name: "Paul",
            age: 32,
            children: [
              {
                id: "2e6d866e",
                name: "Carol",
                age: 12
              },
              {
                id: "e48a27ad",
                name: "Hester",
                age: 15
              }
            ]
          },
          {
            id: "8a265c23",
            name: "Hilda",
            age: 25
          }
        ]
      },
      {
        id: "53164b2b",
        name: "Mathew",
        age: 70,
        children: [
          {
            id: "b14a960c",
            name: "Spencer",
            age: 45,
            children: [
              {
                id: "ff3c260c",
                name: "Joseph",
                age: 22
              },
              {
                id: "7c60920a",
                name: "Robert",
                age: 27,
                children: [
                  {
                    id: "0e11874f",
                    name: "Ian",
                    age: 2
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "5a4bdc98",
        name: "Claire",
        age: 63,
        children: [
          {
            id: "014b62a3",
            name: "Adrian",
            age: 41
          },
          {
            id: "a1899541",
            name: "Julie",
            age: 32,
            children: [
              {
                id: "013362a3",
                name: "Patricia",
                age: 4
              }
            ]
          }
        ]
      }
    ]
  }
}