package com.salesforce.testcases;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.salesforce.pages.LoginPage;
import com.salesforce.utilities.Utilities;

public class LoginPageTestNonDynamic extends Utilities{

	@BeforeMethod
	public void start() {
		openBrowser();
	}
	
	@Test
	public void loginUsingValidCredentials() throws IOException {
		
		Properties prop = new Properties();
		
		FileInputStream fis = new FileInputStream(System.getProperty("user.dir") + "/config/credentials.properties");
		prop.load(fis);
			
		LoginPage login = new LoginPage();
		login.enterUsername(prop.getProperty("username"));
		login.enterPassword(prop.getProperty("password"));
		login.clickLogin();
	}
	
	@AfterMethod
	public void stop() {
		tearDown();
	}
}
