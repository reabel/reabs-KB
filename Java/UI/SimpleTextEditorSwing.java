import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.*;

/**
 * Swing provides more robust and modern GUI components than AWT, along with better features for event handling and layout management. Here's a basic text editor in Java using Swing that allows you to open, save, and exit files. It has a text area for text input and a menu bar with options for basic file operations.
 * 
 * 
 * This refactoring to Swing brings several improvements:
 * JFrame: A more versatile window frame.
 * JTextArea: A more feature-rich text component with better handling of line wraps.
 * JScrollPane: Allows the text area to scroll.
 * JFileChooser: A built-in dialog for file operations like opening and saving.
 * JOptionPane: Provides user feedback in the form of dialog boxes for errors and other messages.
 * Better layout and event handling: Swing generally provides a more modern and consistent approach to layout management and event handling.
 * This refactoring makes the text editor more user-friendly and ready for additional features, should you choose to extend its functionality.
 * 
 */

public class SimpleTextEditorSwing extends JFrame implements ActionListener {
    private JTextArea textArea;
    private JMenuBar menuBar;
    private JMenu fileMenu;
    private JMenuItem openItem, saveItem, exitItem;

    public SimpleTextEditorSwing() {
        // Setup the frame
        setTitle("Simple Text Editor");
        setSize(600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Create a text area with a scroll pane
        textArea = new JTextArea();
        JScrollPane scrollPane = new JScrollPane(textArea);
        add(scrollPane, BorderLayout.CENTER);

        // Create a menu bar
        menuBar = new JMenuBar();

        // Create the "File" menu
        fileMenu = new JMenu("File");

        // Create menu items
        openItem = new JMenuItem("Open");
        saveItem = new JMenuItem("Save");
        exitItem = new JMenuItem("Exit");

        // Add items to the file menu
        fileMenu.add(openItem);
        fileMenu.add(saveItem);
        fileMenu.addSeparator();
        fileMenu.add(exitItem);

        // Add the file menu to the menu bar
        menuBar.add(fileMenu);

        // Set the menu bar for the frame
        setJMenuBar(menuBar);

        // Add action listeners for the menu items
        openItem.addActionListener(this);
        saveItem.addActionListener(this);
        exitItem.addActionListener(this);

        // Center the frame on the screen
        setLocationRelativeTo(null);
    }

    public void actionPerformed(ActionEvent e) {
        String command = e.getActionCommand();

        if (command.equals("Open")) {
            JFileChooser fileChooser = new JFileChooser();
            int returnVal = fileChooser.showOpenDialog(this);

            if (returnVal == JFileChooser.APPROVE_OPTION) {
                File file = fileChooser.getSelectedFile();
                try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
                    textArea.setText("");
                    String line;
                    while ((line = reader.readLine()) != null) {
                        textArea.append(line + "\n");
                    }
                } catch (IOException ex) {
                    JOptionPane.showMessageDialog(this, "Error reading file.", "Error", JOptionPane.ERROR_MESSAGE);
                }
            }
        } else if (command.equals("Save")) {
            JFileChooser fileChooser = new JFileChooser();
            int returnVal = fileChooser.showSaveDialog(this);

            if (returnVal == JFileChooser.APPROVE_OPTION) {
                File file = fileChooser.getSelectedFile();
                try (BufferedWriter writer = new BufferedWriter(new FileWriter(file))) {
                    writer.write(textArea.getText());
                } catch (IOException ex) {
                    JOptionPane.showMessageDialog(this, "Error writing to file.", "Error", JOptionPane.ERROR_MESSAGE);
                }
            }
        } else if (command.equals("Exit")) {
            System.exit(0);
        }
    }

    public static void main(String[] args) {
        SimpleTextEditorSwing editor = new SimpleTextEditorSwing();
        editor.setVisible(true);
    }
}
