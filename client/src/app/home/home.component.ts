import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: PeopleService) {}

  people: any = [];
  results: any = [];
  async ngOnInit(): Promise<void> {
    this.people = await this.service.getAllPeople();
    this.results = this.people.results;
  }
}
