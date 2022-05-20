$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 2,
  "name": "Search Functionality Of CarsGuide Website",
  "description": "",
  "id": "search-functionality-of-carsguide-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 13,
      "value": "#Then I should see the make \"\u003cmake\u003e\" in results"
    }
  ],
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Alfa Romeo",
        "Giulietta",
        "NSW - Central Coast",
        "15000"
      ],
      "line": 18,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Land Rover",
        "Discovery",
        "NSW - Central West",
        "100000"
      ],
      "line": 19,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Holden",
        "Accent",
        "NSW - All",
        "40000"
      ],
      "line": 20,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Hyundai",
        "ASX",
        "NSW - All",
        "10000"
      ],
      "line": 21,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Chrysler",
        "Voyager",
        "NSW - Sydney",
        "30000"
      ],
      "line": 22,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Renault",
        "Arkana",
        "TAS - All",
        "45000"
      ],
      "line": 23,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5486200800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Alfa Romeo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Giulietta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - Central Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"15000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.match({
  "location": "CarBuyTestSteps.iamOnHomepage()"
});
formatter.result({
  "duration": 59904300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 167611200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 85636900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1612527300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alfa Romeo",
      "offset": 15
    }
  ],
  "location": "CarBuyTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 112448600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Giulietta",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 68996300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 19
    }
  ],
  "location": "CarBuyTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 62461800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15000",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 81086700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1707349800,
  "status": "passed"
});
formatter.after({
  "duration": 703810600,
  "status": "passed"
});
formatter.before({
  "duration": 4255439000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Discovery\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - Central West\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"100000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.match({
  "location": "CarBuyTestSteps.iamOnHomepage()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 174591300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 101339800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1578034700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "CarBuyTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 73183800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discovery",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 79501400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central West",
      "offset": 19
    }
  ],
  "location": "CarBuyTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 49755100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 54475800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2697774400,
  "status": "passed"
});
formatter.after({
  "duration": 661590600,
  "status": "passed"
});
formatter.before({
  "duration": 3261493100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Holden\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Accent\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.match({
  "location": "CarBuyTestSteps.iamOnHomepage()"
});
formatter.result({
  "duration": 15900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 174821000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 73203700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1854330600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Holden",
      "offset": 15
    }
  ],
  "location": "CarBuyTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 62524500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accent",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 20094331000,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Accent\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:287)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:190)\r\n\tat au.com.carsguide.utility.Utility.selectByValueFromDropDown(Utility.java:159)\r\n\tat au.com.carsguide.pages.NewAndUsedCarSearchPage.selectCarModelFromDropDown(NewAndUsedCarSearchPage.java:56)\r\n\tat au.com.carsguide.steps.CarBuyTestSteps.iSelectModel(CarBuyTestSteps.java:41)\r\n\tat ✽.And I select model \"Accent\"(buy.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "CarBuyTestSteps.iSelectLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1059172800,
  "status": "passed"
});
formatter.before({
  "duration": 3899226000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"ASX\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"10000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.match({
  "location": "CarBuyTestSteps.iamOnHomepage()"
});
formatter.result({
  "duration": 17700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 150725500,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 96556900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 2068287900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "CarBuyTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 59226700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ASX",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 20027403900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: ASX\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:287)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:190)\r\n\tat au.com.carsguide.utility.Utility.selectByValueFromDropDown(Utility.java:159)\r\n\tat au.com.carsguide.pages.NewAndUsedCarSearchPage.selectCarModelFromDropDown(NewAndUsedCarSearchPage.java:56)\r\n\tat au.com.carsguide.steps.CarBuyTestSteps.iSelectModel(CarBuyTestSteps.java:41)\r\n\tat ✽.And I select model \"ASX\"(buy.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "CarBuyTestSteps.iSelectLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 956571600,
  "status": "passed"
});
formatter.before({
  "duration": 3994036000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Chrysler\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Voyager\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.match({
  "location": "CarBuyTestSteps.iamOnHomepage()"
});
formatter.result({
  "duration": 26500,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 138208400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 86743200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1289550400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrysler",
      "offset": 15
    }
  ],
  "location": "CarBuyTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 52021700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Voyager",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 445329400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "CarBuyTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 58758500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 62160000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1748746400,
  "status": "passed"
});
formatter.after({
  "duration": 660471400,
  "status": "passed"
});
formatter.before({
  "duration": 3966984300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Renault\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Arkana\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"TAS - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"45000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.match({
  "location": "CarBuyTestSteps.iamOnHomepage()"
});
formatter.result({
  "duration": 13800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 144741700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 1387625400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 128680000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Renault",
      "offset": 15
    }
  ],
  "location": "CarBuyTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 56793800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arkana",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 71399400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TAS - All",
      "offset": 19
    }
  ],
  "location": "CarBuyTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 54686300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 46362400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 46118600,
  "status": "passed"
});
formatter.after({
  "duration": 670240300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"\u003cmake\u003e\" in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"\u003cmodel\u003e\" in Used Car For Sale  Page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"\u003clocation\u003e\" in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"\u003cprice\u003e\" in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 36,
      "value": "#Then I should see the make \"\u003cmake\u003e\" in results in Used Car For Sale Page"
    }
  ],
  "line": 38,
  "name": "",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 39,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Peugeot",
        "206",
        "NSW - All",
        "25000"
      ],
      "line": 40,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Renault",
        "Arkana",
        "NSW - All",
        "50000"
      ],
      "line": 41,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Mazda",
        "121",
        "NT - North",
        "50000"
      ],
      "line": 42,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Kia",
        "Carnival",
        "NSW - Sydney",
        "15000"
      ],
      "line": 43,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "BMW",
        "1 Series",
        "TAS - All",
        "90000"
      ],
      "line": 44,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Audi",
        "A4",
        "ACT - All",
        "40000"
      ],
      "line": 45,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4086569000,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Peugeot\" in Used Car For Sale Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"206\" in Used Car For Sale  Page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"NSW - All\" in Used Car For Sale Page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"25000\" in Used Car For Sale Page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.match({
  "location": "CarBuyTestSteps.iamOnHomepage()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 152323200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 1579810600,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 66542300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peugeot",
      "offset": 15
    }
  ],
  "location": "CarBuyTestSteps.iSelectMakeInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 68790000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "206",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectModelInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 204699000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "CarBuyTestSteps.iSelectLocationInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 46758900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectPriceInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 82094200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickOnFindMyNextCarTabInUsedCarForSalePage()"
});
formatter.result({
  "duration": 2822681700,
  "status": "passed"
});
formatter.after({
  "duration": 664725100,
  "status": "passed"
});
formatter.before({
  "duration": 4713572300,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Renault\" in Used Car For Sale Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"Arkana\" in Used Car For Sale  Page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"NSW - All\" in Used Car For Sale Page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"50000\" in Used Car For Sale Page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.match({
  "location": "CarBuyTestSteps.iamOnHomepage()"
});
formatter.result({
  "duration": 14700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 152709600,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 1270489000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 100658300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Renault",
      "offset": 15
    }
  ],
  "location": "CarBuyTestSteps.iSelectMakeInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 49774200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arkana",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectModelInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 52545500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "CarBuyTestSteps.iSelectLocationInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 48725000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectPriceInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 54141800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickOnFindMyNextCarTabInUsedCarForSalePage()"
});
formatter.result({
  "duration": 3277223500,
  "status": "passed"
});
formatter.after({
  "duration": 694141600,
  "status": "passed"
});
formatter.before({
  "duration": 4437325900,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Mazda\" in Used Car For Sale Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"121\" in Used Car For Sale  Page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"NT - North\" in Used Car For Sale Page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"50000\" in Used Car For Sale Page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.match({
  "location": "CarBuyTestSteps.iamOnHomepage()"
});
formatter.result({
  "duration": 13000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 146482400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 89897200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1449139900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "CarBuyTestSteps.iSelectMakeInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 89622500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "121",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectModelInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 114387400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - North",
      "offset": 19
    }
  ],
  "location": "CarBuyTestSteps.iSelectLocationInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 59249900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectPriceInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 61521900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickOnFindMyNextCarTabInUsedCarForSalePage()"
});
formatter.result({
  "duration": 57092800,
  "status": "passed"
});
formatter.after({
  "duration": 658934300,
  "status": "passed"
});
formatter.before({
  "duration": 4583776600,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Kia\" in Used Car For Sale Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"Carnival\" in Used Car For Sale  Page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"NSW - Sydney\" in Used Car For Sale Page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"15000\" in Used Car For Sale Page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.match({
  "location": "CarBuyTestSteps.iamOnHomepage()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 140895300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 1692252300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 26092300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "CarBuyTestSteps.iSelectMakeInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 116977900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carnival",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectModelInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 111148400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "CarBuyTestSteps.iSelectLocationInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 45169800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15000",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectPriceInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 45190700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickOnFindMyNextCarTabInUsedCarForSalePage()"
});
formatter.result({
  "duration": 51423500,
  "status": "passed"
});
formatter.after({
  "duration": 652093600,
  "status": "passed"
});
formatter.before({
  "duration": 4075074700,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"BMW\" in Used Car For Sale Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"1 Series\" in Used Car For Sale  Page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"TAS - All\" in Used Car For Sale Page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"90000\" in Used Car For Sale Page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.match({
  "location": "CarBuyTestSteps.iamOnHomepage()"
});
formatter.result({
  "duration": 17500,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 142577800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 91968900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1531297100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "CarBuyTestSteps.iSelectMakeInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 149489200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectModelInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 97175200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TAS - All",
      "offset": 19
    }
  ],
  "location": "CarBuyTestSteps.iSelectLocationInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 52651800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90000",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectPriceInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 67683000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickOnFindMyNextCarTabInUsedCarForSalePage()"
});
formatter.result({
  "duration": 56426600,
  "status": "passed"
});
formatter.after({
  "duration": 653844700,
  "status": "passed"
});
formatter.before({
  "duration": 3989189200,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Audi\" in Used Car For Sale Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"A4\" in Used Car For Sale  Page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"ACT - All\" in Used Car For Sale Page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"40000\" in Used Car For Sale Page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.match({
  "location": "CarBuyTestSteps.iamOnHomepage()"
});
formatter.result({
  "duration": 12800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 150834700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 20111016200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Used\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9851707fde8e75d026c0aa26f883aeea, findElement {using\u003dlink text, value\u003dUsed}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63802}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63802/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9851707fde8e75d026c0aa26f883aeea\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat au.com.carsguide.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat au.com.carsguide.pages.HomePage.clickOnUsedCarsInhomePage(HomePage.java:39)\r\n\tat au.com.carsguide.steps.CarBuyTestSteps.iClickUsedLink(CarBuyTestSteps.java:62)\r\n\tat ✽.And I click \u0027Used\u0027 link(buy.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CarBuyTestSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "CarBuyTestSteps.iSelectMakeInUsedCarForSalePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "A4",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectModelInUsedCarForSalePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "CarBuyTestSteps.iSelectLocationInUsedCarForSalePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 16
    }
  ],
  "location": "CarBuyTestSteps.iSelectPriceInUsedCarForSalePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarBuyTestSteps.iClickOnFindMyNextCarTabInUsedCarForSalePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1262106800,
  "status": "passed"
});
});