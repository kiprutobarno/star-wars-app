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
  count: number = 0;
  pageSize: number = 0;
  maxSize: number = 0;

  public responsive: boolean = true;
  config: any;
  pageIndex = Number(sessionStorage.getItem('currentPage'));
  page: number = this.pageIndex ? this.pageIndex : 1;

  constructor(private service: PeopleService) {}

  ngOnInit(): void {
    this.updatePeople();
  }

  /**
   * update people's result data on the table
   */
  updatePeople() {
    this.service.getPeople(this.page).subscribe((response) => {
      this.people = response.data.getPeoplePerPage;
      this.results = this.people.results;
      this.count = this.people.count;
      this.pageSize = this.people.results.length;
      this.maxSize = Math.ceil(this.count / this.pageSize);
    });
  }

  pageChange(event: any) {
    this.page = event;
    sessionStorage.setItem('currentPage', event);
    this.updatePeople();
  }
}
