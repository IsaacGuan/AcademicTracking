package main.client;

import main.utilities.Config;

public class StartTerminals {

	public static void main(String[] args) {
		new ATClient(Config.DEFAULT_HOST, Config.DEFAULT_PORT);

	}

}
