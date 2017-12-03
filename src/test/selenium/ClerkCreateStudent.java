package test.selenium;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class ClerkCreateStudent {
	
	public static WebDriver driver;
	
	@BeforeTest
	public void BeforeTest() {
		System.setProperty("webdriver.chrome.driver",
				"D:/Download/chromedriver_win32/chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--start-maximized");
		driver = new ChromeDriver(options);
		driver.get("http://localhost:8080/AcademicTracking");
		driver.findElement(By.id("clerk-btn")).click();
		driver.findElement(By.id("password")).sendKeys("admin");
		driver.findElement(By.id("clerklogin")).click();
		driver.findElement(By.id("student")).click();
		driver.findElement(By.id("createstudent")).click();
	}
	
	@Test
	public void Test() {
		driver.findElement(By.id("sno")).sendKeys("101075433");
		driver.findElement(By.id("name")).sendKeys("isaac");
		WebElement mySelectElement =driver.findElement(By.id("isfulltime"));
		Select dropdown= new Select(mySelectElement);
		dropdown.selectByVisibleText("false");
		driver.findElement(By.id("createstudent_btn")).click();
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
