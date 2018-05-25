public class Daffodil {
    public static boolean isDaffodil(int num) {
        if ( num/100 < 1 || num/100 > 9)
            return false;
        if( ((num/100) * (num/100) * (num/100)) + (((num/10)%10) * ((num/10)%10)* ((num/10)%10)) + (num%10) * (num%10) * (num%10) == num )
            return true;
        else
            return false;

    }

    public static void main(String[] args) {
        boolean a =  isDaffodil(153);
        System.out.println(a);
        boolean b = isDaffodil(211);
        System.out.println(b);
    }
}
