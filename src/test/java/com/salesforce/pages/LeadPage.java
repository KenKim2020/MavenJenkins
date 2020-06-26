package com.salesforce.pages;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.salesforce.utilities.Utilities;

//POM using Page Factory
public class LeadPage extends Utilities{
	

		
		
		// Identifying the Elements
		//Step 1: Use FindBy annotations to specify the elements
		@FindBy(linkText = "Leads") WebElement leadsButton;
		@FindBy(name = "new") WebElement newButton;
		@FindBy(id = "name_firstlea2") WebElement fName;
		@FindBy(id = "name_lastlea2") WebElement lName;
		@FindBy(id = "lea3") WebElement companyField;
		@FindBy(name = "save") WebElement saveButton;
		
		// Step 2: Initialize the elements within the constructor
		public LeadPage() {
			PageFactory.initElements(driver, this);
		}
		
		// Creating our methods
		public void clickLeads() {
			leadsButton.click();
		}
		
		public void clickNew() {
			newButton.click();
		}
		
		public void enterfName(String firstName) {
			fName.sendKeys(firstName);
		}
		
		public void enterlName(String lastName) {
			lName.sendKeys(lastName);
		}
		
		public void enterCompanyField(String companyName) {
			companyField.sendKeys(companyName);
		}
		
		public void clickSaveButton() {
			saveButton.click();
		}
	
}
