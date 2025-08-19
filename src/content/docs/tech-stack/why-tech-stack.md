---
title: What is our tech stack?
description: An overview of our technology stack for the development of StudyLink.
---

Below you'll find each of the components chosen for StudyLink.

- Frontend development: Angular CLI
- Backend development: Spring Boot
- Database: PostgreSQL
- Deployment: Microsoft Azure
- Version Control: GitHub
- CI/CD: GitHub Actions


##### Would you like to know why these were our choices?

In our team, no decision comes without logic. Everything we do comes with reasons.

###### Why Angular?

- Strong enterprise reputation → Angular is backed by Google, used in many large-scale, maintainable projects.

- Full framework → Unlike React or Vue, Angular comes with routing, form handling, HTTP, and dependency injection built in — less need to glue libraries together.

- TypeScript by default → Good for large team projects with better type safety and maintainability.

- Structured architecture → The opinionated nature of Angular forces a consistent pattern (components, modules, services) that can help in a big group.

- Mature tooling → Angular CLI is powerful for scaffolding, testing, and building apps fast.

- Good for long-term projects → Easy to scale and maintain if the project lives past the semester.

- Lack of familiarity → we wanted a challenge and to push ourselves out of our comfort zone instead of going for React since it's something we've used before.


###### Why Spring Boot?

- As an extension of the Spring Framework, it follows a "convention over configuration" approach, reducing boilerplate code through auto-configuration. It is fast, secure, and scalable.
- Spring Boot’s REST APIs integrate smoothly with Angular’s HTTP client by providing structured JSON communication, along with built-in support for CORS, request validation, and role-based security, making it easy and secure to connect with a single-page application frontend.
- Spring Boot apps package self-contained JARs with embedded servers, so deployment to Azure App Services is straightforward.
- The framework enforces separation of concerns, keeping the backend maintainable as the Angular frontend and PostgreSQL schema evolve.

###### Why Azure?

- Scalability and Reliability: It's able to handle growth in users and features.
- Integration: Azure integrates quite smoothly with springboot (via Azure App Services), and Angular (via Azure Static Web Apps)
- Security compliance: Azure meets industry-standard certifications, ensuring that user data is stored securely
- Availability: We can deploy our app closer to students for better performance

###### Why GitHub?

- Centralized code management: Keeps the frontend (Angular) and the backend (Spring Boot) in the same organization, with version history. 
- Team collaboration: It allows the developers of the app to work simultaneously using branches and pull requests. 
- Project tracking: GitHub projects and Issues help track and manage tasks, bugs and feature requests for our app.
- Integration: Easily integrates with Azure, enabling continuous deployment

###### Why GitHub Actions?

- Continuous Integration: Whenever code is pushed, automated workflows run tests to catch bugs early
- Continuous Deployment: Deployment updates with Azure will automatically happen without manual intervention, ensuring the app stays up to date. 
- Customizable workflow: We can set up workflows for building our Angular app, packing Spring Boot backend, running unit testing, and deploying to Azure all in one pipeline. 
- Developer productivity: Reduce repetitive deployment steps and ensures consistent environments.