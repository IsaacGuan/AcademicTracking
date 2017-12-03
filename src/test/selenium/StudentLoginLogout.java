package test.selenium;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class StudentLoginLogout {

	public static WebDriver driver;
	
	@BeforeTest
	public void BeforeTest() {
		System.setProperty("webdriver.chrome.driver",
				"D:/Download/chromedriver_win32/chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--start-maximized");
		driver = new ChromeDriver(options);
		driver.get("http://localhost:8080/AcademicTracking");
	}
	
	@Test
	public void Test() {
		driver.findElement(By.id("studentnumber")).sendKeys("101075401");
		driver.findElement(By.id("studentname")).sendKeys("tom");
		driver.findElement(By.id("studentlogin")).click();
	}
	
	@AfterTest
	public void AfterTest() {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		driver.quit();
	}
}
