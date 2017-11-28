package test.junit.tests;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import test.junit.tests.course.AllCourseTests;
import test.junit.tests.projectcourse.AllProjectCourseTests;
import test.junit.tests.student.AllStudentTests;
import test.junit.tests.university.AllUniversityTests;

@RunWith(Suite.class)
@SuiteClasses({AllCourseTests.class, AllProjectCourseTests.class, AllStudentTests.class, AllUniversityTests.class})
public class AllTests {

}
