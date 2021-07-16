# About the Application

This is a simple and clearly-structured web application using the following stack:

- Node
- TypeScript
- Webpack

It is designed to be easily extended and serve as a powerful teaching aid.

## Quick Start

Follow these steps to get started:

1. Clone the repository

`git clone git@github.com:danielstern/configuring-typescript.git`

2. Open a terminal to the project directory and install dependencies:

`npm install`

3. Finally, open the application in development mode.

`npm run dev`

You can now open the application at the URL shown in the terminal.

## About the Branches

### [master](https://github.com/danielstern/configuring-typescript)

Contains the full application, useful for building your own application on top of it, or for reviewing the end point before attempting to recreate it yourself.

### [1-compilation](https://github.com/danielstern/configuring-typescript/tree/1-compilation)

Dependencies are installed and TypeScript can be compiled, but no application has been written.

### [2-browser](https://github.com/danielstern/configuring-typescript/tree/2-browser)

Webpack functionality is added so the TypeScript application can be viewed in the browser. A good starting point for creating an application from a mostly blank slate.

### [3-model-view](https://github.com/danielstern/configuring-typescript/tree/3-model-view)

A simple rendering process has been added, as well as multiple TypeScript components. This is the "complete" branch without any additional dev-ops added.

### [4-libraries](https://github.com/danielstern/configuring-typescript/tree/4-libraries)

The completed model-view application with external .js libraries added. This branch is used as practice for creating and downloading declarations .