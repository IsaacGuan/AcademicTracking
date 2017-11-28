package main.server.logic.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class ProjectCourse extends Course implements ProjectCourseInt {

	boolean hasAProject;
	int weightOfProject;
	
	public ProjectCourse(String title, int myCode, int capsize,
			boolean enforcePrereqs, int numberOfMidterms,
			int numberOfAssignments, boolean hasAFinal) {
		super(title, myCode, capsize, enforcePrereqs, numberOfMidterms,
				numberOfAssignments, hasAFinal);
		// TODO Auto-generated constructor stub
		this.hasAProject = true;
		GenerateWeights();
	}

	public ProjectCourse(String title, int myCode, int capsize) {
		super(title, myCode, capsize);
		// TODO Auto-generated constructor stub
		this.hasAProject = true;
		GenerateWeights();
	}

	public boolean isHasAProject() {
		return hasAProject;
	}

	public void setHasAProject(boolean hasAProject) {
		this.hasAProject = hasAProject;
	}

	public int getWeightOfProject() {
		return weightOfProject;
	}

	public void setWeightOfProject(int weightOfProject) {
		this.weightOfProject = weightOfProject;
	}

	@Override
	public int WeightOfProject() {
		// TODO Auto-generated method stub
		return getWeightOfProject();
	}

	@Override
	public boolean HasProject() {
		// TODO Auto-generated method stub
		return isHasAProject();
	}

	@Override
	public void GenerateWeights() {
		// TODO Auto-generated method stub
		int n = this.numberOfMidterms + this.numberOfAssignments + (this.hasAFinal?1:0) + (this.hasAProject?1:0);
		List<Double> randomNumber = new ArrayList<Double>();
		double m = 0;
		Random random = new Random();
		for(int i=0; i<n; i++) {
			randomNumber.add(random.nextDouble());
			m = m + randomNumber.get(i);
		}
		double k = m/100;
		for(int i=0; i<n; i++) {
			double j = randomNumber.get(i) / k;
			randomNumber.set(i, j);
		}
		int s = 0;
		if(this.numberOfMidterms>0) {
			List<Integer> wm = new ArrayList<Integer>();
			for(int i=0; i<this.numberOfMidterms; i++){
				wm.add((int)(double)randomNumber.get(i));
				s = s + wm.get(i);
			}
			setWeightOfMidterms(wm);
		}
		if(this.numberOfAssignments>0) {
			List<Integer> wa = new ArrayList<Integer>();
			for(int i=0; i<this.numberOfAssignments; i++){
				wa.add((int)(double)randomNumber.get(this.numberOfMidterms+i));
				s = s + wa.get(i);
			}
			setWeightOfAssignments(wa);
		}
		if(this.hasAFinal){
			int wf = (int)(double)randomNumber.get(this.numberOfMidterms+this.numberOfAssignments);
			setWeightOfFinal(wf);
			s = s +wf;
		}
		if(this.hasAProject){
			int wp = 100 - s;
			setWeightOfProject(wp);
		}
	}

}
