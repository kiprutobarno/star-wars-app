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
  page: number = 0;
  count: number = 0;
  async ngOnInit(): Promise<void> {
    await this.updatePeople();
  }

  async updatePeople() {
    this.people = await this.service.getPaginatedPages(this.page + 1);
    this.results = this.people.results;
    this.count = this.people.count;
    console.log(this.results.length);
  }

  showPrevious() {
    return this.page > 0;
  }

  showNext() {
    return this.page + this.results.length < this.count;
  }

  async onPrevious() {
    this.page -= 1;
    await this.updatePeople();
  }
  async onNext() {
    this.page += 1;
    await this.updatePeople();
  }
}
