# Golang interview

## Basic Questions
### What are the main features of Go?

- Simplicity and ease of use
- Strong and static typing
- Concurrency support with Goroutines and Channels
- Garbage collection
- Fast compilation
- Built-in testing tools
- Standard library

### How do you declare a variable in Go?

```go
var x int
x = 10
// or
var y = 20
// or
z := 30
```

### What is the difference between `var`, `const`, and `:=` in Go?

- `var` is used to declare variables with an explicit type or inferred type.
- `const` is used to declare constants.
- `:=` is a shorthand for declaring and initializing variables within a function.

### How do you create a slice in Go?

```go
var s []int
s = append(s, 1, 2, 3)
// or
t := []int{1, 2, 3}
```

### What is a Goroutine and how do you create one?

- A Goroutine is a lightweight thread managed by the Go runtime.
- You create a Goroutine by prefixing a function call with the `go` keyword.

```go
go func() {
    fmt.Println("Hello from Goroutine")
}()
```

### Explain the difference between a slice and an array in Go.

- An array has a fixed size and cannot be resized.
- A slice is a dynamically-sized, flexible view into the elements of an array.

### How do you handle errors in Go?

- Errors are handled by returning an error value from functions.

```go
func doSomething() error {
    if somethingWentWrong {
        return errors.New("something went wrong")
    }
    return nil
}
```

### What is a struct in Go and how do you define one?

- A struct is a composite data type that groups together variables under a single name.

```go
type Person struct {
    Name string
    Age  int
}
```

### How do you implement interfaces in Go?

- An interface is a type that specifies a set of method signatures.
- A type implements an interface by implementing its methods.

```go
type Speaker interface {
    Speak() string
}

type Person struct {
    Name string
}

func (p Person) Speak() string {
    return "Hello, my name is " + p.Name
}
```

### What is the purpose of the `defer` statement in Go?

- `defer` is used to ensure that a function call is performed later in a program's execution, usually for purposes of cleanup.

```go
func main() {
    defer fmt.Println("This will be printed last")
    fmt.Println("This will be printed first")
}
```

## Intermediate Questions

### How does Go manage memory?

- Go uses garbage collection to manage memory, automatically freeing up memory that is no longer in use.

### Explain the concept of channels in Go.

- Channels are a way for Goroutines to communicate with each other and synchronize their execution.

```go
ch := make(chan int)
go func() {
    ch <- 42
}()
fmt.Println(<-ch)
```

### How do you perform concurrent programming in Go?

- Concurrent programming is achieved using Goroutines and channels.

```go
go func() {
    fmt.Println("Concurrent execution")
}()
```

### What is the `select` statement used for in Go?

- `select` is used to wait on multiple channel operations.

```go
select {
case msg1 := <-ch1:
    fmt.Println("Received", msg1)
case msg2 := <-ch2:
    fmt.Println("Received", msg2)
}
```

### How do you use the `context` package in Go?

- The `context` package is used to carry deadlines, cancellation signals, and other request-scoped values across API boundaries.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()
```

### Explain the difference between sync.Mutex and sync.RWMutex.

- `sync.Mutex` is a mutual exclusion lock for synchronizing access to shared resources.
- `sync.RWMutex` allows multiple readers or one writer at a time.

### How do you handle JSON in Go?

Use the `encoding/json` package to encode and decode JSON.

```go
type Person struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
}

data, _ := json.Marshal(Person{Name: "Alice", Age: 30})
var p Person
json.Unmarshal(data, &p)
```

### What are the different ways to test code in Go?

- Use the `testing` package to write unit tests.
- Use `go test` to run tests.

```go
func TestAdd(t *testing.T) {
    result := Add(1, 2)
    if result != 3 {
        t.Errorf("expected 3, got %d", result)
    }
}
```

### How do you use the go mod command?

`go mod` is used to manage dependencies in Go modules.

```go
go mod init example.com/mymodule
go mod tidy
```

### What is the purpose of the `init` function in Go?

- The init function is used to initialize package-level variables before the main function runs.

## Advanced Questions

### Explain the garbage collection mechanism in Go.

- Go uses a concurrent, tri-color mark-and-sweep garbage collector to manage memory.

### How do you optimize performance in Go applications?

- Profile your application using `pprof`.
- Optimize algorithms and data structures.
- Reduce memory allocations.
- Use Goroutines and channels efficiently.

### What are the best practices for error handling in Go?

- Return errors from functions.
- Use error wrapping to add context.
- Handle errors at appropriate levels.

### How do you implement dependency injection in Go?

- Use interfaces to abstract dependencies.
- Pass dependencies as parameters to constructors or functions.

### Explain the use of reflection in Go.

- Reflection is used to inspect and manipulate objects at runtime.
- Use the `reflect` package to perform reflection.

### How do you manage packages and modules in Go?

- Use `go mod` to manage dependencies.
- Organize code into packages.

### What are some common pitfalls in Go programming?

- Ignoring errors.
- Using global variables.
- Improper use of Goroutines and channels.
- Memory leaks due to improper use of `defer`.

### How do you handle large data sets in Go?

- Use streaming and buffering techniques.
- Optimize memory usage.
- Use efficient data structures.

### Explain the concept of "escape analysis" in Go.

- Escape analysis determines whether variables can be allocated on the stack or must be allocated on the heap.

### How do you use the `unsafe` package in Go?

- The `unsafe` package allows for low-level programming, such as pointer arithmetic and type conversions.
- Use it with caution as it can lead to undefined behavior.