package server.network;

import java.util.Timer;
import java.util.TimerTask;

import server.logic.model.University;
import utilities.Config;

public class StartServer {
	
	//public static long start;

	public static void main(String[] args) {
		System.out.println("Starting server ...");
		//start = System.currentTimeMillis();
		
		Timer timer_registrationstarts = new Timer();
		Timer timer_registrationends = new Timer();
		Timer timer_termends = new Timer();
		
		timer_registrationstarts.schedule(new TimerTask() {
			
			@Override
			public void run() {
				Config.REGISTRATION_STARTS = true;
				//System.out.println("registration starts");
			}
		}, Config.STIMULATED_DAY * 20);
		
		timer_registrationends.schedule(new TimerTask() {
			
			@Override
			public void run() {
				// TODO Auto-generated method stub
				Config.REGISTRATION_ENDS = true;
				//System.out.println("registration ends");
			}
		}, Config.STIMULATED_DAY * (20 + 14));
		
		timer_termends.schedule(new TimerTask() {
			
			@Override
			public void run() {
				// TODO Auto-generated method stub
				Config.TERM_ENDS = true;
				for (int i=0; i<University.getInstance().getCourses().size(); i++) {
					University.getInstance().MarkStudents(University.getInstance().getCourses().get(i));
				}
				//System.out.println("term ends");
			}
		}, Config.STIMULATED_DAY * (20 + 14 + 4));
		
		new ATServer(Config.DEFAULT_PORT);

	}

}
