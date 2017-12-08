package test.selenium;

import java.util.List;

import main.utilities.Config;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class UseCaseDependencies {
	
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
	public void ClerkLogin() {
		driver.findElement(By.id("clerk-btn")).click();
		driver.findElement(By.id("password")).sendKeys(Config.CLERK_PASSWORD);
		driver.findElement(By.id("clerklogin")).click();
	}
	
	@Test (dependsOnMethods={"ClerkLogin"})
	public void ClerkCreateNewCourse() {
		driver.findElement(By.id("course")).click();
		driver.findElement(By.id("createcourse")).click();
		driver.findElement(By.id("code")).sendKeys(TestItems.codeNewCourse);
		driver.findElement(By.id("title")).sendKeys("Graphical Models");
		driver.findElement(By.id("Cap")).sendKeys("20");
		WebElement EnforcePrerequites =driver.findElement(By.id("EnforcePrerequites"));
		Select dropdownEnforcePrerequites = new Select(EnforcePrerequites);
		dropdownEnforcePrerequites.selectByVisibleText("false");
		driver.findElement(By.id("Midterms")).sendKeys("1");
		driver.findElement(By.id("assignments")).sendKeys("3");
		WebElement hasFinal =driver.findElement(By.id("hasFinal"));
		Select dropdownhasFinal = new Select(hasFinal);
		dropdownhasFinal.selectByVisibleText("true");
		WebElement project =driver.findElement(By.id("project"));
		Select dropdownproject = new Select(project);
		dropdownproject.selectByVisibleText("false");
		driver.findElement(By.id("createcourse_btn")).click();
		Alert alert = driver.switchTo().alert();
		alert.accept();
	}
	
	@Test (dependsOnMethods={"ClerkCreateNewCourse"})
	public void ClerkCreateNewStudent() {
		driver.findElement(By.id("student")).click();
		driver.findElement(By.id("createstudent")).click();
		driver.findElement(By.id("sno")).sendKeys(TestItems.numberNewStudent);
		driver.findElement(By.id("name")).sendKeys(TestItems.nameNewStudent);
		WebElement isfulltime = driver.findElement(By.id("isfulltime"));
		Select dropdownisfulltime = new Select(isfulltime);
		dropdownisfulltime.selectByVisibleText("false");
		driver.findElement(By.id("createstudent_btn")).click();
		Alert alert = driver.switchTo().alert();
		alert.accept();
	}
	
	@Test (dependsOnMethods={"ClerkCreateNewStudent"})
	public void ClerkDeleteNewCourse() {
		driver.findElement(By.id("course")).click();
		driver.findElement(By.id("sub-course")).click();
		List<WebElement> opts = driver.findElements(By.xpath("//ul[@class='sub-menu']/li"));
        for (WebElement opt : opts) {
            if (opt.getText().equals("Delete Course")) {
                opt.click();
                driver.findElement(By.id(TestItems.codeNewCourse)).click();
        		driver.findElement(By.id("deletecourse_btn")).click();
        		Alert alert = driver.switchTo().alert();
        		alert.accept();
        		return;
            }
        }
	}
	
	@Test (dependsOnMethods={"ClerkDeleteNewCourse"})
	public void ClerkDeleteNewStudent() {
		driver.findElement(By.id("student")).click();
        driver.findElement(By.id("sub-student")).click();
		List<WebElement> options = driver.findElements(By.xpath("//ul[@class='sub-menu']/li"));
        for (WebElement opt : options) {
            if (opt.getText().equals("Delete Student")) {
                opt.click();
                driver.findElement(By.id(TestItems.numberNewStudent)).click();
                driver.findElement(By.id("deletestudent_btn")).click();
                Alert alert = driver.switchTo().alert();
        		alert.accept();
                return;
            }
        }
	}
	
	@Test (dependsOnMethods={"ClerkDeleteNewStudent"})
	public void ClerkLogout() {
		driver.findElement(By.id("clerkmenu")).click();
		driver.findElement(By.id("logout")).click();
	}
	
	@Test (dependsOnMethods={"ClerkLogout"})
	public void StudentALogin() {
		driver.findElement(By.id("studentnumber")).sendKeys(TestItems.numberStudentA);
		driver.findElement(By.id("studentname")).sendKeys(TestItems.nameStudentA);
		driver.findElement(By.id("studentlogin")).click();
	}
	
	@Test (dependsOnMethods={"StudentALogin"})
	public void StudentASelectCourses() {
		driver.findElement(By.id("selectcourse")).click();
		driver.findElement(By.id(TestItems.codeCourseA)).click();
		driver.findElement(By.id("selectcourse_btn")).click();
		Alert alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseB)).click();
		driver.findElement(By.id("selectcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseC)).click();
		driver.findElement(By.id("selectcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseD)).click();
		driver.findElement(By.id("selectcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseE)).click();
		driver.findElement(By.id("selectcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
	}
	
	@Test (dependsOnMethods={"StudentASelectCourses"})
	public void StudentALogout() {
		driver.findElement(By.id("studentmenu")).click();
		driver.findElement(By.id("logout")).click();
	}
	
	@Test (dependsOnMethods={"StudentALogout"})
	public void StudentBLogin() {
		driver.findElement(By.id("studentnumber")).sendKeys(TestItems.numberStudentB);
		driver.findElement(By.id("studentname")).sendKeys(TestItems.nameStudentB);
		driver.findElement(By.id("studentlogin")).click();
	}
	
	@Test (dependsOnMethods={"StudentBLogin"})
	public void StudentBSelectCourses() {
		driver.findElement(By.id("selectcourse")).click();
		driver.findElement(By.id(TestItems.codeCourseA)).click();
		driver.findElement(By.id("selectcourse_btn")).click();
		Alert alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseB)).click();
		driver.findElement(By.id("selectcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseC)).click();
		driver.findElement(By.id("selectcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseD)).click();
		driver.findElement(By.id("selectcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseE)).click();
		driver.findElement(By.id("selectcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
	}
	
	@Test (dependsOnMethods={"StudentBSelectCourses"})
	public void StudentBLogout() {
		driver.findElement(By.id("studentmenu")).click();
		driver.findElement(By.id("logout")).click();
	}
	
	@Test (dependsOnMethods={"StudentBLogout"})
	public void WaitTilRegistrationStarts() {
		try {
			Thread.sleep(20000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test (dependsOnMethods={"WaitTilRegistrationStarts"})
	public void StudentALoginAgain() {
		driver.findElement(By.id("studentnumber")).sendKeys(TestItems.numberStudentA);
		driver.findElement(By.id("studentname")).sendKeys(TestItems.nameStudentA);
		driver.findElement(By.id("studentlogin")).click();
	}
	
	@Test (dependsOnMethods={"StudentALoginAgain"})
	public void StudentARegisterforCourses() {
		driver.findElement(By.id("registerforcourse")).click();
		driver.findElement(By.id(TestItems.codeCourseA)).click();
		driver.findElement(By.id("registerforcourse_btn")).click();
		Alert alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseB)).click();
		driver.findElement(By.id("registerforcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseC)).click();
		driver.findElement(By.id("registerforcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseD)).click();
		driver.findElement(By.id("registerforcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseE)).click();
		driver.findElement(By.id("registerforcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
	}
	
	@Test (dependsOnMethods={"StudentARegisterforCourses"})
	public void StudentADeregisterforCourseB() {
		driver.findElement(By.id("deregistercourse")).click();
		driver.findElement(By.id(TestItems.codeCourseB)).click();
		driver.findElement(By.id("deregistercourse_btn")).click();
		Alert alert = driver.switchTo().alert();
		alert.accept();
	}
	
	@Test (dependsOnMethods={"StudentADeregisterforCourseB"})
	public void StudentADropCourseE() {
		driver.findElement(By.id("dropcourse")).click();
		driver.findElement(By.id(TestItems.codeCourseE)).click();
		driver.findElement(By.id("dropcourse_btn")).click();
		Alert alert = driver.switchTo().alert();
		alert.accept();
	}
	
	@Test (dependsOnMethods={"StudentADropCourseE"})
	public void StudentALogoutAgain() {
		driver.findElement(By.id("studentmenu")).click();
		driver.findElement(By.id("logout")).click();
	}
	
	@Test (dependsOnMethods={"StudentALogoutAgain"})
	public void StudentBLoginAgain() {
		driver.findElement(By.id("studentnumber")).sendKeys(TestItems.numberStudentB);
		driver.findElement(By.id("studentname")).sendKeys(TestItems.nameStudentB);
		driver.findElement(By.id("studentlogin")).click();
	}
	
	@Test (dependsOnMethods={"StudentBLoginAgain"})
	public void StudentBRegisterforCourses() {
		driver.findElement(By.id("registerforcourse")).click();
		driver.findElement(By.id(TestItems.codeCourseE)).click();
		driver.findElement(By.id("registerforcourse_btn")).click();
		Alert alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseD)).click();
		driver.findElement(By.id("registerforcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseC)).click();
		driver.findElement(By.id("registerforcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseB)).click();
		driver.findElement(By.id("registerforcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseA)).click();
		driver.findElement(By.id("registerforcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
	}
	
	@Test (dependsOnMethods={"StudentBRegisterforCourses"})
	public void WaitTilRegistrationEnds() {
		try {
			Thread.sleep(20000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test (dependsOnMethods={"WaitTilRegistrationEnds"})
	public void StudentBDropCourses() {
		driver.findElement(By.id("dropcourse")).click();
		driver.findElement(By.id(TestItems.codeCourseA)).click();
		driver.findElement(By.id("dropcourse_btn")).click();
		Alert alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseB)).click();
		driver.findElement(By.id("dropcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
		driver.findElement(By.id(TestItems.codeCourseC)).click();
		driver.findElement(By.id("dropcourse_btn")).click();
		alert = driver.switchTo().alert();
		alert.accept();
	}
	
	@Test (dependsOnMethods={"StudentBDropCourses"})
	public void StudentBLogoutAgain() {
		driver.findElement(By.id("studentmenu")).click();
		driver.findElement(By.id("logout")).click();
	}
	
	@Test (dependsOnMethods={"StudentBLogoutAgain"})
	public void ClerkLoginAgain() {
		driver.findElement(By.id("clerk-btn")).click();
		driver.findElement(By.id("password")).sendKeys(Config.CLERK_PASSWORD);
		driver.findElement(By.id("clerklogin")).click();
	}
	
	@Test (dependsOnMethods={"ClerkLoginAgain"})
	public void ClerkCancelCourseD() {
		driver.findElement(By.id("course")).click();
		driver.findElement(By.id("sub-course")).click();
		List<WebElement> opts = driver.findElements(By.xpath("//ul[@class='sub-menu']/li"));
        for (WebElement opt : opts) {
            if (opt.getText().equals("Cancel Course")) {
                opt.click();
                driver.findElement(By.id(TestItems.codeCourseD)).click();
        		driver.findElement(By.id("cancelcourse_btn")).click();
        		Alert alert = driver.switchTo().alert();
        		alert.accept();
        		return;
            }
        }
	}
	
	@Test (dependsOnMethods={"ClerkCancelCourseD"})
	public void WaitTilTermEnds() {
		try {
			Thread.sleep(200000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test (dependsOnMethods={"WaitTilTermEnds"})
	public void ClerkViewDeansList() {
		driver.findElement(By.id("deanslist")).click();
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@AfterTest
	public void AfterTest() {
		//driver.quit();
	}
	
}
