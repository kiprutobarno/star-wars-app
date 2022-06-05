import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})

export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: PeopleService) {}
  people: any = [];
  results:any=[];
  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(async (params: any) => {
      this.people = await this.service.searchPerson(params.name);
      this.results=this.people.results
    });
  }
}
