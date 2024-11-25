Feature: Web Table handling

    @WebTable
    Scenario Outline: Advanced web table handling
        
        Given Open the website
        Then Check number of row and column
        Then Check whole table data
        Then Get single row based on condition
        Then Get single column
        Then Get single cell value based on another cell
        