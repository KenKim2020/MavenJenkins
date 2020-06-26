package stepDefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import Utilities.BaseClass;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AccountTest extends BaseClass {

	@When("^I enter \"([^\"]*)\" username$")
	public void I_enter_username(String username) {
		driver.findElement(By.id("username")).sendKeys(username);
	}

	@When("^I enter \"([^\"]*)\" password$")
	public void I_enter_password(String password) {
		driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("^I click the Accounts Tab$")
	public void I_click_the_Accounts_Tab() {
		driver.findElement(By.cssSelector("a[title='Accounts Tab']")).click();
	}

	@Then("^I am on Accounts Home Page$")
	public void I_am_on_Accounts_Home_Page() {
		String accHome = driver.findElement(By.className("pageDescription")).getText();
		Assert.assertEquals("Home", accHome);
	}

	@When("^I click the New button$")
	public void I_click_the_New_Button() {
		driver.findElement(By.cssSelector("input[name='new']")).click();
	}

	@When("^I enter in Account Name$")
	public void I_enter_in_Account_Name() {
		driver.findElement(By.id("acc2")).sendKeys("IKEA .CO");
	}

	@When("^I enter the Account Number$")
	public void I_enter_the_Account_Number() {
		driver.findElement(By.id("acc5")).sendKeys("123456");
	}

	@When("^I enter the Account Site$")
	public void I_enter_the_Account_Site() {
		driver.findElement(By.id("acc23")).sendKeys("Virginia");
	}

	@Then("^I should see the Rating Field$")
	public void I_should_see_the_Rating_Field() throws Throwable {
		boolean isRatingPresent = driver.findElement(By.id("acc9")).isDisplayed();
		Assert.assertTrue(isRatingPresent);
	}

	@When("^I click save$")
	public void I_click_save() {
		driver.findElement(By.name("save")).click();
	}

	@Then("^I should see the Account Record$")
	public void I_should_see_the_Account_Record() {
		System.out.println(driver.getCurrentUrl());
	}

	@When("^I create an Account$")
	public void I_create_an_Account(DataTable accountDetails) {
		List<Map<String, String>> accountData = accountDetails.asMaps();
		for (Map<String, String> data : accountData) {
			driver.findElement(By.linkText("Accounts")).click();
			driver.findElement(By.name("new")).click();
			driver.findElement(By.id("acc2")).sendKeys(data.get("Account Name"));
			WebElement type = driver.findElement(By.id("acc9"));
			Select typeField = new Select(type);
			typeField.selectByValue(data.get("Rating"));
			driver.findElement(By.id("acc5")).sendKeys(data.get("Account Number"));
			driver.findElement(By.id("acc12")).sendKeys(data.get("Website"));
			driver.findElement(By.name("save")).click();
		}
	}

	@When("^I click the button \"([^\"]*)\"$")
	public void I_click_the_button(String button) {
		driver.findElement(By.name(button)).click();
	}

	@When("^I click the Accounts Tab \"([^\"]*)\" tab$")
	public void I_click_the_Accounts_Tab_tab(String tab) {
		driver.findElement(By.partialLinkText(tab)).click();
	}

	@Then("^I should see the \"([^\"]*)\" page$")
	public void I_should_see_the_page(String expectedPage) {
		String actualPage = driver.findElement(By.className("pageType")).getText();
		String expPage = expectedPage;
		Assert.assertEquals(expPage, actualPage);
	}
	
	@Then("^I should select the value from the drop down menu \"([^\"]*)\"  \"([^\"]*)\"$")
	public void I_should_select_the_value_from_the_drop_down_menu(String drpName, String value) {
		WebElement typeDrp = driver.findElement(By.name(drpName));
		Select typeField = new Select(typeDrp);
		typeField.selectByValue(value);
	}

}
