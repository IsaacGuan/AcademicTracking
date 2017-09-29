package server.logic.model;

public class ProjectCourse extends Course implements ProjectCourseInt {

	public ProjectCourse(String title, int myCode, int capsize) {
		super(title, myCode, capsize);
		// TODO Auto-generated constructor stub
	}

	@Override
	public int WeightOfProject() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean HasProject() {
		// TODO Auto-generated method stub
		return super.HasProject();
	}

}
