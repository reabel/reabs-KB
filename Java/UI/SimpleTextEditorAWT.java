import java.awt.*;
import java.awt.event.*;
import java.io.*;

public class SimpleTextEditorAWT extends Frame implements ActionListener {
    private TextArea textArea;
    private MenuBar menuBar;
    private Menu fileMenu;
    private MenuItem openItem, saveItem, exitItem;

    public SimpleTextEditorAWT() {
        // Setup the frame
        setTitle("Simple Text Editor");
        setSize(600, 400);

        // Create a text area
        textArea = new TextArea();
        add(textArea, BorderLayout.CENTER);

        // Create a menu bar
        menuBar = new MenuBar();

        // Create the "File" menu
        fileMenu = new Menu("File");

        // Create menu items
        openItem = new MenuItem("Open");
        saveItem = new MenuItem("Save");
        exitItem = new MenuItem("Exit");

        // Add items to the file menu
        fileMenu.add(openItem);
        fileMenu.add(saveItem);
        fileMenu.addSeparator();
        fileMenu.add(exitItem);

        // Add the file menu to the menu bar
        menuBar.add(fileMenu);

        // Set the menu bar for the frame
        setMenuBar(menuBar);

        // Add action listeners for the menu items
        openItem.addActionListener(this);
        saveItem.addActionListener(this);
        exitItem.addActionListener(this);

        // Handle window close
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                dispose();
            }
        });
    }

    public void actionPerformed(ActionEvent e) {
        String command = e.getActionCommand();

        if (command.equals("Open")) {
            FileDialog fd = new FileDialog(this, "Open File", FileDialog.LOAD);
            fd.setVisible(true);

            if (fd.getFile() != null) {
                try {
                    File file = new File(fd.getDirectory(), fd.getFile());
                    BufferedReader reader = new BufferedReader(new FileReader(file));
                    textArea.setText("");
                    String line;
                    while ((line = reader.readLine()) != null) {
                        textArea.append(line + "\n");
                    }
                    reader.close();
                } catch (IOException ex) {
                    ex.printStackTrace();
                }
            }
        } else if (command.equals("Save")) {
            FileDialog fd = new FileDialog(this, "Save File", FileDialog.SAVE);
            fd.setVisible(true);

            if (fd.getFile() != null) {
                try {
                    File file = new File(fd.getDirectory(), fd.getFile());
                    BufferedWriter writer = new BufferedWriter(new FileWriter(file));
                    writer.write(textArea.getText());
                    writer.close();
                } catch (IOException ex) {
                    ex.printStackTrace();
                }
            }
        } else if (command.equals("Exit")) {
            dispose();
        }
    }

    public static void main(String[] args) {
        SimpleTextEditorAWT editor = new SimpleTextEditorAWT();
        editor.setVisible(true);
    }
}
