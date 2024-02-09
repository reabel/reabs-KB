# Security

## FE Web Sec

### OWASP Top 10


### General Concepts

[XSS](https://owasp.org/www-community/attacks/xss/)

Cross-site scripting (XSS) is an injection of code into a normally trustworthy website

Can prevent in a few ways

- Use an industry standard framework
- keep libraries up-to-date (I see you, dependabot)
- Realize that frameworks still aren't perfect and use Output encoding and HTML Sanitization

OWASP provides cheatsheets for XSS preventing

[CORS (Cross-Origin Resource Sharing)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)



[SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)

To Prevent (from [here](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)): 

- Do not write dynamic queries with string concatenation
- prevent malicious SQL input from being included in executed queries



### Common Dependabot issues as of 2023

- Arbitrary Code Execution
- Prototype Pollution
- Cross-site Request Forgery
- XSS Vulnerability in packages