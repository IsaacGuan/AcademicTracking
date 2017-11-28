package test.junit.tests.course;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({TestTitle.class, TestCode.class, TestStudents.class, TestPreRequisites.class, TestWeightOfAssignment.class, TestWeightOfMidterm.class, TestWeightOfFinal.class, TestHasProject.class, TestIsFull.class, TestMarkForStudent.class, TestAddStudent.class, TestRemoveStudent.class})
public class AllCourseTests {

}
