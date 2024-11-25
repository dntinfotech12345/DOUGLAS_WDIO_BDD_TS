Feature: Advansed Web Interaction inventory

    @WebAdvansed 
    Scenario Outline: <TestId>: Demo Advansed Web interaction inventory

        # just a test message
        Given As a standard user I login to inventory web page

              | userType | Username                |
            # | StdUser  | standard_user           |
            # | ProdUser | locked_out_user         |
            # | ProbUser | problem_use             |
            # | PerfUser | performance_glitch_user |

        Then Inventory page should list <NumberOfProducts>
        Then Validate all products have valid price


        Examples:
            | TestId    | NumberOfProducts |
            | INT_TC001 | 6                |
            