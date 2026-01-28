import java.io.File;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        // TODO: Uncomment the code below to pass the first stage
        String currDir = System.getProperty("user.dir");

        while(true) {
            System.out.print("$ ");
            Scanner scanner = new Scanner(System.in);
            String input = scanner.nextLine();

            boolean externalCommand = false;
            String path = System.getenv("PATH");
            String[] pathDirs = path.split(":");
            for (String pathDir : pathDirs) {
                java.io.File file = new java.io.File(pathDir, input.split(" ")[0]);
                if (file.exists() && file.canExecute()) {externalCommand = true;}
            }

            if (externalCommand) {
                String[] arg = input.split(" ");
                ProcessBuilder pb = new ProcessBuilder(arg);
                pb.directory(new File(currDir));
                pb.inheritIO();
                Process p = pb.start();
                p.waitFor();
            }

            else if(input.equals("exit")) {
                break;
            }
            else if(input.startsWith("echo")) {
                System.out.println(input.substring(5));
            }
            else if(input.startsWith("type")) {
                String[] parts = input.split(" ");
                String[] commands = {"echo", "type", "exit", "pwd", "cd"};

                if(Arrays.stream(commands).anyMatch(command -> command.equals(parts[1]))) {
                    System.out.println(parts[1] + " is a shell builtin");
                }
                else {
                    boolean found = false;
                    for(String dir : pathDirs) {
                        java.io.File file = new java.io.File(dir, parts[1]);
                        if(file.exists() && file.canExecute()) {
                            System.out.println(parts[1] + " is " + file.getAbsolutePath());
                            found = true;
                            break;
                        }
                    }
                    if(!found) {
                        System.out.println(parts[1] + ": not found");
                    }
            }}
            else if(input.startsWith("pwd")) {
                System.out.println(currDir);
            }
            else if (input.startsWith("cd")) {
                String[] parts = input.split(" ");
                if (parts.length > 1) {
                    File dir = parts[1].startsWith("/")
                            ? new File(parts[1])
                            : new File(currDir, parts[1]);

                    if (dir.exists() && dir.isDirectory()) {
                        currDir = dir.getCanonicalPath();
                    } else {
                        System.out.println("cd: " + parts[1] + ": No such file or directory");
                    }
                }
            }
            else {
                System.out.println(input + ": command not found");
            }
        }
    }
}
