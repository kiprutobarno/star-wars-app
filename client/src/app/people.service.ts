import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { People } from 'src/model/people';

/*
 * Typescript type declared to represent query results
 */

const pages = gql`
  query getPeoplePerPage($page: Int!) {
    getPeoplePerPage(page: $page) {
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

const search = gql`
  query getPeopleByName($name: String!) {
    getPeopleByName(name: $name) {
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
  private paginationQuery: QueryRef<{ getPeoplePerPage: People[] }>;
  private searchQuery: QueryRef<{ getPeopleByName: People[] }>;

  constructor(private apollo: Apollo) {
    this.paginationQuery = this.apollo.watchQuery<any>({
      query: pages,
    });
    this.searchQuery = this.apollo.watchQuery<any>({
      query: search,
    });
  }

  /**
   *
   * Get people per page
   *
   * @param page int
   * @returns People
   */
  async getPaginatedPages(page: number) {
    const result = await this.paginationQuery.refetch({ page });
    return result.data.getPeoplePerPage;
  }

  /**
   *
   * Search for a person using name
   * @param name string
   * @returns People
   */
  async searchPerson(name: string) {
    const result = await this.searchQuery.refetch({ name });
    return result.data.getPeopleByName;
  }
}
