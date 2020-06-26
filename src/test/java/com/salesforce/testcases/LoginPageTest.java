package com.salesforce.testcases;


import java.io.File;
import java.io.IOException;


import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.salesforce.pages.LoginPage;
import com.salesforce.utilities.Utilities;

public class LoginPageTest extends Utilities{

	@BeforeMethod
	public void start() {
		openBrowser();
	}
	
	@Test (dataProvider = "listOfCredentials")
	public void loginUsingValidCredentials(String username, String password) throws IOException {
					
		initProperty(File.separator + "config" + File.separator + "credentials.properties");
		LoginPage login = new LoginPage();
		login.enterUsername(username);
		login.enterPassword(password);
		login.clickLogin();
	}
	
	@DataProvider
	public Object[][] listOfCredentials() throws IOException {
		Object[][] credentials = sendData("C:\\Users\\My PC\\eclipse-workspace\\com.salesforce.qa\\testdata.xlsx", "credentials");
				
		
		return credentials;
	}
	
	
	@AfterMethod
	public void stop() {
		tearDown();
	}
}
