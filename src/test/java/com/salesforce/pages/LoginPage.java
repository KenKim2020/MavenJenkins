package com.salesforce.pages;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.salesforce.utilities.Utilities;

//POM using Page Factory
public class LoginPage extends Utilities{

	
	
	// Identifying the Elements
	//Step 1: Use FindBy annotations to specify the elements
	@FindBy(id = "username") WebElement usernameField;
	@FindBy(id = "password") WebElement passwordField;
	@FindBy(id = "Login") WebElement loginButton;
	
	// Step 2: Initialize the elements within the constructor
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
	// Creating our methods
	public void enterUsername(String username) {
	usernameField.sendKeys(username);
	}
	
	public void enterPassword(String password) {
		passwordField.sendKeys(password);
	}
	
	public void clickLogin() {
		loginButton.click();
	}
}
