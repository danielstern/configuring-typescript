initialization:

I
init npm 
create tsconfig
create gitignore
create main .ts file in root directory
install tsc
build .ts to .js with no special features using tsc and tsconfig
confirm successful execution

create server and public directories
update server to serve application
install type definitions where needed
  - https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/express/index.d.ts

  webpack is needed to actually make typesscritp files an app
https://webpack.js.org/guides/typescript/

Dev server updated?
Webpack-dev-server has been replaced with webpack-serve, install webpack and related packages

II

A common error is as follows:
 Cannot compile modules using option 'outFile' unless the '--module' flag is 'amd' or 'system'.



project outline
description: ticket price upload and edit application
components:
- main
  - navigation
  - ticket price component
    - combined add new / edit form
    - submit button
  - price update service 
    - the usual suspect
