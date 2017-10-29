package utilities;

public class Config {
	public static final int MAX_CLIENTS = 5;
	public static final int DEFAULT_PORT = 5050;
	public static final String DEFAULT_HOST = "127.0.0.1";
	public static final int MAX_BORROWED_ITEMS = 3;
	//20 seconds for 1 day
	public static final int STIMULATED_DAY = 1 * 20 * 1000;
	public static final int OVERDUE = 20;
	public static final int REGISTRATION_LASTS = 14;
	public static final int TERM_LASTS = 118;
	public static final String CLERK_PASSWORD = "admin";
	
	public static boolean REGISTRATION_STARTS = false;
	public static boolean REGISTRATION_ENDS = false;
	public static boolean TERM_ENDS = false;
	
}
