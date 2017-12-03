package test.selenium;

import java.util.Collections;

import org.testng.TestNG;
import org.testng.annotations.Test;

public class Runner {
	@Test
	public void TestsRunner() {
		String xmlLocation = "src/test/selenium/TestNG.xml";
		TestNG testng = new TestNG();
        testng.setTestSuites(Collections.singletonList(xmlLocation));
        testng.setVerbose(2);
        testng.run();
	}
}
