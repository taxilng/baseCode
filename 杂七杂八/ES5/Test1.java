public class Test1 {
    public static int factorial(int n) {
        if (n == 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    public static void main(String[] args) {
        int a = factorial(4);
        System.out.println(a);
    }
}
