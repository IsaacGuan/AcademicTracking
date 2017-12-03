package test.selenium;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class NewTest {
	
	public static WebDriver driver;
	
  @Test(enabled = true) 
  public void f() {
	  System.setProperty("webdriver.chrome.driver", "D:/Download/chromedriver_win32/chromedriver.exe");
	  driver = new ChromeDriver();
  }
}
