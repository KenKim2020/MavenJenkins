package com.salesforce.testcases;
import java.io.File;
import java.io.IOException;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import com.salesforce.pages.LeadPage;
import com.salesforce.pages.LoginPage;
import com.salesforce.utilities.Utilities;

public class LeadPageTest extends Utilities{


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
		
		LeadPage lead = new LeadPage(); 
		lead.clickLeads();
		lead.clickNew();
		lead.enterfName("Ken");
		lead.enterlName("Kim");
		lead.enterCompanyField("Best Buy .Inc");
		lead.clickSaveButton();
	}
	
	@AfterMethod
	public void stop() {
		tearDown();
	}
}
