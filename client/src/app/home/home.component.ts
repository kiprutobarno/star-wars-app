import { Component, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { People } from 'src/model/people';
import { Result } from 'src/model/result';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: PeopleService) {}

  people: People[] = [];
  result: Result[] = [];
  async ngOnInit(): Promise<void> {
    this.people = await this.service.getAllPeople();
    // this.people.map((item) => {
    //   console.log(item);
    // });
    console.log(this.people.results);
  }
}
