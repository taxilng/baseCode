public class Test{
    public static int factorial(int n) {
            if (n == 1) {
                return 1;
            } else {
                return n * factorial(n - 1);
            }
    }
    

        public static int factorialSum(int n) {
            if (n == 1) {
                return 1;
            } else {
                return factorial(n) + factorialSum(n - 1);
            }
        }

   public static void main(String[] args){
       int a=factorial(4);
       System.out.println(a);
       int b=factorialSum(4);
       System.out.println(b);
   }
}

