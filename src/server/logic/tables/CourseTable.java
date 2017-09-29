package server.logic.tables;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import server.logic.model.Course;
import utilities.Trace;

public class CourseTable {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	List<Course> courseList = new ArrayList<Course>();
	
	private static class CourseListHolder {
		private static final CourseTable INSTANCE = new CourseTable();
	}
	
	private CourseTable() {
		
	}
	
	public static final CourseTable getInstance() {
		return CourseListHolder.INSTANCE;
	}

}
