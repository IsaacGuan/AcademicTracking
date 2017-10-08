package server.network;

import utilities.Config;

public class StartServer {
	
	public static long start;

	public static void main(String[] args) {
		System.out.println("Starting server ...");
		start = System.currentTimeMillis();
		new ATServer(Config.DEFAULT_PORT);

	}

}
