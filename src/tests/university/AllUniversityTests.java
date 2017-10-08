package tests.university;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({TestCourses.class, TestStudents.class, TestGetCourse.class, TestGetStudent.class, TestCreatCourse.class, TestCreatStudent.class, TestRegisterStudentForCourse.class, TestCancelCourse.class, TestDestroyCourse.class, TestDestroyStudent.class})
public class AllUniversityTests {

}
