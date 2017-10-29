package tests;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import tests.course.AllCourseTests;
import tests.projectcourse.AllProjectCourseTests;
import tests.student.AllStudentTests;
import tests.university.AllUniversityTests;

@RunWith(Suite.class)
@SuiteClasses({AllCourseTests.class, AllProjectCourseTests.class, AllStudentTests.class, AllUniversityTests.class})
public class AllTests {

}
