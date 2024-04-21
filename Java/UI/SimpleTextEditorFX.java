import javafx.application.Application;
import javafx.stage.FileChooser;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.VBox;
import javafx.scene.input.KeyCode;
import javafx.scene.input.KeyEvent;

import java.io.*;

/**
 * This JavaFX implementation has the following features:

TextArea with Scroll Pane: The text area is placed inside a scroll pane for better text handling and wrapping.
MenuBar with Menus and Menu Items: Provides a "File" menu with "Open", "Save", and "Exit" options.
FileChooser: Used to open and save files with support for different file types.
Error Handling with Alerts: Uses JavaFX's Alert to display error messages.
Event Handling: Uses lambda functions for event handling, making the code more concise and readable.
Modern Layout and UI: JavaFX uses a more modern layout approach, making it easy to design complex UIs.
 */

public class SimpleTextEditorFX extends Application {
    private TextArea textArea;
    private FileChooser fileChooser;

    @Override
    public void start(Stage primaryStage) {
        // Setup the main layout
        BorderPane root = new BorderPane();

        // Create a text area with line wrapping and scrolling
        textArea = new TextArea();
        textArea.setWrapText(true);
        root.setCenter(textArea);

        // Create a menu bar
        MenuBar menuBar = new MenuBar();

        // Create the "File" menu
        Menu fileMenu = new Menu("File");

        // Create menu items
        MenuItem openItem = new MenuItem("Open");
        MenuItem saveItem = new MenuItem("Save");
        MenuItem exitItem = new MenuItem("Exit");

        // Add action listeners for the menu items
        openItem.setOnAction(e -> openFile(primaryStage));
        saveItem.setOnAction(e -> saveFile(primaryStage));
        exitItem.setOnAction(e -> primaryStage.close());

        // Add items to the file menu
        fileMenu.getItems().addAll(openItem, saveItem, new SeparatorMenuItem(), exitItem);

        // Add the file menu to the menu bar
        menuBar.getMenus().add(fileMenu);

        // Set the menu bar at the top of the layout
        root.setTop(menuBar);

        // Create a scene and set it to the stage
        Scene scene = new Scene(root, 600, 400);
        primaryStage.setTitle("Simple Text Editor");
        primaryStage.setScene(scene);
        primaryStage.show();

        // Initialize the file chooser
        fileChooser = new FileChooser();
    }

    private void openFile(Stage stage) {
        FileChooser.ExtensionFilter filter = new FileChooser.ExtensionFilter("Text Files", "*.txt");
        fileChooser.getExtensionFilters().add(filter);

        File file = fileChooser.showOpenDialog(stage);
        if (file != null) {
            try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
                textArea.clear();
                String line;
                while ((line = reader.readLine()) != null) {
                    textArea.appendText(line + "\n");
                }
            } catch (IOException ex) {
                showError("Error reading file.");
            }
        }
    }

    private void saveFile(Stage stage) {
        FileChooser.ExtensionFilter filter = new FileChooser.ExtensionFilter("Text Files", "*.txt");
        fileChooser.getExtensionFilters().add(filter);

        File file = fileChooser.showSaveDialog(stage);
        if (file != null) {
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(file))) {
                writer.write(textArea.getText());
            } catch (IOException ex) {
                showError("Error writing to file.");
            }
        }
    }

    private void showError(String message) {
        Alert alert = new Alert(Alert.AlertType.ERROR);
        alert.setTitle("Error");
        alert.setHeaderText(null);
        alert.setContentText(message);
        alert.showAndWait();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
