import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {
  people: any = [];
  results: any = [];
  page: number = 1;
  count: number = 0;
  pageSize: number = 0;
  maxSize: number = 0;

  public responsive: boolean = true;

  constructor(private service: PeopleService) {
    this.config = {
      itemsPerPage: this.pageSize,
      currentPage: this.page,
      totalItems: this.count,
    };
  }

  config: any;

  async ngOnInit(): Promise<void> {
    await this.updatePeople();
    this.config = {
      itemsPerPage: this.pageSize,
      currentPage: this.page,
      totalItems: this.count,
    };
  }

  /**
   * update people's result data on the table
   */
  async updatePeople() {
    this.people = await this.service.getPaginatedPages(this.config.currentPage);
    this.results = this.people.results;
    this.count = this.people.count;
    this.pageSize = this.people.results.length;
    this.maxSize = Math.ceil(this.count / this.pageSize);
    console.log(this.people.count);
  }

  async pageChange(event: any) {
    this.config.currentPage = event;
    await this.updatePeople();
  }
}
