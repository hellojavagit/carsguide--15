@regression
Feature: Search Functionality Of CarsGuide Website
  Scenario Outline: Search the buy car with model
    Given Iam on homepage
    When  I mouse hover on 'buy+sell' tab
    And   I click 'Search cars' link
    Then  I navigate to 'new and used car search' page
    And   I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on find My Next Car tab
    #Then I should see the make "<make>" in results


    Examples:
      |   make       |    model  |    location        |  price |
      | Alfa Romeo   | Giulietta |NSW - Central Coast |15000   |
      | Land Rover   | Discovery |NSW - Central West  |100000 |
      | Holden       | Accent    |NSW - All           |40000   |
      | Hyundai      | ASX       |NSW - All           |10000   |
      |Chrysler      | Voyager   |NSW - Sydney        |30000   |
      |Renault     |  Arkana    |TAS - All             |45000   |


  Scenario Outline: Search the used car with model
    Given Iam on homepage
    When I mouse hover on 'buy+sell' tab
    And I click 'Used' link
    Then I navigate to 'Used Cars For Sale' page
    And I select make "<make>" in Used Car For Sale Page
    And I select model "<model>" in Used Car For Sale  Page
    And I select location "<location>" in Used Car For Sale Page
    And I select price "<price>" in Used Car For Sale Page
    And I click on find My Next Car tab in Used Car For Sale Page
    #Then I should see the make "<make>" in results in Used Car For Sale Page

    Examples:
      |   make       |    model  |    location        |  price |
      | Peugeot      | 206       |NSW - All           |25000   |
      | Renault      | Arkana    |NSW - All           |50000 |
      | Mazda        |  121      |NT - North            |50000   |
      |Kia           | Carnival  |NSW - Sydney         |15000   |
      |BMW           | 1 Series  |TAS - All            |90000   |
      |Audi          | A4        |ACT - All            |40000   |
