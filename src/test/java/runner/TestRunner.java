package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/*
 * selenium java
 * Junit
 * cucumber java
 * cucumber junit
 */

@RunWith(Cucumber.class)
@CucumberOptions(	features = ".", 
					glue = "stepDefinition", 
					dryRun = false, 
					monochrome = true, 
					plugin = {"pretty",
							"html:Report/Cucumber-Report",
							"json:Report/Cucumber-Json/report.json", 
							"rerun:Rerun/Failed-Scenarios.txt"
							})
public class TestRunner {

}
