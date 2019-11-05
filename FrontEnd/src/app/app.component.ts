import { Component, Inject } from '@angular/core';
import { ApiService } from './api.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { Student } from '../app/student'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  constructor(private apiService: ApiService, public dialog: MatDialog) { }
  title = 'demo-frontend';
  logToggle: boolean = false;
  SearchValue: string = "";


  ngOnInit() {
    this.fetchAll();
  }

  fetchAll() {
    this.apiService.getAllStudent().subscribe((res) => {
      this.data = res;
    });
  }

  getStudentById(id) {
    this.apiService.getStudentById(id).subscribe((res) => {
      console.log(res);
    });
  }

  deleteStudent(id) {
    this.apiService.deleteStudent(id).subscribe(
      data => {
        console.log("Data", data)
        console.log("Student for id no. ", id, " is Deleted");
        this.fetchAll();
      },
      error => {
        console.log("Error", error);
      }
    );



  }

  insertStudentData() {
    this.students.forEach(student => {
      this.apiService.createStudent(student).subscribe((res) => {
        console.log("INSETED RECORD FOR : ", student)
        this.fetchAll();
      });
    });
  }

  SearchStudent(txt) {

    this.apiService.getAllStudentByText(txt).subscribe((res) => {
      
      if (res == null) {
      } else {
        this.data = res
      }
    });
  }


  ClearAll() {
    this.SearchValue = ""
    this.fetchAll()
  }

 

  students = [
    {
      "id": 400,
      "name": "Kennan",
      "address": "6751 Morbi Rd.",
      "studyin": "four"
    },
    {
      "id": 401,
      "name": "Timothy",
      "address": "Ap #242-7702 Donec Avenue",
      "studyin": "eight"
    },
    {
      "id": 402,
      "name": "Bradley",
      "address": "739-350 Malesuada Avenue",
      "studyin": "one"
    },
    {
      "id": 403,
      "name": "Elmo",
      "address": "P.O. Box 915, 1908 Bibendum Ave",
      "studyin": "one"
    },
    {
      "id": 404,
      "name": "Hayden",
      "address": "P.O. Box 360, 899 Taciti Street",
      "studyin": "two"
    },
    {
      "id": 405,
      "name": "Malik",
      "address": "Ap #135-4788 Nunc Street",
      "studyin": "six"
    },
    {
      "id": 406,
      "name": "Leonard",
      "address": "9250 Lacus Av.",
      "studyin": "five"
    },
    {
      "id": 407,
      "name": "Philip",
      "address": "P.O. Box 809, 5990 Tempus Avenue",
      "studyin": "four"
    },
    {
      "id": 408,
      "name": "Keith",
      "address": "829-3894 A Rd.",
      "studyin": "ten"
    },
    {
      "id": 409,
      "name": "Elvis",
      "address": "7337 Etiam Avenue",
      "studyin": "nine"
    },
    {
      "id": 410,
      "name": "Hyatt",
      "address": "265-1776 Iaculis Ave",
      "studyin": "ten"
    },
    {
      "id": 411,
      "name": "Jerry",
      "address": "3170 Neque St.",
      "studyin": "one"
    },
    {
      "id": 412,
      "name": "Dean",
      "address": "Ap #546-5708 Egestas Rd.",
      "studyin": "eight"
    },
    {
      "id": 413,
      "name": "Hu",
      "address": "Ap #370-2641 Lacus, Avenue",
      "studyin": "four"
    },
    {
      "id": 414,
      "name": "Duncan",
      "address": "1018 Facilisis Ave",
      "studyin": "six"
    },
    {
      "id": 415,
      "name": "Lucius",
      "address": "5400 Montes, Av.",
      "studyin": "two"
    },
    {
      "id": 416,
      "name": "Benedict",
      "address": "Ap #200-3428 Maecenas Street",
      "studyin": "eight"
    },
    {
      "id": 417,
      "name": "Eric",
      "address": "P.O. Box 496, 4142 Neque Rd.",
      "studyin": "one"
    },
    {
      "id": 418,
      "name": "Kelly",
      "address": "Ap #863-6538 Nec Rd.",
      "studyin": "six"
    },
    {
      "id": 419,
      "name": "Justin",
      "address": "1345 Volutpat Avenue",
      "studyin": "two"
    },
    {
      "id": 420,
      "name": "Yuli",
      "address": "Ap #592-2000 Ante Rd.",
      "studyin": "eight"
    },
    {
      "id": 421,
      "name": "Gareth",
      "address": "Ap #147-6443 Dapibus Av.",
      "studyin": "four"
    },
    {
      "id": 422,
      "name": "Chaim",
      "address": "925-4798 Tellus. Ave",
      "studyin": "ten"
    },
    {
      "id": 423,
      "name": "Porter",
      "address": "8400 Ornare, Rd.",
      "studyin": "nine"
    },
    {
      "id": 424,
      "name": "Palmer",
      "address": "Ap #437-706 Sapien, Avenue",
      "studyin": "nine"
    },
    {
      "id": 425,
      "name": "Chester",
      "address": "302-1369 Nibh. Road",
      "studyin": "four"
    },
    {
      "id": 426,
      "name": "Quinn",
      "address": "P.O. Box 399, 5925 Dis St.",
      "studyin": "ten"
    },
    {
      "id": 427,
      "name": "Norman",
      "address": "5221 Enim. Ave",
      "studyin": "five"
    },
    {
      "id": 428,
      "name": "Elmo",
      "address": "6494 Ante. Av.",
      "studyin": "three"
    },
    {
      "id": 429,
      "name": "Barry",
      "address": "P.O. Box 585, 7333 Eget Av.",
      "studyin": "three"
    },
    {
      "id": 430,
      "name": "Hayden",
      "address": "3364 Sed St.",
      "studyin": "six"
    },
    {
      "id": 431,
      "name": "Murphy",
      "address": "P.O. Box 216, 1134 At Rd.",
      "studyin": "eight"
    },
    {
      "id": 432,
      "name": "Ivor",
      "address": "Ap #226-4648 Et, Ave",
      "studyin": "six"
    },
    {
      "id": 433,
      "name": "Ezekiel",
      "address": "209-1217 Sollicitudin Rd.",
      "studyin": "six"
    },
    {
      "id": 434,
      "name": "Mark",
      "address": "224 Sit Rd.",
      "studyin": "seven"
    },
    {
      "id": 435,
      "name": "Anthony",
      "address": "P.O. Box 391, 606 Et Rd.",
      "studyin": "four"
    },
    {
      "id": 436,
      "name": "Cairo",
      "address": "4640 Laoreet, Road",
      "studyin": "one"
    },
    {
      "id": 437,
      "name": "Rudyard",
      "address": "7899 Quis Street",
      "studyin": "nine"
    },
    {
      "id": 438,
      "name": "Seth",
      "address": "600-3343 Mi Av.",
      "studyin": "seven"
    },
    {
      "id": 439,
      "name": "Talon",
      "address": "1481 Gravida Rd.",
      "studyin": "six"
    },
    {
      "id": 440,
      "name": "Macaulay",
      "address": "1595 Molestie Road",
      "studyin": "four"
    },
    {
      "id": 441,
      "name": "Wesley",
      "address": "459-6666 Donec Avenue",
      "studyin": "one"
    },
    {
      "id": 442,
      "name": "Fritz",
      "address": "1425 Gravida Ave",
      "studyin": "six"
    },
    {
      "id": 443,
      "name": "Macon",
      "address": "P.O. Box 485, 8995 Gravida St.",
      "studyin": "one"
    },
    {
      "id": 444,
      "name": "Alexander",
      "address": "439-5279 Orci. St.",
      "studyin": "five"
    },
    {
      "id": 445,
      "name": "Ferris",
      "address": "P.O. Box 144, 8096 Ac Road",
      "studyin": "ten"
    },
    {
      "id": 446,
      "name": "Gregory",
      "address": "936-1186 Nisi Rd.",
      "studyin": "seven"
    },
    {
      "id": 447,
      "name": "Trevor",
      "address": "Ap #448-9854 Cum Avenue",
      "studyin": "ten"
    },
    {
      "id": 448,
      "name": "Asher",
      "address": "P.O. Box 229, 2853 Maecenas Street",
      "studyin": "seven"
    },
    {
      "id": 449,
      "name": "Rashad",
      "address": "Ap #444-1916 Montes, St.",
      "studyin": "eight"
    },
    {
      "id": 450,
      "name": "Zeph",
      "address": "901-2449 Ligula. Ave",
      "studyin": "five"
    },
    {
      "id": 451,
      "name": "Acton",
      "address": "Ap #209-1022 Rutrum Ave",
      "studyin": "four"
    },
    {
      "id": 452,
      "name": "Timon",
      "address": "4820 Ultrices. Road",
      "studyin": "eight"
    },
    {
      "id": 453,
      "name": "Emerson",
      "address": "1260 Pede. Rd.",
      "studyin": "seven"
    },
    {
      "id": 454,
      "name": "Evan",
      "address": "P.O. Box 287, 440 Consequat St.",
      "studyin": "six"
    },
    {
      "id": 455,
      "name": "Murphy",
      "address": "P.O. Box 886, 4553 Ut Avenue",
      "studyin": "two"
    },
    {
      "id": 456,
      "name": "Ross",
      "address": "Ap #463-1574 Ut, Road",
      "studyin": "eight"
    },
    {
      "id": 457,
      "name": "Brody",
      "address": "Ap #327-9676 Dictum Rd.",
      "studyin": "six"
    },
    {
      "id": 458,
      "name": "Hunter",
      "address": "3796 Scelerisque Rd.",
      "studyin": "two"
    },
    {
      "id": 459,
      "name": "Hyatt",
      "address": "Ap #132-2129 Nunc Street",
      "studyin": "nine"
    },
    {
      "id": 460,
      "name": "Hammett",
      "address": "5545 Elit, Ave",
      "studyin": "eight"
    },
    {
      "id": 461,
      "name": "Graham",
      "address": "6792 Nunc Road",
      "studyin": "eight"
    },
    {
      "id": 462,
      "name": "Jamal",
      "address": "992-531 Orci Rd.",
      "studyin": "one"
    },
    {
      "id": 463,
      "name": "Chaim",
      "address": "Ap #199-1170 Cras Ave",
      "studyin": "nine"
    },
    {
      "id": 464,
      "name": "Thane",
      "address": "1742 Integer Rd.",
      "studyin": "nine"
    },
    {
      "id": 465,
      "name": "Nehru",
      "address": "P.O. Box 816, 3401 Bibendum Road",
      "studyin": "three"
    },
    {
      "id": 466,
      "name": "Lucius",
      "address": "399-2813 Nec, Avenue",
      "studyin": "six"
    },
    {
      "id": 467,
      "name": "Asher",
      "address": "1866 Lobortis St.",
      "studyin": "three"
    },
    {
      "id": 468,
      "name": "Cooper",
      "address": "973-7074 Tempus Rd.",
      "studyin": "seven"
    },
    {
      "id": 469,
      "name": "Ishmael",
      "address": "Ap #131-4189 Metus Avenue",
      "studyin": "ten"
    },
    {
      "id": 470,
      "name": "Deacon",
      "address": "3333 Orci Avenue",
      "studyin": "two"
    },
    {
      "id": 471,
      "name": "Keith",
      "address": "867-9580 Placerat. Rd.",
      "studyin": "four"
    },
    {
      "id": 472,
      "name": "Garrett",
      "address": "P.O. Box 288, 2995 Hendrerit Rd.",
      "studyin": "two"
    },
    {
      "id": 473,
      "name": "Kuame",
      "address": "P.O. Box 243, 1949 Tellus, Ave",
      "studyin": "eight"
    },
    {
      "id": 474,
      "name": "Octavius",
      "address": "8228 Orci Road",
      "studyin": "four"
    },
    {
      "id": 475,
      "name": "Boris",
      "address": "P.O. Box 648, 3619 Suspendisse Rd.",
      "studyin": "five"
    },
    {
      "id": 476,
      "name": "Steven",
      "address": "Ap #596-4218 Aliquet St.",
      "studyin": "nine"
    },
    {
      "id": 477,
      "name": "Davis",
      "address": "482-2881 Sit Road",
      "studyin": "three"
    },
    {
      "id": 478,
      "name": "Abbot",
      "address": "216-3187 Mauris Avenue",
      "studyin": "four"
    },
    {
      "id": 479,
      "name": "Quentin",
      "address": "Ap #555-2485 Proin Ave",
      "studyin": "eight"
    },
    {
      "id": 480,
      "name": "Hu",
      "address": "736-3393 Lacinia Ave",
      "studyin": "three"
    },
    {
      "id": 481,
      "name": "Alan",
      "address": "782-7186 Egestas. Ave",
      "studyin": "six"
    },
    {
      "id": 482,
      "name": "Jameson",
      "address": "451-286 Augue St.",
      "studyin": "nine"
    },
    {
      "id": 483,
      "name": "Ivor",
      "address": "757-3177 Mollis. St.",
      "studyin": "nine"
    },
    {
      "id": 484,
      "name": "Kieran",
      "address": "Ap #566-2443 Enim St.",
      "studyin": "one"
    },
    {
      "id": 485,
      "name": "Gray",
      "address": "Ap #873-9202 Non, Ave",
      "studyin": "one"
    },
    {
      "id": 486,
      "name": "Kelly",
      "address": "Ap #540-8403 Adipiscing St.",
      "studyin": "three"
    },
    {
      "id": 487,
      "name": "Connor",
      "address": "696-2343 Nunc Street",
      "studyin": "five"
    },
    {
      "id": 488,
      "name": "Mannix",
      "address": "Ap #557-9102 Cras Road",
      "studyin": "two"
    },
    {
      "id": 489,
      "name": "Zachery",
      "address": "P.O. Box 868, 3609 Orci Rd.",
      "studyin": "one"
    },
    {
      "id": 490,
      "name": "Oleg",
      "address": "100-5491 Et Rd.",
      "studyin": "six"
    },
    {
      "id": 491,
      "name": "Lester",
      "address": "Ap #966-9934 Dictum St.",
      "studyin": "nine"
    },
    {
      "id": 492,
      "name": "Nasim",
      "address": "444-5371 In St.",
      "studyin": "five"
    },
    {
      "id": 493,
      "name": "Clarke",
      "address": "Ap #279-2306 Pede. Avenue",
      "studyin": "ten"
    },
    {
      "id": 494,
      "name": "Adrian",
      "address": "Ap #707-2843 Nunc Road",
      "studyin": "eight"
    },
    {
      "id": 495,
      "name": "Nolan",
      "address": "Ap #399-6427 Sed Road",
      "studyin": "one"
    },
    {
      "id": 496,
      "name": "Yardley",
      "address": "853-3540 Imperdiet St.",
      "studyin": "eight"
    },
    {
      "id": 497,
      "name": "Grady",
      "address": "Ap #488-4860 Eget Rd.",
      "studyin": "three"
    },
    {
      "id": 498,
      "name": "Leo",
      "address": "1266 Phasellus Ave",
      "studyin": "seven"
    },
    {
      "id": 499,
      "name": "Stuart",
      "address": "890-4737 Porta Road",
      "studyin": "six"
    }
  ]
}

