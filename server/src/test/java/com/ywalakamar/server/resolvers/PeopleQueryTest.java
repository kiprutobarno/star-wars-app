package com.ywalakamar.server.resolvers;

import static org.mockito.Mockito.doReturn;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.graphql.spring.boot.test.GraphQLResponse;
import com.graphql.spring.boot.test.GraphQLTest;
import com.graphql.spring.boot.test.GraphQLTestTemplate;
import com.ywalakamar.server.model.People;
import com.ywalakamar.server.model.Result;
import com.ywalakamar.server.service.PeopleService;

import static org.assertj.core.api.Assertions.*;
import static com.ywalakamar.server.utils.Constants.*;

@GraphQLTest
class PeopleQueryTest {
    @Autowired
    GraphQLTestTemplate testTemplate;

    @MockBean
    PeopleService serviceMock;

    @Test
    void getAllPeopleTest() throws IOException {
        Result result = new Result();
        result.setName(TEST_NAME);
        result.setGender(TEST_GENDER);
        result.setHeight(TEST_HEIGHT);
        result.setMass(TEST_MASS);
        result.setHomeworld(TEST_HOMEWORLD);
        People people = new People();
        people.setCount(TEST_COUNT);
        people.setNext(TEST_NEXT);
        people.setPrevious(TEST_PREVIOUS);
        List<Result> list = new ArrayList<Result>();
        list.add(result);
        people.setResults(list);

        doReturn(people).when(serviceMock).getPeople();
        GraphQLResponse response = testTemplate.postForResource("graphql/get-all-people.graphql");
        assertThat(response.isOk()).isTrue();
        assertThat(response.get("$.data.getAllPeople.next")).isNull();
        assertThat(response.get("$.data.getAllPeople.next")).isEqualTo(TEST_NEXT);
    }

    @Test
    void getPeoplePerPageTest() throws IOException {
        Result result = new Result();
        result.setName(TEST_NAME);
        result.setGender(TEST_GENDER);
        result.setHeight(TEST_HEIGHT);
        result.setMass(TEST_MASS);
        result.setHomeworld(TEST_HOMEWORLD);
        People people = new People();
        people.setCount(TEST_COUNT);
        people.setNext(TEST_NEXT);
        people.setPrevious(TEST_PREVIOUS);
        List<Result> list = new ArrayList<Result>();
        list.add(result);
        people.setResults(list);

        doReturn(people).when(serviceMock).getPeople(TEST_PAGE);
        GraphQLResponse response = testTemplate.postForResource("graphql/get-people-per-page.graphql");
        assertThat(response.isOk()).isTrue();
        assertThat(response.get("$.data.getPeoplePerPage.next")).isNull();
        assertThat(response.get("$.data.getPeoplePerPage.next")).isEqualTo(TEST_NEXT);
    }

    @Test
    void getPeopleByNameTest() throws IOException {
        Result result = new Result();
        result.setName(TEST_NAME);
        result.setGender(TEST_GENDER);
        result.setHeight(TEST_HEIGHT);
        result.setMass(TEST_MASS);
        result.setHomeworld(TEST_HOMEWORLD);
        People people = new People();
        people.setCount(TEST_COUNT);
        people.setNext(TEST_NEXT);
        people.setPrevious(TEST_PREVIOUS);
        List<Result> list = new ArrayList<Result>();
        list.add(result);
        people.setResults(list);

        doReturn(people).when(serviceMock).getPeople(TEST_NAME);
        GraphQLResponse response = testTemplate.postForResource("graphql/get-people-by-name.graphql");
        assertThat(response.isOk()).isTrue();
        assertThat(response.get("$.data.getPeopleByName.next")).isNull();
        assertThat(response.get("$.data.getPeopleByName.next")).isEqualTo(TEST_NEXT);
    }

}
