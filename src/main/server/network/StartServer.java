package main.server.network;

import main.utilities.Config;

public class StartServer {
	
	//public static long start;

	public static void main(String[] args) {
		System.out.println("Starting server ...");
		new ATServer(Config.DEFAULT_PORT);

	}

}
