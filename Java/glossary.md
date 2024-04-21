# Java Glossary and Terms

## UI and Core Programs

### Abstract Window Toolkit(AWT)

GUI Components that were implemented using **native-platform versions of the components**. "Largely Supplanted by" Swing

### Swing (set)

Code name for GUI Components that are uniform regardless of any platform / OS

### [JavaFX](https://wiki.openjdk.org/display/OpenJFX)

- JavaFX used to be closed source at Oracle but is now OSS known as [OpenJFX](https://openjfx.io/)
- Pre Jdk 11 ([Java SE 8](https://docs.oracle.com/javase/8/javase-clienttechnologies.htm)) Documentation is still available

### Swing vs JavaFX vs AWT

- Swing is considered more "Pure Java" But JavaFX is preferred
- JavaFX is now a seperate library from the JDK

[Comparison of the three](https://www.geeksforgeeks.org/java-awt-vs-java-swing-vs-java-fx/)


## Data Management and connection

### Java Database Connectivity (JDBC)
A standard for database-independent connectivity (JDBC must be configured for the provided DB last I checked). Provides a "Call-level" API for SQL-based DB Access

## Server deployment

### EAR vs WAR (via Stack Overflow)

https://stackoverflow.com/questions/1594667/war-vs-ear-file

### EJB (Jakarta Enterprice Beans, formerly Enterprise JavaBeans)

https://en.wikipedia.org/wiki/Jakarta_Enterprise_Beans

## Java Syntax Keywords

### Abstract

Used in class definition to specfiy a class is not to be instantiated, but rather inherited by other classes, "An abstract class can have abstract methods that are not implemented in the abstract class but in sublasses.

#### Abstract Class

Contains one or more abstract methods, can never be instantited.

#### Abstract Method

A method configured to exist within an abstract class that should be implemented in an abstract classes sub.

### Java Beans

normal Java class containing private properties that utilize getters and setters

> Partial adapted from https://stackoverflow.com/questions/11406977/what-is-a-java-bean

```Java
public class Person implements java.io.Serializable {
    private String name;
    private String address;

    public String getName(){
        return this.name;
    };

    public void setName(String name){
        this.name = name;
    }

    public String getAddress(){
        return this.address;
    }

    public void setAddress(String address){
        this.address = address
    }

}
```

### (Record) Components

- "A field of a record"

https://youtube.com/shorts/L8RcHrleI5Y?si=dFUBtNr50foJb1n9

## Sources

[Oracle Glossary](https://docs.oracle.com/javase/tutorial/information/glossary.html)

https://stackify.com/java-glossary/