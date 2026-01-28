import java.nio.file.Path;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        // TODO: Uncomment the code below to pass the first stage
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

            if(externalCommand) {
                String[] Args = input.split(" ");
                ProcessBuilder pb = new ProcessBuilder(Args);
                pb.inheritIO();
                Process process = pb.start();
                process.waitFor();
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
                System.out.println(System.getProperty("user.dir"));
            }
            else if (input.startsWith("cd")) {
                Path currentDirectory = Path.of(System.getProperty("user.dir"));
                String[] arguments = input.split(" ");
                Path newDirectory;
                String home = System.getProperty("user.home");
                if (arguments.length == 1) {
                    newDirectory = java.nio.file.Path.of(home);
                } else if (arguments[1].startsWith("~")) {
                    String replaced = arguments[1].replaceFirst("~", home);
                    newDirectory = java.nio.file.Path.of(replaced).normalize();
                } else {
                    java.nio.file.Path inputPath = java.nio.file.Path.of(arguments[1]);
                    newDirectory =
                            inputPath.isAbsolute()
                                    ? inputPath
                                    : currentDirectory.resolve(inputPath).normalize();
                }

                if (java.nio.file.Files.exists(newDirectory) && java.nio.file.Files.isDirectory(newDirectory)) {
                    currentDirectory = newDirectory;
                    System.setProperty("user.dir", currentDirectory.toString());
                } else {
                    System.out.println("cd: " + (arguments.length > 1 ? arguments[1] : "") + ": No such file or directory");
                }
            }
            else {
                System.out.println(input + ": command not found");
            }
        }
    }
}
