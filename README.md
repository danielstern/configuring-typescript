# About the Application

# Step by Step Assembly of the Application

1. General Scaffolding (Non-Platform Dependant) fd9055e
    a. Initialize package.json
    b. Initialize git package and GitIgnore

    Checkpoint: None

2. Configure the TypeScript Compiler and Compile first File 709a575
    a. Install...
        typescript@4.2.4
    b. reate tsconfig.json
    c. Create src/index.ts
    d. Create npm build script: tsc
    
    Checkpoint: Compilation Should Work

3. Compile the application for browsers a9261a7
    a. Install...
        webpack@5.37.1
        webpack-cli@4.7.0
        webpack-dev-server@3.11.2
        ts-loader@9.2.2
        http-server@^0.12.3

    b. Create webpack.config
    c. Create npm webpack script
    d. Create public/index.html
    e. Create second TypeScript file for import

    Checkpoint: Serve should work with console log combined from two files

4. Implement debugging
    a. Create .vscode/launch.json
    b. Install debugger for chrome (only needs to be done once per workstation, no change to source code)

    Checkpoint: Add breapoint and run the debugging script. Source maps and breakpoints should be functioning correctly.

5. Implement ESLint a20896bbe
    a. Install...
        eslint@4.2.4
        "@typescript-eslint/eslint-plugin": "^4.28.1"
        "@typescript-eslint/parser": "^4.28.1"

    b. Create eslintrc
    c. Add lint npm script

    Checkpoint: Running lint should reveal errors in code style. Functioning of application should not be affected.

6. Upgrading Application to Include Views and Model (Non-Interactive, Complexity 1) 91cbf3b
    a. Create interfaces directory and define ticketSchema
    b. Create a defaultState for the application importing ticketSchema
    c. Create main.ts component which accepts ticketInfo arrays and renders a simple table
    d. Import main.ts component into index and render
    e. Add styles as necessary

    Checkpoint: Application should run in browser and correctly reflect schema