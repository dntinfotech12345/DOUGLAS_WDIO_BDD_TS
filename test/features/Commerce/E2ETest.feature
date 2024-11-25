Feature: E2E Customer search

    @E2ETest
    Scenario Outline: <TestId>: Search external customers

       Given Get list of users from reqres.in
       #When As an admin user login to nopcommerce site
       #When Search users in customer list
       #Then Verify if all users exist in customers list

        Examples:
            | TestId    | 
            | E2E_TC001 | 