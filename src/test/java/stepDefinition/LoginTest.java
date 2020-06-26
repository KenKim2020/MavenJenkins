package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import Utilities.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginTest extends BaseClass{
	
	@Given("^I Open Chrome Browser$")
	public void I_Open_Chrome_Browser() {
		System.setProperty("webdriver.chrome.driver",
				"E:\\School\\Selenium Drivers\\chromedriver_v83\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@When("^I maxmize the webbrowser$")
	public void I_maxmize_the_webbrowser() {
		driver.manage().window().maximize();	
	}

	@When("^I go to the Salesforce application$")
	public void I_go_to_the_Salesforce_application() {
		driver.get("https://login.salesforce.com");
	}

	@Then("^I should see the Salesforce logo$")
	public void I_should_see_the_Salesforce_logo() {
		boolean isLogoPresent = driver.findElement(By.id("logo")).isDisplayed();
		Assert.assertTrue(isLogoPresent);
	}

	@Then("^I enter valid username and valid password$")
	public void I_enter_valid_username_and_valid_password() {
		driver.findElement(By.id("username")).sendKeys("batch03@codegator.us.qa");
		driver.findElement(By.id("password")).sendKeys("Pa55word");
	}

	@When("^I click the login button$")
	public void I_click_the_login_button() {
		driver.findElement(By.id("Login")).click();
	}

	@Then("^I should see the logout link$")
	public void I_should_see_the_logot_link() {
		boolean isLoggedIn = driver.findElement(By.id("setupLink")).isDisplayed();
		Assert.assertTrue(isLoggedIn);
	}

}
