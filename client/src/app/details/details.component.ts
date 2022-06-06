import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  search: any = [];
  searchresults: any = [];

  constructor(
    private route: ActivatedRoute,
    private service: PeopleService,
    private location: Location
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(async (params: any) => {
      this.search = await this.service.searchPerson(params.name);
      this.searchresults = this.search.results;
    });
  }

  backClicked() {
    this.location.back();
  }
}
