package com.ywalakamar.server.model;

import java.util.List;

import lombok.Data;

@Data
public class People {
    private int count;
    private String next;
    private String previous;
    private List<Result> results;
}
