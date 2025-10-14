import java.text.NumberFormat;
import java.util.Locale;

public class Main{
    public static void main(String[] args) {

        // Question 1!!!!
        // Computes the cost of driving 100km...
        System.out.println("## Question 1: Petrol Cost Calculation\n");

        double kmPerMile = 1 / 0.6214; // km in one mile
        double litresPerPint = 0.5683;
        int pintsPerGallon = 8;
        double costPerLitre = 1.34; // GBP
        double carMpg = 30.0;
        double distanceKm = 100.0;

        double kpg = carMpg * kmPerMile;

        double litresPerGallon = pintsPerGallon * litresPerPint;
        double kpl = kpg / litresPerGallon; // km per litre
        double metersPerLitre = kpl * 1000; //  km to m

        double litresNeeded = distanceKm / kpl;
        double totalCost = litresNeeded * costPerLitre;

        System.out.printf("Efficiency (km per gallon): %.2f\n", kpg);
        System.out.printf("Distance per litre (m): %.0f\n", metersPerLitre);

        NumberFormat currencyFormatter = NumberFormat.getCurrencyInstance(Locale.UK);
        System.out.println("Cost to drive 100km: " + currencyFormatter.format(totalCost));

        System.out.println("\n--------------------------------------------------\n");


        // Question 2
        // Pseudo-code for finding a maze and its entrance.
        /*
         ## Question 2: Maze Finding Algorithm (Pseudo-code)

         **Assumptions:**
         - The mouse is in a large, rectangular, walled garden.
         - A rectangular maze is located somewhere inside the garden, not touching the walls.
         - The maze has one entrance.
         - The mouse can detect when it bumps into a wall (either the garden wall or a maze wall).

         ---
         ### Algorithm 1: Find the Maze

         This algorithm uses a "lawnmower" pattern to guarantee the mouse will eventually find the maze.

         BEGIN findMaze
             // Step 1: Move to a known starting corner (e.g., top-left)
             TURN until facing North
             MOVE forward until wall is hit
             TURN until facing West
             MOVE forward until wall is hit
             // Mouse is now in the North-West corner

             // Step 2: scan the garden
             TURN until facing South
             LOOP
                 MOVE forward until a wall is hit
                 IF wall is maze_wall THEN
                     EXIT LOOP // Maze found!
                 END IF

                 // Turn the corner and move a small step
                 TURN until facing East
                 MOVE forward one step
                 TURN until facing North
                 MOVE forward until a wall is hit
                 IF wall is maze_wall THEN
                     EXIT LOOP // Maze found!
                 END IF

                 // Turn the corner and move a small step
                 TURN until facing East
                 MOVE forward one step
                 TURN until facing South
             END LOOP
         END findMaze

         ---
         ### Algorithm 2: Find the Entrance

         This algorithm uses the "wall follower" method. The mouse keeps a "hand" on the maze wall and follows it.

         BEGIN findEntrance
             // Assumes mouse has just found the maze and is facing a maze wall
             TURN left 90 degrees // To align parallel with the wall
             // The maze wall is now on the mouse's right side

             LOOP
                 IF wall is on the right THEN
                     MOVE forward one step
                 ELSE // There is an opening to the right (could be the entrance or a corner)
                     TURN right 90 degrees
                     MOVE forward one step
                     IF this is the entrance THEN
                         // Position mouse facing the entrance
                         TURN until facing into the entrance
                         EXIT LOOP // Entrance found!
                     END IF
                 END IF

                 // Check for a wall in front to navigate corners
                 IF wall is in front THEN
                     TURN left 90 degrees
                 END IF
             END LOOP
         END findEntrance

         ---
         ### Efficiency Analysis

         - **Is the algorithm efficient?** Not particularly. The `findMaze` part can be very slow if the garden is large and the maze is small. The `findEntrance` part is reasonably efficient, as it will trace the entire perimeter of the maze once.
         - **Can you find a better solution?** A more efficient search pattern for `findMaze` could be a spiral, starting from the center of the garden and moving outwards. However, the lawnmower pattern is simple and guaranteed to work. For a known rectangular garden, one could also implement a more direct grid search.
        */

        // Question 3
        // Predicted output for the String manipulation code.
        System.out.println("## Question 3: String Method Output\n");
        /*
         * Predicted Output:
         *
         * String length: 8
         * character at index 3: o
         * character value at index 3: 111
         * Starts with 'dino'? true
         * Substring: nos
         */
        // --- Actual Code to Verify ---
        String text = "dinosaur";
        System.out.println("String length: " + text.length());
        System.out.println("character at index 3: " + text.charAt(3));
        System.out.println("character value at index 3: " + text.codePointAt(3));
        System.out.println("Starts with 'dino'? " + text.startsWith("dino"));
        System.out.println("Substring: " + text.substring(2, 5));

        System.out.println("\n--------------------------------------------------\n");


        // ======================================================================
        // Question 4
        // Predicted output for the char and code point comparison code.
        // ======================================================================
        System.out.println("## Question 4: Char vs. Code Point Output\n");
        /*
         * Predicted Output:
         *
         * n == 110
         * o == 111    
         * In Java, when a 'char' is compared to an 'int', the 'char' is promoted
         * to an 'int' using its numeric (Unicode) value.
         *
         * 1. 'n' has a Unicode value of 110. So, the expression (c == codePoint)
         * becomes (110 == 110), which is true.
         * 2. The character at index 3 of "dinosaur" is 'o'. 'o' has a Unicode
         * value of 111. The code point at index 3 is also 111. The expression
         * (c == codePoint) becomes (111 == 111), which is true.
         */
        // --- code ---
        char c = 'n';
        int codePoint = (int) c;
        if (c == codePoint) {
            System.out.format("%c == %d\n", c, codePoint);
        }
        if (c != codePoint) { // not execute
            System.out.format("%c != %d\n", c, codePoint);
        }

        String text2 = "dinosaur";
        c = text2.charAt(3);
        codePoint = text2.codePointAt(3);
        if (c == codePoint) {
            System.out.format("%c == %d%n", c, codePoint);
        } else {
            System.out.format("%c != %d%n", c, codePoint);
        }

        System.out.println("\n--------------------------------------------------\n");

        // Question 5
        // Difference between String and StringBuilder.
        System.out.println("## Question 5: String vs. StringBuilder\n");
        /*
         * ### What is the difference between the two code snippets?
         *
         * The core difference is **immutability vs. mutability**.
         *
         * 1.  **String (Immutable):** The `String` object is immutable, meaning its state cannot be
         * changed after it is created. When `string.replace()` is called, it does not
         * modify the original "penguin" string. Instead, it creates a **new** `String`
         * object with the value "puffin" and reassigns the `string` variable to point
         * to this new object. The original "penguin" object is left unchanged in memory.
         *
         * 2.  **StringBuilder (Mutable):** The `StringBuilder` object is mutable. When
         * `builder.replace()` is called, it modifies the character sequence **within the
         * existing** `StringBuilder` object. No new object is created. This is much more
         * memory and performance-efficient if you need to perform many modifications
         * on a sequence of characters.
         *
         * conCLUDEeeeededede: `String.replace()` returns a new string, while `StringBuilder.replace()`
         * modifies the builder in place.
         */

        // --- Code Snippet 1: String ---
        System.out.println("--- Using String (Immutable) ---");
        String string = "penguin";
        String subString = "engu";
        System.out.println("Original string: " + string);
        string = string.replace(subString, "uff"); // Creates a new String object
        System.out.println("Modified string: " + string);
        System.out.println();

        System.out.println("--- Using StringBuilder (Mutable) ---");
        StringBuilder builder = new StringBuilder("penguin");
        
//c
        int builderIndex = builder.indexOf(subString);
        System.out.println("Original builder: " + builder);
        builder.replace(builderIndex, builderIndex + subString.length(), "uff");
        System.out.println("Modified builder: " + builder);

        System.out.println("\n--------------------------------------------------\n");


        // Question 6
        // Manipulating a StringBuilder object.
        System.out.println("## Question 6: StringBuilder Manipulation\n");

        StringBuilder sb = new StringBuilder("wombat");
        System.out.println("Initial:      " + sb);

        sb.insert(4, "le");
        System.out.println("After insert: " + sb); 

        sb.delete(sb.length() - 2, sb.length());
        System.out.println("After delete: " + sb);

        sb.appendCodePoint(0x1F642)
          .appendCodePoint(0x1F42A)
          .appendCodePoint(0x1F914);

        System.out.println("Final result: " + sb);

        System.out.println("\n--------------------------------------------------\n");


        // Question 7
        // Predicted output for the surrogate pair code and explanation.
        System.out.println("## Question 7: Surrogate Pairs and Code Points\n");
        /*
         * Predicted Output:
         *
         * 🙂
         * 55357 != 128578
         *
         * ### Explanation
         */
    }
}