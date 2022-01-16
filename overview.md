# CodeX Academy

## Level Overview

### Front-End Developer

CodeX Academy's Front-End Developer levels build and prove mastery of skills needed to succeed in front-end web development. Starting with programming basics in Level 1, each level builds on previous skills. Working through these levels, learners will prove skills in various technologies including Git, Heroku deployment, VS Code, HTML, CSS and JavaScript. By Level 3, learners will build data-driven web applications using web technologies and Google's Firebase.

{% for level in site.levels %}
#### Level {{ level.number }} 

{{ level.description | markdownify }}

**Skills:**

{% for skill in level.skills %}
- {{skill.skill}}{% endfor %}
{% endfor %}


#### Level 3

Build and deploy responsive data-driven web applications using ReactJS, SASS, JavaScript and other modern tools.

**Skills:**

- Write maintainable [JavaScript](languages/javascript4.md) code to solve complex problems.
- Integrate pre-built functionality from various libraries found in [NPM](tools/npm1.md).
- Create reusable functions and variables in [SASS](languages/sass2.md).
- Transpile cutting edge JavaScript code to legacy versions for browser compatibility using Babel.  
- Automate the packaging of entire web applications using default Webpack configurations.
- Integrate advanced HTML and CSS structures and components into existing web applications using Bootstrap.
- Build modern component-based web applications with 2-way input binding using ReactJS.
- Write isolated and repeatable unit tests for JavaScript code.
- Utilize functional JavaScript libraries to extend applications and reduce maintenance liabilities.
- Implement secure sections of a web application using Google SSO and Firebase Authentication.
- Build web applications with CRUD data functionality using the firebase SDK.

### Full-Stack Developer

#### Level 4

Build custom backend-driven web applications using HTML, CSS, TypeScript and NodeJS.

**Skills:**

- Write and maintain statically-typed JavaScript code using TypeScript.
- Add, remove and maintain Node-based project dependencies using NPM.
- Configure Babel transpilation using presets and plugins.
- Write and execute JavaScript for the server or local machine using NodeJS.
- Write and execute queries that create, read, update and delete data in a relational database using SQL.
- Integrate database operations in a NodeJS application.
- Write fully isolated unit tests for complex code that has dependencies.
- Prepare web applications for production with advanced bundling techniques using Webpack.
- Build custom REST-based APIs and back-end servers using ExpressJS.
- Build complex and maintainable front-end web application with modern Flux architecture using React and Redux.

#### Level 5

Build and deploy database-driven web applications using ReactJS and NodeJS.

**Skills:**

- Write maintainable object-oriented code using TypeScript.
- Build complex, maintainable and trustworthy API back-end using ExpressJS, advanced routing and validation.
- Utilize 3rd party web services, APIs and SDKs to perform valuable actions like mail sending.
- Follow "red-geeen-refactor" to write isolated unit tests with mocks and fakes that drive trustworthy and maintainable code.
- Manage and query data in a relational database with complex joining, grouping and aggregates using SQL.
- Develop back-end code that interfaces with the database for complex query scenarios without writing SQL using Object Relational Mappers.
- Deploy static front-end web applications for public consumption to AWS S3.
- Write executable shell scripts to automate file system processes using Bash.
- Build continuous integration pipelines that automatically compile code, run tests and packages deliverables on every push.
- Implement HTTP Basic Authentication in the back-end.
- Write code that adheres to the Single Responsibility Principle.

#### Level 6

Build and deploy complex, maintainable, database-driven web applications using React, Angular, NodeJS and other modern tools.

**Skills:**

- Write advanced object-oriented TypeScript with generics and reflection.
- Follow "red-geeen-refactor" to write entire suites of isolated unit tests with mocks and fakes that drive trustworthy, maintainable code with high test coverage.
- Defend against common vulnerabilities such as Injection, Broken Authentication and Sensitive Data Exposure.  
- Build secure front-end and back-end applications using oAuth.
- Write code that adheres to the Open/Closed Principle.
- Work productively as part of a team that applies principles and practices of Scrum.
- Build maintainable applications with low coupling and appropriate separation of concerns in order to be compatible with a domain-driven architecture.
- Write and maintain docker containers.
- Build continuous deployment pipelines that continue after CI to automatically deploy web applications and migrate databases on every push to appropriate branches.
- Deploy back-end servers to AWS Elastic Beanstalk that connect to relational databases in AWS RDS.
- Integrate NoSQL databases in NodeJS back-ends to query and modify data.
- Integrate GraphQL in front-end web applications to query and display data.
- Write simple console/command-line applications with basic functionality using .NET and C#.

### Full-Stack Engineer

#### Level 7

Masterfully design and build complex full-stack applications using software engineering principles and practices.

**Skills:**

- Write .NET applications using features of C# such as extension methods, generic types, advanced built-in and custom types, and advanced execution flow control.
- Write isolated unit tests with distinct arrange, act and assert stages that drive implementation code in C#.
- Defend against common vulnerabilities such as XML External Entities (XXE), Broken Access Control and Security Misconfiguration.  
- Design and implement a business domain in code using multiple bounded contexts and inter-context communication in order to be compatible with a domain-driven architecture.
- Create and deploy cloud functions to AWS Lambda for short-lived, distributed functionality.
- Manage and Interact with AWS services such as EC2, SNS and SQS.  
- Containerize and provision applications using Docker Compose.
- Implement the Adapter Pattern in code for appropriate situations.
- Write code that adheres to the the Liskov Substitution Principle.
- Implement GraphQL in the backend to respond to client queries.
- Integrate NoSQL database in an .NET back-end application.  
- Secure front-end applications using oAuth and OIDC.  
- Process client payments in front-end and back-end applications using Stripe.
- Enable a team to work collaboratively and productively in a context that applies principles and practices of Scrum.
- Build REST APIs using ASP.NET.

#### Level 8

Masterfully construct complex full-stack applications using software engineering principles and practices.

**Skills:**

- Build REST APIs with advanced routing and custom middleware in ASP.NET.
- Build .NET applications that integrate reusable functionality from various 3rd party libraries.
- Integrate ORMs in .NET applications to communicate with databases without direct SQL queries.
- Secure both front-end and back-end systems using oAuth and OIDC.
- Write code that adheres to the the Interface Segregation Principle.
- Implement the Strategy Pattern in code for appropriate situations.
- Recognize signs of and write code that defends against common issues such as memory leaks, infinite loops and n+1.  
- Defend against common vulnerabilities such as Cross-Site Scripting (XSS).
- Utilize and configure AWS services such as VPC, ECR, API Gateway and ECS.
- Design and implement back-ends with Hexagonal Architecture.
- Build systems that take advantage of the segregation of commands and queries.
- Write clear feedback for other developers about code smells found when reviewing their code.
- Lead an agile team to work productively in a context that applies principles and practices of Scrum.

#### Level 9

Masterfully construct complex full-stack applications using software engineering principles and practices.

**Skills:**

- Build .NET applications that integrate reusable functionality from various advanced 3rd party libraries.
- Write code that adheres to the the Dependency Inversion Principle.
- Solve problems using reactive programming techniques and tools.
- Recognize signs of and write code that defends against common issues such as deadlocks, data races and race conditions.  
- Write defensive code by using secure deserialization, avoiding components with known vulnerabilities implementing sufficient logging and monitoring.  
- Design and develop solutions using the pub sub architectural paradigm.
- Build systems that take advantage of the segregation of commands and queries, domain events and event sourcing.
- Contribute in valuable ways to product backlog grooming meetings.
- Engage other developers in productive pair programming.


