$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CheckOut.feature");
formatter.feature({
  "line": 2,
  "name": "CheckOut",
  "description": "As a user i want to login to website sauce demo",
  "id": "checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CheckOut"
    }
  ]
});
formatter.before({
  "duration": 9803165400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal login",
  "description": "",
  "id": "checkout;normal-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User sort product list by name z to a",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User pick item Test.allTheThings T-Shirt Red",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User pick item Sauce Labs Onesie",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click chart button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should on cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User click remove button on Test.allTheThings T-Shirt Red",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click check out on cart page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User input \"diqy\" as firstName and input \"anfield\" as lastName and input \"007\" as zipCode",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "System showing summary of payment",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click finish button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "System showing messages \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 1264709300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 1343392300,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.selectProductContainer()"
});
formatter.result({
  "duration": 2258911600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket1()"
});
formatter.result({
  "duration": 5131144600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket2()"
});
formatter.result({
  "duration": 5129057400,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickChart()"
});
formatter.result({
  "duration": 5200468800,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCartPage()"
});
formatter.result({
  "duration": 2125497600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickRemove()"
});
formatter.result({
  "duration": 5086101600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickCheckOUt()"
});
formatter.result({
  "duration": 5131148500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diqy",
      "offset": 12
    },
    {
      "val": "anfield",
      "offset": 42
    },
    {
      "val": "007",
      "offset": 74
    }
  ],
  "location": "PurchaseSteps.inputAddress(String,String,String)"
});
formatter.result({
  "duration": 688914800,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.checkoutOverview()"
});
formatter.result({
  "duration": 5141564000,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickFinish()"
});
formatter.result({
  "duration": 2199988800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 25
    }
  ],
  "location": "PurchaseSteps.errorText(String)"
});
formatter.result({
  "duration": 2147766100,
  "status": "passed"
});
formatter.after({
  "duration": 953278300,
  "status": "passed"
});
});