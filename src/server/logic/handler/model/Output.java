package server.logic.handler.model;

public class Output {
	
	String output;
	int state;
	
	public Output(String output,int state){
		this.output=output;
		this.state=state;
		
	}
	
	public String toString(){
		return "["+this.output+","+this.state+"]";
	}

	public String getOutput() {
		return output;
	}

	public void setOutput(String output) {
		this.output = output;
	}

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

}
