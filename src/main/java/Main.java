import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        // TODO: Uncomment the code below to pass the first stage
        while(true) {
            System.out.print("$ ");
            Scanner scanner = new Scanner(System.in);
            String input = scanner.nextLine();
            if(input.equals("exit")) {
                break;
            }
            else if(input.startsWith("echo")) {
                System.out.println(input.substring(5));
            }
            else if(input.startsWith("type")) {
                String[] parts = input.split(" ");
                String[] commands = {"echo", "type", "exit"};

                String path = System.getenv("PATH");
                String[] pathDirs = path.split(":");

                if(Arrays.stream(commands).anyMatch(command -> command.equals(parts[1]))) {
                    System.out.println(parts[1] + " is a shell builtin");
                }
                else if(Arrays.stream(pathDirs).anyMatch(pathDir -> pathDir.contains(parts[1]))) {
                    System.out.println(parts[1] + " is " + pathDirs[0]);
                } else  {
                    System.out.println(parts[1] + " not found");
                }
            }
            else {
                System.out.println(input + ": command not found");
            }
        }
    }
}
