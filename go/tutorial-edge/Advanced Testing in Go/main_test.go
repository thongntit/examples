package main

import "testing"

type AddResult struct {
	x        int
	y        int
	expected int
}

var addResults = []AddResult{
	{1, 1, 2},
	{1, 2, 3},
}

func TestAdd(t *testing.T) {
	for _, test := range addResults {
		result := Add(test.x, test.y)
		if result != test.expected {
			t.Fatalf("Expected Result Not Given. Result: %v. Expected: %v", result, test.expected)
		}
	}
}
