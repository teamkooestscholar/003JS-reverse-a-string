public class ReverseString {
    public static String reverse(String input) {
        if (input == null) {
            return null; // Handle null input if needed
        }

        char[] charArray = input.toCharArray();
        int start = 0;
        int end = charArray.length - 1;

        while (start < end) {
            // Swap characters at start and end positions
            char temp = charArray[start];
            charArray[start] = charArray[end];
            charArray[end] = temp;

            // Move the pointers towards each other
            start++;
            end--;
        }

        return new String(charArray);
    }

    public static void main(String[] args) {
        String original = "Hello, World!";
        String reversed = reverse(original);

        System.out.println("Original: " + original);
        System.out.println("Reversed: " + reversed);
    }
}
