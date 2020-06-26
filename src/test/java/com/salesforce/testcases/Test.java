package com.salesforce.testcases;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Test {
	public static void main(String[] args) throws IOException {
		// These codes pull values of the system it is running on
		System.out.println(System.getProperty("user.dir"));
		System.out.println(System.getProperty("user.name"));
		System.out.println(System.getProperty("user.home"));
		System.out.println(System.getProperty("os.name"));
		System.out.println(System.getProperty("os.version"));

		// There are 2 types of drivers chromedriver on mac /chromedriver.exe on windows
		
		Properties readCredentials = new Properties();
		
		// Instead of using the full C:\Users\My
		// PC\eclipse-workspace\Batch03POMWithoutPageFactory\config\credentials.properties
		// we will use a variable to find the value and specific the end folder to make
		// it dynamic to each users pc.
		
		FileInputStream fis = new FileInputStream(System.getProperty("user.dir") + "/config/credentials.properties");
		readCredentials.load(fis);
		
		System.out.println(readCredentials.getProperty("username"));
		System.out.println(readCredentials.getProperty("password"));

	}

}
