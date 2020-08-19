Feature: Feature to test google search functionality

Scenario: Validate google search is working

   Given browser is open
   And users is on google search page
   When user enters a text in search results
   And hits enter
   Then user is navigated to search results  
