package com.salesforce.testcases;

import java.io.File;
import java.io.IOException;

import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.salesforce.pages.LoginPage;
import com.salesforce.utilities.Utilities;

public class LoginWithXMLFile {
	public class LoginPageTest extends Utilities {

		@BeforeMethod
		public void start() {
			openBrowser();
		}

		@Test
		public void loginUsingValidCredentials() throws IOException {

			initProperty(File.separator + "config" + File.separator + "credentials.properties");
			LoginPage login = new LoginPage();
			login.enterUsername(prop.getProperty("username"));
			login.enterPassword(prop.getProperty("password"));
			login.clickLogin();
		}
	}
}
