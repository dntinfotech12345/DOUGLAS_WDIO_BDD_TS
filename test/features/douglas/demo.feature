Feature: demo feature

   @IOofficialWebsite
    Scenario Outline: search from google
        Given Google Page is opened
        When Search with <SearchIteam>
        Then Click on frist result search
        Then Url should match <ExpectedUrl>

        Examples:
            | TestId       | SearchIteam | ExpectedUrl           |
            | DEMO_TEST_01 | WDIO        | https://webdriver.io/ |