$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/GoogleSearch.feature");
formatter.feature({
  "name": "Feature to test google search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate google search is working",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.GoogleSearchSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users is on google search page",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.GoogleSearchSteps.users_is_on_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a text in search results",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.GoogleSearchSteps.user_enters_a_text_in_search_results()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hits enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.GoogleSearchSteps.hits_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search results",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.GoogleSearchSteps.user_is_navigated_to_search_results()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003chttps://[www.google.fr/search?source\u003dhp\u0026ei\u003dieQ8X-yKHeqMlwSN97_gCg\u0026q\u003dJB3+Technologies\u0026oq\u003dJB3+Technologies\u0026gs_lcp\u003dCgZwc3ktYWIQAzICCABQ_QVY2gZgzgloAHAAeACAAdkCiAGoCZIBBzAuMS4wLjOYAQCgAQGqAQdnd3Mtd2l6\u0026sclient\u003dpsy-ab\u0026ved\u003d0ahUKEwis88qx7qbrAhVqxoUKHY37D6wQ4dUDCAc\u0026uact\u003d5]\u003e but was:\u003chttps://[jb3technologies.com/]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepsDefinitions.GoogleSearchSteps.user_is_navigated_to_search_results(GoogleSearchSteps.java:55)\r\n\tat ✽.user is navigated to search results(file:///C:/Users/saber/eclipse-workspace/CucumberJavaBDD/src/test/resources/Features/GoogleSearch.feature:9)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/JenkinsLogin.feature");
formatter.feature({
  "name": "Test Login Jenkins",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login valide",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "se connecter a l\u0027inteface Jenkins",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.JenkinsLogin.se_connecter_a_l_inteface_Jenkins()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "un utilsateur sasie un login valide",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.JenkinsLogin.un_utilsateur_sasie_un_login_valide()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cliquer sur connecter",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.JenkinsLogin.cliquer_sur_connecter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cliquer sur deconnecter",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.JenkinsLogin.cliquer_sur_deconnecter()"
});
formatter.result({
  "status": "passed"
});
});