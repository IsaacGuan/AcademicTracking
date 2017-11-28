package main.server.logic.handler.model;

import main.server.network.ServerThread;

public class Client {
	
	ServerThread client;
	int state;
	
	public Client(ServerThread client,int state){
		this.client=client;
		this.state=state;
	}
	
	public ServerThread getClient() {
		return client;
	}
	
	public void setClient(ServerThread client) {
		this.client = client;
	}
	
	public int getState() {
		return state;
	}
	
	public void setState(int state) {
		this.state = state;
	}

}
