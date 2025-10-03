import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner myObj = new Scanner(System.in);
        System.out.println("how many batches would you like?");

        Integer batches = myObj.nextInt();


        System.out.println("Recipe : Chocolate chip cookies (makes" + (batches * 12) + "cookies)\n");
        System.out.println("Ingredients: " + (4*batches) + "oz sugar\n" +
                "           "+(4*batches)+"oz butter\n" +
                "           "+(8*batches)+"oz self raising flour\n" +
                "           "+(batches)+"   egg\n" +
                "           vanilla essence\n" +
                "           "+(4*batches)+"oz chocolate chips\n");
        System.out.println(" step 1 : Mix sugar, butter and self raising flour thoroughly\n");
        System.out.println("step 2 : Stir in egg, a few drops of vanilla essence and chocolate chips\n");
        System.out.println("step 3 : Roll out mixture and cut out cookies.\n");
        System.out.println("step 4 : Bake in hot oven (Gas Mark 6) for 10-12 minutes.");
    }
}
