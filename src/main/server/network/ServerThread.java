package main.server.network;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;

import main.utilities.Trace;

import org.apache.log4j.Logger;

public class ServerThread extends Thread {
	
	private int ID = -1;
	private Socket socket = null;
	private ATServer server = null;
	private BufferedReader streamIn = null;
	private BufferedWriter streamOut = null;
	private Logger logger = Trace.getInstance().getLogger(this);
	private String clientAddress = null;;
	
	private boolean done = false;
	
	public ServerThread(ATServer server, Socket socket) {
		super();
		this.server = server;
		this.socket = socket;
		this.ID = socket.getPort();
		this.clientAddress = socket.getInetAddress().getHostAddress();
	}
	
	public int getID() {
		return this.ID;
	}
	
	public void send(String msg) {
		try {
			streamOut.write(msg);
			streamOut.flush();
		} catch (IOException ioe) {
			String message = String.format("Exception thrown : %s \n", ioe.getMessage());
			logger.info(String.format ("Class: %-12s: %s",this.getClass().getSimpleName(), message));
			server.remove(ID);
		}
	}
	
	public String getSocketAddress () {
		return clientAddress;
	}
	
	public void run() {
		logger.info(String.format ("Class: %-12s: %s",this.getClass().getSimpleName(), "Server Thread Running"+"__"+ID));
		while (!done) {
			try {
				/** Received a message and pass to the server to handle */
				server.handle(ID, streamIn.readLine());
			} catch (IOException ioe) {
				String message = String.format("Exception thrown : %s \n", ioe.getMessage());
				logger.info(String.format ("Class: %-12s: %s",this.getClass().getSimpleName(), message));
				server.remove(ID);
				break;
			}}
	}

	public void open() throws IOException {
		streamIn = new BufferedReader(new InputStreamReader(socket.getInputStream()));
		streamOut = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
	}

	public void close() {
		try {
			if (socket != null) socket.close();
			if (streamIn != null) streamIn.close();
			
			this.done = true;
			this.socket = null;
			this.streamIn = null;
		} catch (IOException e) { }
	}

}
