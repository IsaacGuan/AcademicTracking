package server.network;

import utilities.Config;

public class StartServer {

	public static void main(String[] args) {
		System.out.println("Starting server ...");
		new ATServer(Config.DEFAULT_PORT);

	}

}
