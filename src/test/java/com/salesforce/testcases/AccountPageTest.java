package com.salesforce.testcases;

import java.io.File;
import java.io.IOException;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.salesforce.pages.AccountPage;
import com.salesforce.pages.LoginPage;
import com.salesforce.utilities.Utilities;

public class AccountPageTest extends Utilities {


	@BeforeMethod
	public void start() {
		openBrowser();
	}
	
	@Test
	public void createLeads() throws IOException {
		
		initProperty(File.separator + "config" + File.separator + "credentials.properties");
		LoginPage login = new LoginPage();
		login.enterUsername(prop.getProperty("username"));
		login.enterPassword(prop.getProperty("password"));
		login.clickLogin();
		
		AccountPage account = new AccountPage();
		account.clickAccounts();
		account.clickNew();
		account.enterAccName("IKEA Inc.");
		account.enterAccNum("123456");
		account.enterAccSite("Woodbridge, VA");
		account.clickSaveButton();
}
	@AfterMethod
	public void stop() {
		tearDown();
	}
}
