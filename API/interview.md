# Interview Questions related to API Development

### Describe the initial steps you would take when develing an API?

## [Some (somewhat bad) Q&As](https://www.simplilearn.com/rest-api-interview-questions-answers-article)

### What is REST?

REST Stands for Representational State Transfer

### What is a REST API?

An API is an application programming interface, which is a software-to-software interface that allows otherwise separate applications to interact and share data. In a REST API, all data is treated as resources, each one represented by a unique uniform resource identifier (URI).

###  What do you mean by RESTful web services?

REST API is also known as RESTful web services that follow the REST architecture.

###  What are cache-control headers?

Cache-control headers are used to control catching and to attain caching ability. The most commonly used cache-control headers are public, private, and No-Store.

### What are the features of RESTful web services?

REStful web services have the following unique features:

    Client-server decoupling
    Communication support
    Lightweight
    Uniform interface 
    Stateless 
    Layered system
    Cacheable
    Code on demand

### What is the definition of messaging in terms of RESTful web services?

In REST API web services, when a REST client wants to send a message to the server, it can be sent in an HTTP request form, and the same applies to the server. This kind of communication is called messaging in REST.

### Explain ‘Addressing’ in RESTful web services.

The process of locating various types of resources with the help of a URL on the REST server is known as ‘addressing’ in RESTful web services. Usually, single or multiple resources are addressed by resources.

### Why are REST services easily scalable?

REST services are scalable due to the statelessness that they do not store data on the server even though they are requested and do not require much communication.

### What are Idempotent methods?

Idempotent methods are known to return the same outcome even after the same request has been made multiple times, and it avoids errors caused by duplicate requests on the client side.

### How can RESTful web services be tested?

The RESTful web services can be tested with the help of tools such as Swagger and Postman, which enable users to inspect query parameters, response headers, and headers, documentation of the endpoints, and conversion of endpoints to XML and JSON.

### What are payloads in RESTful web services?

Payloads are the request data passed through the POST or GET method and found in the message’s body of an HTTP request in RESTful web services.

### What is the maximum payload size that can be sent in POST methods?

Theoretically, there is no such maximum limit for payload size that can be sent in POST methods. However, payloads with larger sizes can consume larger bandwidth. Thus the server could take more time to proceed with the request.

### Which protocol does REST APIs use?

Protocols are used to communicate with clients where REST APIs use HTTP protocol for it.

### In REST APIs, which markup languages are used to represent the resources?

The resources in REST APIs are represented with the help of XML (extensible markup language) and JSON (JavaScript Object Notation).

### Differentiate POST and PUT methods.

#### POST Method 

- Create a new resource on the server
- is not idempotent.
- responses are cacheable. 

#### PUT Method 

- PUT is used to replace a resource at a specific URI with another resource.
- PUT is idempotent that it will only result in one resource even after calling it multiple times. PUT responses are not.

### Which HTTP request methods are supported by REST?

REST supports various types of HTTP request methods such as GET, POST, PUT, DELETE, HEAD, OPTIONS, ETC.

### What is CRUD?

CRUD stands for “Create, Read, Update, Delete.” 

### The main parts of an HTTP response

The main parts of the HTTP response are the HTTP version, Status line, HTTP Response Header, and HTTP Response body. 

### What are the most common HTTP response status codes you see while working in REST API?

Some of the most common response status codes are 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, etc. 

20. What is a resource?

In REST, A resource is an object with a label and accessible on the server. Resources consist of associated data, a list of methods, and a relationship with other resources on the server. 
21. What is a URI?

URI stands for ‘Uniform Resource Identifier.
22. What is caching in the REST API?

REST API stores a copy of a server response in a particular location of computer memory to retrieve the server response fast in the future. This method is temporary and called "catching."  
23. What’s a real-world example of a REST API?

    Public REST APIs are harnessed by weather apps to display weather information and share the related data.
    Airlines use APIs to expose the flight times and prices to allow travel and ticketing sites for businesses. 
    Public transportation services use APIs to make their data publicly open to make it available for mapping and navigation apps in real-time. 

24. What is the difference between REST and SOAP?

REST(Representational State Transfer) 

    It is an architectural design pattern used to develop web services. 
    It is faster in speed and more cacheable. 
    It inherits only the security measures concerning the protocol that have been implemented.

SOAP (Simple Object Access Protocol)

    It is a strict protocol used to build secure APIs.  
    It is slower in speed and not cacheable.  
    It is able to define its own security measures.

25. What do you understand about JAX-RS?

It is a Java-based specification implemented for RESTful services and defined by JEE.
26. Disadvantages of RESTful web services?

    RESTful web services are stateless and do not maintain session simulation responsibility as the client side does not provide a particular session id for it.  
    REST is not able to impose the security restriction inherently. However, it inherits them with the help of implementing protocols. Thus, the integration of SSL/TLS authentication needs to be done very carefully for better security measures of the REST APIs. 

27. Advantages of REST 

    HTTP makes the implementation of REST easy. 
    REST fits in the existing infrastructure of the web, thus the web application can easily implement the REST. XML and JSON web technologies make REST easy to learn. 
    The client and server communication is stateless, thus the integration is easy to build and scalable, and manageable with respect to time. 
    The REST architecture can adapt to a huge variety of cases due to its flexibility.
    The lightweight architecture of REST makes it easy to build the applications faster as compared to other types of APIs.
    REST can be tested easily in the browser with the help of API testing tools.

28. How do you keep REST APIs secure?

REST APIs can be kept secure with the help of safety measures such as Authentication and authorization, API Server Validation, TSl/SSL Encryption, Rate-limiting for DDoS attacks, and sensitive information such as username, password, or authentication token should not be visible in URIs
29. What are “Options” in REST APIs? 

It is an HTTP method used to fetch the supported HTTP options or operations that help clients to choose the options in REST APIs. Cross-Origin Resource Sharing (CORS) uses the REST option method.
Want a Top Software Development Job? Start Here!
Full Stack Development-MEANExplore Program
Want a Top Software Development Job? Start Here!
30. Different types of API architectures 

There are other two API architectures used, SOAP (Simple Object Access Protocol), and RPC (Remote Procedure Call)
31. What are the different application integration styles?

The different application integration styles are Shared database, Batch file transfer, Invoking remote procedure (RPC), and Swapping asynchronous messages over a message-oriented middleware (MOM).
32. How is JAXB related to RESTful web API?

JAXB is a Java arch used for XML binding in RESTful web API.
33. What is AJAX?

AJAX stands for  Asynchronous javascript and XML.
34. What does the HEAD method in REST APIs do? 

The HEAD method is used to return the HTTP Header in read-only form and not the Body.
35. Which frameworks can JAX-RS implement in the RESTful web?

JAX-RS is used to implement frameworks such as Jersey, RESTEasy, Apache, and CFX.

### What are HTTP status codes and their meaning?

    Code 200: success.
    Code 201: resource has been successfully created. 
    Code 204: no content in the response body.
    Code 404: no method available.

### What is a ‘Resource’?

‘Resource’ is defined as an object of a type that includes image, HTML file, text data, and any type of dynamic data.

### Why is the proper representation of resources required?

Proper representations of resources in the proper format allow the client to easily understand the format and determine the identification of resources easily.
### How to design Resources representation for RESTful web services? 

    It should be easy to understand for the client and server.
    It should be complete irrespective of its format structure.
    It should consider the link of the resources to other resources and handle it carefully. 

### Important aspects of RESTful web services implementation.

    ResourcesRequest 
    Headers
    Request Body
    Response Body
    Status codes

## Frequently Asked Questions

### How do I prepare for a REST API interview?

In addition to knowing how to design a REST API, it  helps to know about the common REST API interview questions that companies generally ask. You should also know why companies prefer REST API and uses of REST API to be better prepared for a REST API interview.

### What is the REST API used for?

In the REST API architecture, HTTP requests are used for accessing and using data. The data accessed using REST API can be used to read, update, delete, and create operations concerning resources.

### What is the difference between API and REST API?

An Application Programming Interface entails rules used to define how different devices or applications communicate with each other and connect to each other. A REST API follows the principles of the REST architectural pattern to create web services. 

### What is the full-form of REST API?

REST API is the acronym used for Representational State Transfer Application Program Interface. 
Conclusion

Now that you have a fair bit of idea on how to answer some of the common REST API interview questions, you can now go ahead and answer the interviews with confidence. To upskill further and develop your software development skills, we would highly recommend Simplilearn’s Post Graduate Program in Full Stack Web Development. This program is designed in collaboration with Caltech CTME can help you develop and master some of the key software development skills.

If you have any doubts or queries regarding the article or the course, feel free to post them in the comments below. Our team will get in touch with you at the earliest.
