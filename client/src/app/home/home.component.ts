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

  /**
   * update people's result data on the table
   */
  async updatePeople() {
    this.people = await this.service.getPaginatedPages(this.page + 1);
    this.results = this.people.results;
    this.count = this.people.count;
  }

  /**
   * determine whether to show previous button
   * @returns int
   */
  showPrevious() {
    return this.page > 0;
  }

  /**
   * determine whether to show next button
   * @returns int
   */
  showNext() {
    return this.page + this.results.length < this.count;
  }

  /**
   * updates people data on clicking previous button
   */
  async onPrevious() {
    this.page -= 1;
    await this.updatePeople();
  }

  /**
   * updates people data on clicking next button
   */
  async onNext() {
    this.page += 1;
    await this.updatePeople();
  }
}
