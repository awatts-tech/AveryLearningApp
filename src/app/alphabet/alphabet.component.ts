import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {

  list: any[] = [
    {letter: "A",
    img_uri: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1',
    example: 'A is for apple!'
    },
    {letter: "B",
    img_uri: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg',
    example: 'B is for banana!'
    },
    {letter: "C",
    img_uri: 'https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg',
    example: 'C is for cat!'
    },
    {letter: "D",
    img_uri: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
    example: 'D is for dog!'
    },
    {letter: "E",
    img_uri: 'data:image/jpeg;base64,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',
    example: 'E is for egg!'
    },
    {letter: "F",
    img_uri: 'jnjh',
    example: 'F is for family!'
    },
    {letter: "G",
    img_uri: 'jnjh',
    example: 'G is for Goldfish!'
    },
    {letter: "H",
    img_uri: 'jnjh',
    example: 'H is for hug!'
    },
    {letter: "I",
    img_uri: 'jnjh',
    example: 'I is for igloo!'
    },
    {letter: "J",
    img_uri: 'jnjh',
    example: 'J is for jump!'
    },
    {letter: "K",
    img_uri: 'jnjh',
    example: 'K is for kite!'
    }, 
    {letter: "L",
    img_uri: 'jnjh',
    example: 'L is for llama!'
    },
  ];




  constructor() {



   }

  ngOnInit(): void {
  }

  
  
}



