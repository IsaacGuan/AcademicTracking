package server.logic.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

import org.apache.log4j.Logger;

import server.network.StartServer;
import utilities.Config;
import utilities.Trace;

public class University implements UniversityInt {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");

	static int universityCourses;
	static int maxCourseForFTStudent = 4;
	static int maxCourseForPTStudent = 2;
	static int passRate = 70;
	
	static List<Course> courses = new ArrayList<Course>();
	static List<Student> students = new ArrayList<Student>();
	
	final Timer timer = new Timer();
	
	private static class UniversityHolder {
		private static final University INSTANCE = new University();
	}
	
	public University() {
		super();
		InitializeCourses();
		InitializeStudents();
		universityCourses = courses.size();
		timer.schedule(new TimerTask() {
			
			@Override
			public void run() {
				// TODO Auto-generated method stub
				TermEnds();
			}
			
		}, 84 * Config.STIMULATED_DAY);
		logger.info(String.format("Operation:Initialize University;courses: %s", courses));
		logger.info(String.format("Operation:Initialize University;courses: %s", students));
	}
	
	private void TermEnds() {
		// TODO Auto-generated method stub
		
	}

	public static final University getInstance() {
		return UniversityHolder.INSTANCE;
	}
	
	private void InitializeCourses() {
		// TODO Auto-generated method stub
		ProjectCourse c1 = new ProjectCourse("OO Software Dev", 105104, 30, false, 0, 3, false);
		ProjectCourse c2 = new ProjectCourse("Computational Geometry", 105008, 20, false, 0, 3, false);
		Course c3 = new Course("Principles of Distributed Computing", 105003, 20, false, 1, 2, true);
		Course c4 = new Course("Advanced Database Systems", 105305, 30, false, 2, 2, true);
		Course c5 = new Course("Foundations of Programming Languages", 105001, 30, false, 1, 3, true);
		courses.add(c1);
		courses.add(c2);
		courses.add(c3);
		courses.add(c4);
		courses.add(c5);
		logger.info(String.format("Operation: Initialize CourseList; Students: %s", courses));
	}

	private void InitializeStudents() {
		// TODO Auto-generated method stub
		int[] studentNumberList = new int[]{101075401, 101075402};
		String[] studentNameList = new String[]{"tom","jack"};
		boolean[] isFullTimeList = new boolean[]{true,false};
		for(int i=0;i<studentNumberList.length;i++) {
			Student s = new Student(studentNumberList[i], studentNameList[i], isFullTimeList[i]);
			students.add(s);
		}
		logger.info(String.format("Operation: Initialize StudentList; Students: %s", students));
	}

	public int getUniversityCourses() {
		return universityCourses;
	}

	public void setUniversityCourses(int universityCourses) {
		University.universityCourses = universityCourses;
	}

	public static List<Course> getCourses() {
		return courses;
	}

	public static void setCourses(List<Course> courses) {
		University.courses = courses;
	}

	public static List<Student> getStudents() {
		return students;
	}

	public static void setStudents(List<Student> students) {
		University.students = students;
	}

	@Override
	public List<Course> Courses() {
		// TODO Auto-generated method stub
		return getCourses();
	}

	@Override
	public List<Student> Students() {
		// TODO Auto-generated method stub
		return getStudents();
	}
	
	@Override
	public Object GetStudent(int number) {
		// TODO Auto-generated method stub
		int flag = 0;
		Student student = null;
		for (int i=0; i<students.size(); i++) {
			if (students.get(i).StudentNumber() == number) {
				flag = flag +1;
				student = students.get(i);
			}
		}
		if (flag!=0) {
			return student;
		} else {
			return false;
		}
	}

	@Override
	public Object GetCourse(int mycode) {
		// TODO Auto-generated method stub
		int flag = 0;
		Course course = null;
		for (int i=0; i<courses.size(); i++) {
			if (courses.get(i).Code() == mycode) {
				flag = flag + 1;
				course = courses.get(i);
			}
		}
		if (flag!=0) {
			return course;
		} else {
			return false;
		}
	}

	@Override
	public boolean CreateCourse(String title, int mycode, int cap, 
			boolean enforcePrereqs, int numberofmidterms, 
			int numberofassignments, boolean hasafinal, 
			boolean isprojectcourse) {
		// TODO Auto-generated method stub
		boolean result = true;
		int flag = 0;
		for (int i=0; i<courses.size(); i++) {
			String coursetitle = courses.get(i).Title();
			int coursemycode = courses.get(i).Code();
			if (coursetitle.equalsIgnoreCase(title)||coursemycode == mycode) {
				flag = flag + 1;
			}
		}
		long current = System.currentTimeMillis();
		int a = (int) ((current - StartServer.start)/(Config.STIMULATED_DAY) - Config.OVERDUE);
		if (a<=0) {
			if (flag==0) {
				if (!isprojectcourse) {
					Course c = new Course(title, mycode, cap, enforcePrereqs, numberofmidterms, numberofassignments, hasafinal);
					result=courses.add(c);
					logger.info(String.format("Operation: Create New Course; Course Info:[%s,%d]; State: Success", title, mycode));
				} else {
					ProjectCourse c = new ProjectCourse(title, mycode, cap, enforcePrereqs, numberofmidterms, numberofassignments, hasafinal);
					result = courses.add(c);
					logger.info(String.format("Operation: Create New Project Course; Course Info:[%s,%d]; State: Success", title, mycode));
				}
			} else {
				result = false;
				logger.info(String.format("Operation: Create New Course; Course Info:[%s,%d]; State: Fail; Reason: The course already existed.", title, mycode));
			}
		} else {
			result = false;
			logger.info(String.format("Operation: Create New Course; Course Info:[%s,%d]; State: Fail; Reason: Overdue.", title, mycode));
		}
		return result;
	}

	@Override
	public boolean CreateStudent(int number, String name,
			boolean isfulltime) {
		// TODO Auto-generated method stub
		boolean result = true;
		int flag = 0;
		for (int i=0; i<students.size(); i++) {
			int studentnumber = students.get(i).StudentNumber();
			if (studentnumber==number) {
				flag = flag + 1;
			}
		}
		long current = System.currentTimeMillis();
		int a = (int) ((current - StartServer.start)/(Config.STIMULATED_DAY) - Config.OVERDUE);
		if (a<=0) {
			if (flag==0) {
				Student s = new Student(number, name, isfulltime);
				result = students.add(s);
				logger.info(String.format("Operation: Create New Student; Student Info:[%d,%s]; State: Success", number, name));
			} else {
				result = false;
				logger.info(String.format("Operation: Create New Student; Student Info:[%d,%s]; State: Fail; Reason: The student already existed.", number, name));
			}
		} else {
			result = false;
			logger.info(String.format("Operation: Create New Student; Student Info:[%d,%s]; State: Fail; Reason: Overdue.", number, name));
		}
		return result;
	}

	@Override
	public boolean RegisterStudentForCourse(Student student, Course course) {
		// TODO Auto-generated method stub
		boolean result = true;
		int flag1 = 0;
		int flag2 = 0;
		for (int i=0; i<courses.size(); i++) {
			if (courses.get(i).Code()==course.Code()) {
				flag1 = flag1 + 1;
			}
		}
		for (int i=0; i<students.size(); i++) {
			if (students.get(i).StudentNumber()==student.StudentNumber()) {
				flag2 = flag2 + 1;
			}
		}
		long current = System.currentTimeMillis();
		int a = (int) ((current - StartServer.start)/(Config.STIMULATED_DAY) - Config.REGISTRATION_START);
		if (a>=0) {
			if (flag1!=0 && flag2!=0) {
				result = student.RegisterCourse(course) && course.AddStudent(student);
				logger.info(String.format("Operation: student %d register course %d; State: Success", student.StudentNumber(), course.Code()));
			} else {
				result = false;
				logger.info(String.format("Operation: student %d register course %d; State: Fail; Reason: The student or course doesn't exist.", student.StudentNumber(), course.Code()));
			}
		} else {
			result = false;
			logger.info(String.format("Operation: student %d register course %d; State: Fail; Reason: Registration has not started.", student.StudentNumber(), course.Code()));
		}
		return result;
	}

	@Override
	public boolean CancelCourse(Course course) {
		// TODO Auto-generated method stub
		boolean result = true;
		int flag = 0;
		for (int i=0; i<courses.size(); i++) {
			if (courses.get(i).Code()==course.Code()) {
				flag = flag + 1;
			}
		}
		if (flag != 0) {
			List<Student> s = new ArrayList<Student>();
			for (int i=0; i<s.size(); i++){
				course.RemoveStudent(s.get(i));
				s.get(i).DeRegisterCourse(course);
			}
			result = true;
			logger.info(String.format("Operation: cancel course %d; State: Success", course.Code()));
		} else {
			result = false;
			logger.info(String.format("Operation: cancel course %d; State: Fail; Reason: The course doesn't exist.", course.Code()));
		}
		return result;
	}

	@Override
	public boolean DestroyCourse(Course course) {
		// TODO Auto-generated method stub
		boolean result = true;
		int flag = 0;
		for (int i=0; i<courses.size(); i++) {
			if (courses.get(i).Code()==course.Code()) {
				flag = flag + 1;
			}
		}
		if (flag != 0) {
			List<Student> s = new ArrayList<Student>();
			for (int i=0; i<s.size(); i++){
				course.RemoveStudent(s.get(i));
				s.get(i).DeRegisterCourse(course);
			}
			result = courses.remove(course);
			logger.info(String.format("Operation: delete course %d; State: Success", course.Code()));
		} else {
			result = false;
			logger.info(String.format("Operation: delete course %d; State: Fail; Reason: The course doesn't exist.", course.Code()));
		}
		return result;
	}

	@Override
	public boolean DestroyStudent(Student student) {
		// TODO Auto-generated method stub
		boolean result = true;
		int flag = 0;
		for (int i=0; i<students.size(); i++) {
			if (students.get(i).StudentNumber()==student.StudentNumber()) {
				flag = flag + 1;
			}
		}
		if (flag != 0) {
			List<Course> c = new ArrayList<Course>();
			for (int i=0; i<c.size(); i++){
				student.DeRegisterCourse(c.get(i));
				c.get(i).RemoveStudent(student);
			}
			result = students.remove(student);
			logger.info(String.format("Operation: delete student %d; State: Success", student.StudentNumber()));
		} else {
			result = false;
			logger.info(String.format("Operation: delete student %d; State: Fail; Reason: The student doesn't exist.", student.StudentNumber()));
		}
		return result;
	}

}
