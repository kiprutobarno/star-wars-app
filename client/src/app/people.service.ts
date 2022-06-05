import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { People } from 'src/model/people';

/*
 * Typescript type declared to represent query results
 */

const people = gql`
  query {
    getAllPeople {
      results {
        name
        gender
        height
        mass
        homeworld
      }
    }
  }
`;

const pages = gql`
  query getPeoplePerPage($page: Int!) {
    getPeoplePerPage(page: $page) {
      next
      count
      results {
        name
        gender
        height
        mass
        homeworld
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private peopleQuery: QueryRef<{ getAllPeople: People[] }>;
  private paginationQuery: QueryRef<{ getPeoplePerPage: People[] }>;
  constructor(private apollo: Apollo) {
    this.peopleQuery = this.apollo.watchQuery<any>({
      query: people,
    });
    this.paginationQuery = this.apollo.watchQuery<any>({
      query: pages,
    });
  }

  async getAllPeople(): Promise<People[]> {
    const result = await this.peopleQuery.refetch();
    return result.data.getAllPeople;
  }

  async getPaginatedPages(page: number) {
    const result = await this.paginationQuery.refetch({ page });
    return result.data.getPeoplePerPage;
  }
}
