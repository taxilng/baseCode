public class Prime {
    public static boolean isPrimeNumber(int num) {
        if (num == 2)
            return true;
        if (num < 2 || num % 2 == 0)
            return false;
        for (int i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i == 0) { 
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        boolean a =  isPrimeNumber(4);
        System.out.println(a);
        boolean b = isPrimeNumber(5);
        System.out.println(b);
    }
}
