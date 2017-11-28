package test.junit.tests.university;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({TestCourses.class, TestStudents.class, TestGetCourse.class, TestGetStudent.class, TestLookupStudent.class, TestCheckCourse.class, TestCheckStudent.class, TestCreatCourse.class, TestCreatStudent.class, TestRegisterStudentForCourse.class, TestDeRegisterFromCourse.class, TestCancelCourse.class, TestDestroyCourse.class, TestDestroyStudent.class, TestMarkStudents.class, TestDeansList.class})
public class AllUniversityTests {

}
