StringCalculator TDD Kata

StringCalculator is a simple class that performs addition of numbers extracted from a string input. It supports custom delimiters and handles negative numbers by throwing an error if any are found.

Features
Custom Delimiters: Allows specifying custom delimiters.
Handles Multiple Delimiters: Supports both commas and newlines as delimiters.
Negative Number Detection: Throws an error if negative numbers are present.
Ignore Large Numbers: Numbers greater than 1000 are ignored.



Test-Driven Development (TDD)
The StringCalculator class is developed following Test-Driven Development (TDD) principles.

TDD Workflow
Write Tests First:

Begin by writing test cases for the expected functionality before implementing the code.
Red-Green-Refactor Cycle:

Red: Write a failing test case that defines a new feature or improvement.
Green: Implement the minimum code required to make the test pass.
Refactor: Clean up the code while ensuring that all tests continue to pass.
Small Iterations:

Make small, incremental changes and ensure each change is tested thoroughly.
