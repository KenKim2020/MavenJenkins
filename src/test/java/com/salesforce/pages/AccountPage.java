package com.salesforce.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.salesforce.utilities.Utilities;

public class AccountPage extends Utilities{

	@FindBy(linkText = "Accounts") WebElement accountsButton;
	@FindBy(name = "new") WebElement newButton;
	@FindBy(id = "acc2") WebElement accNameField;
	@FindBy(id = "acc5") WebElement accNumField;
	@FindBy(id = "acc23") WebElement accSiteField;
	@FindBy(name = "save") WebElement saveButton;
	
	public AccountPage() {
		PageFactory.initElements(driver, this);
	}
	
	public void clickAccounts() {
		accountsButton.click();
	}
	
	public void clickNew() {
		newButton.click();
	}
	
	public void enterAccName(String accName) {
		accNameField.sendKeys(accName);
	}
	
	public void enterAccNum(String accNum) {
		accNumField.sendKeys(accNum);
	}
	
	public void enterAccSite(String accSite) {
		accSiteField.sendKeys(accSite);
	}
	
	public void clickSaveButton() {
		saveButton.click();
	}
	
	
	
	
	
}
