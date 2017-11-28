package main.client;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;
import java.net.UnknownHostException;

import main.utilities.Trace;

import org.apache.log4j.Logger;

public class ATClient implements Runnable {
	
	private int ID = 0;
	private Socket socket            = null;
	private Thread thread            = null;
	private ClientThread   client    = null;
	private BufferedReader console   = null;
	private BufferedReader streamIn  = null;
	private BufferedWriter streamOut = null;
	//private Logger logger = Trace.getInstance().getLogger(this);
	
	public ATClient (String serverName, int serverPort) {  
		System.out.println("Connecting to the server. Please wait ...");
		try {  
			this.socket = new Socket(serverName, serverPort);
			this.ID = socket.getLocalPort();
			//logger.info(String.format("%d : Connected to server: %s", ID,socket.getInetAddress()));
			//logger.info(String.format("%d : Connected to portid: %s", ID,socket.getLocalPort()));
	    	this.start();
	    	System.out.println("Welcome To Academic Tracking System!");
	    	System.out.println("Greeting To Start!");
		} catch(UnknownHostException uhe) {  
			System.err.println(ID + ": Unknown Host");
			String message = String.format("Exception thrown : %s \n", uhe.getMessage());
			//logger.info(String.format ("Class: %-12s: %s",this.getClass().getSimpleName(), message));
		} catch(IOException ioe) {  
			System.out.println(ID + ": Unexpected exception");
			String message = String.format("Exception thrown : %s \n", ioe.getMessage());
			//logger.info(String.format ("Class: %-12s: %s",this.getClass().getSimpleName(), message));
			System.out.println("Fail to connect to the server,please try later!");
	   }
	}
	
	public int getID () {
		return this.ID;
	}
	
	public void start() throws IOException {  
		try {
			console	= new BufferedReader(new InputStreamReader(System.in));
			streamIn	= new BufferedReader(new InputStreamReader(socket.getInputStream()));
			streamOut = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
			
			if (thread == null) {  
				client = new ClientThread(this, socket);
				thread = new Thread(this);
				thread.start();
			}
		} catch (IOException ioe) {
			String message = String.format("Exception thrown : %s \n", ioe.getMessage());
			//logger.info(String.format ("Class: %-12s: %s",this.getClass().getSimpleName(), message));
			throw ioe;
		}
	}

	@Override
	public void run() {
		while (thread != null) {
			try {
				if (streamOut != null) {
					streamOut.flush();
					streamOut.write(console.readLine() + "\n");
				} else {
					System.out.println(ID + ": Stream Closed");
				}
			} catch (IOException e) {
				String message = String.format("Exception thrown : %s \n",
						e.getMessage());
				//logger.info(String.format("Class: %-12s: %s", this.getClass().getSimpleName(), message));
				stop();
			}
		}
		
	}

	public void handle(String msg) {
		if (msg.equalsIgnoreCase("Exit")) {
			System.out.println("Good bye.");
			stop();
		} else {
			System.out.println(msg);
		}
	}

	public void stop() {
		try {
			if (thread != null)
				thread = null;
			if (console != null)
				console.close();
			if (streamIn != null)
				streamIn.close();
			if (streamOut != null)
				streamOut.close();
			if (socket != null)
				socket.close();

			this.socket = null;
			this.console = null;
			this.streamIn = null;
			this.streamOut = null;
		} catch (IOException ioe) {
			String message = String.format("Exception thrown : %s \n",
					ioe.getMessage());
			//logger.info(String.format("Class: %-12s: %s", this.getClass().getSimpleName(), message));
		}
		client.close();
	}

}
