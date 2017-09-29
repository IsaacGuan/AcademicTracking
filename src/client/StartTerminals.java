package client;

import utilities.Config;

public class StartTerminals {

	public static void main(String[] args) {
		new ATClient(Config.DEFAULT_HOST, Config.DEFAULT_PORT);

	}

}
