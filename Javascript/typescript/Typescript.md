
# [Typescript](https://www.typescriptlang.org/)

> a typed superset of JavaScript

## Topics to review

- tuples
- type alias
- enums

## Quiz Results and topics

### Question 1

> What are the three main 'simple types' in TypeScript?

Boolean, Number, String

### Question 2

> What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?

Explicit

### Question 3

> True or False: TypeScript can always correctly infer a variables type.

False

### Question 4

> You can disable implicit variable type assignment by enabling the compiler option:

noImplicitAny

### Question 5

> You can enable 'undefined' and 'null' types to be accounted for by enabling the compiler property:

strictNullChecks

### Question 6

> ______ is similar to 'any', but a safer alternative when uncertain about the type.

unknown

### Question 7

> What is the inherited type for the variable example in `const example = ['Dylan']`?

string[]

### Question 8

> What does the 'readonly' access modifier do for an array variable assignment like: `const codeNames: readonly string[] = ['Coding', 'God']`?

Allows no changes and is there simply to be read from and not modified

### Question 9

> True or False: TypeScript will always correctly infer the type of an array.

False

### Question 10

> True or False: a Tuple and an Array are the same thing when discussing types

False

### Question 11

> Which is a successful example of this tuple `[number, string]`?

`const ourTuple = [101, 'Coding God']`

### Question 12

> Type Aliases are mostly used with ______.

Strings

### Question 13

> True or False: Interfaces are similar to type aliases, but only for object types?

True

### Question 14

> ________ an interface will have the same properties as that interface.

Extending

### Question 15

> What are the two types of enums?

String and Number

### Question 16

> Numeric enums first value is defaulted to what?

0

### Question 17

> True or False: 'keyof' can be used with index signatures to extract the index type.

True

### Question 18

> True or False: Generics can not be assigned default values.

False

### Question 19

> Definitely Typed is...

a project that provides a central repository of TypeScript definitions for NPM packages which do not have types

### Question 20

> What is the type of the parameter: `function ex(param1?: string){}`?

string | undefined

### Question 21

> _____ is a return type for when nothing is returned.

void

### Question 22

> Access modifiers control the ______ of properties and methods.

visibility

### Question 23

> True or False: public modifiers allow access to the class members from anywhere.

True

### Question 24

> True or False: protected modifiers only are allowed in the inherited class.

False

### Question 25

> When a class extends another class and replaces the members of its parent it is called what?

override
