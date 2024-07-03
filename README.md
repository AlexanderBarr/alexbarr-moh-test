# MohOnlineTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Table Rendering Task Description

### Objective:

The objective of this test is to evaluate the candidate's proficiency in Angular development. The task involves dynamically rendering a table based on a given data structure (`TableData`, `TableHeader`, `Row`). The candidate will need to handle various UI types (`text`, `dropdown`, `dateTime`, `input`) as defined in the header data.

### Framework Choice:

- Angular: Implementing the solution using Angular is preferred since we use Angular in-house.
- React: React is acceptable, If you choose React, create a new React project, copy the data structure from data.ts, and implement the table rendering logic using React components. Ensure your solution includes all necessary dependencies and setup instructions in the README.md

### Assessment Criteria:

- A complete Angular component (`TableRendererComponent`) that dynamically renders a table based on `TableData`.
- Integration of the component into a parent component (`AppComponent` or similar) where `mockData` is provided.
- Ensure the table displays data accurately according to the configuration in `TableData.header`.
- Utilize Angular features such as `*ngFor`, and data binding to render `TableData` dynamically.
- Accuracy in displaying data based on `TableData.header` configuration.
- Handling of different UI types (`text`, `dropdown`, `dateTime`, `input`) as specified in `TableData.header`.
- Code readability, organization, and adherence to Angular best practices.
- Basic styling of the rendered table and presents data clearly.

### Documentation and Best Practices:

- Use descriptive variable and function names.
- Provide meaningful git history of each major step
- Correctly use the type narrowing of the TypeScript (https://www.typescriptlang.org/docs/handbook/2/narrowing.html) instead of type casting, NEVER use (any) annotation

### How to submit your result:
