package test.junit.tests.student;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({TestStudentNumber.class, TestName.class, TestIsFullTime.class, TestIsCreated.class, TestCompletedCourse.class, TestCurrentCourse.class, TestSelectCourse.class, TestRegisterCourse.class, TestDropCourse.class, TestDeRegisterCourse.class, TestAverageMark.class})
public class AllStudentTests {

}
