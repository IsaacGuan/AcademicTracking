package server.logic.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class testRandom {

	public static void main(String[] args) {
		boolean flag = true;
		int a = 1;
		int b = 2;
		int n = a + b + (flag?1:0);
		//System.out.println(n);
		List<Double> randomNumber = new ArrayList<Double>();
		double sum = 0.0;
		Random random = new Random();
		for(int i=0; i<n; i++) {
			randomNumber.add(random.nextDouble());
			//System.out.println(randomNumber.get(i));
			sum = sum + randomNumber.get(i);
		}
		double k = sum/100;
		//System.out.println(k);
		for(int i=0; i<n; i++) {
			double j = randomNumber.get(i) / k;
			//System.out.println(j);
			randomNumber.set(i, j);
		}
		int s = 0;
		if(a>0) {
			List<Integer> wm = new ArrayList<Integer>();
			for(int i=0; i<a; i++){
				wm.add((int)(double)randomNumber.get(i));
				s = s + wm.get(i);
			}
			System.out.println("wm");
			for(int i=0; i<wm.size(); i++) {
				System.out.println(wm.get(i));
			}
		}
		if(b>0) {
			List<Integer> wa = new ArrayList<Integer>();
			for(int i=0; i<b; i++){
				wa.add((int)(double)randomNumber.get(a+i));
				s = s + wa.get(i);
			}
			System.out.println("wa");
			for(int i=0; i<wa.size(); i++) {
				System.out.println(wa.get(i));
			}
		}
		System.out.println("wf");
		if(flag){
			int wf = 100 - s;
			//int wf = randomNumber.get(a+b);
			System.out.println(wf);
		}
		System.out.println();
		System.out.println(s);

	}

}
