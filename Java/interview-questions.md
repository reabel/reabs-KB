# Java Interview Questions

## What is Java? Explain its key features

Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). Its key features include platform independence, automatic memory management (garbage collection), strong typing, and robustness.

## Differentiate between JDK, JRE, and JVM

- JDK (Java Development Kit): It is a software development kit that provides tools for developing Java applications. It includes JRE and development tools such as compilers and debuggers.
- JRE (Java Runtime Environment): It is an environment that allows Java programs to run. It includes JVM and core libraries required to execute Java applications.
- JVM (Java Virtual Machine): It is an abstract machine that provides a runtime environment for executing Java bytecode. It converts bytecode into machine-specific instructions.

## Explain the difference between == and equals() method in Java

- '==' is an operator used to compare the memory addresses of two objects.
- equals() method is a method of the Object class used to compare the contents or values of two objects. It needs to be overridden in user-defined classes for meaningful comparison.

## What are the main principles of object-oriented programming (OOP)?

The main principles of OOP are:

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction

## What is the difference between abstraction and encapsulation?

- Abstraction is the process of hiding the implementation details and showing only essential features of an object.
- Encapsulation is the bundling of data and methods that operate on the data into a single unit (class), thus hiding the internal state of an object from the outside world.

## Explain the concept of inheritance in Java with an example

Inheritance allows a class to inherit properties and behavior (methods) from another class. For example:

```java
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}
```

## What is method overloading and method overriding? Differentiate between them

- Method overloading is the process of defining multiple methods in a class with the same name but different parameters.
- Method overriding is the process of redefining a method in the subclass that is already defined in the superclass, with the same name, return type, and parameters.

## How does Java support multiple inheritance?

Java does not support multiple inheritance through classes, but it supports it through interfaces. A class can implement multiple interfaces, thus achieving multiple inheritance of types.

## What is a constructor? Explain types of constructors in Java

A constructor is a special method used to initialize objects. In Java, constructors do not have a return type and have the same name as the class. Types of constructors include default constructor, parameterized constructor, and copy constructor.

## What is the difference between static and instance variables/methods?

- Static variables/methods belong to the class and are shared among all instances of the class.
- Instance variables/methods belong to each instance of the class and are not shared among instances.

## What is the use of the 'final' keyword in Java?

- In Java, the `final` keyword can be applied to variables, methods, and classes.
- When applied to a variable, it indicates that the variable's value cannot be changed once initialized.
- When applied to a method, it indicates that the method cannot be overridden by subclasses.
- When applied to a class, it indicates that the class cannot be subclassed.

## Explain the concept of polymorphism in Java with examples

Polymorphism allows objects of different classes to be treated as objects of a common superclass. Examples include method overriding and method overloading.

## What are interfaces in Java? How are they different from abstract classes?

- Interfaces in Java define a contract for classes to implement. They contain abstract methods and constants but cannot contain method implementations.
- Abstract classes can have both abstract and concrete methods, and they can also have instance variables.

## Can you explain the concept of exception handling in Java? What are checked and unchecked exceptions?

Exception handling in Java allows you to handle runtime errors gracefully. Checked exceptions are checked at compile-time, while unchecked exceptions are not checked at compile-time.

## What is the purpose of the 'try', 'catch', and 'finally' blocks in exception handling?

- 'try' block is used to enclose the code that might throw an exception.
- 'catch' block is used to handle the exception caught by the 'try' block.
- 'finally' block is used to execute code regardless of whether an exception is thrown or not. It is often used to release resources.

## How does Java handle memory management and garbage collection?

Java uses automatic memory management through garbage collection. The garbage collector periodically identifies and removes objects that are no longer needed, reclaiming their memory.

## What are the differences between ArrayList and LinkedList in Java?

- ArrayList is implemented as a resizable array, while LinkedList is implemented as a [doubly-linked](https://en.wikipedia.org/wiki/Doubly_linked_list) list. TODO: Expand on this
- ArrayList provides fast random access, while LinkedList provides fast insertion and deletion.

## What is a Java thread? How can you create and start a thread in Java?

A thread in Java represents a separate path of execution. You can create and start a thread by extending the Thread class or implementing the Runnable interface, and then calling the start() method.

## Explain the concept of synchronization in Java. Why is it important?

Synchronization in Java ensures that only one thread can access a shared resource at a time, preventing data corruption and inconsistency. It is important in multithreaded environments to maintain data integrity.

## What is the difference between HashMap and HashTable in Java?

- HashMap is not synchronized and is not thread-safe, while HashTable is synchronized and is thread-safe.
- HashMap allows null values and one null key, while HashTable does not allow null keys or values.

## How does Java support multithreading?

Java supports multithreading through the Thread class and Runnable interface. You can create and manage multiple threads of execution to perform tasks concurrently.

## Explain the concept of anonymous classes in Java

Anonymous classes are inner classes without a name. They are defined and instantiated at the same time. They are often used when a class needs to be used only once.

## What is the 'this' keyword used for in Java?

The 'this' keyword in Java is a reference to the current object. It is used to differentiate between instance variables and parameters with the same name, and to call other constructors of the same class.

## How does method overriding differ from method overloading?

Method overriding involves providing a new implementation of a method in a subclass, whereas method overloading involves defining multiple methods with the same name but different parameters in the same class.

## What are the access modifiers available in Java, and what do they mean?

> Java provides four access modifiers:

- `public`: Accessible from anywhere.
- `protected`: Accessible within the same package or subclass.
- `default` (no modifier): Accessible within the same package.
- `private`: Accessible only within the same class.
