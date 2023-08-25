# ts-essentials

## Installing TypeScript Glabally
npm install -g typescript

## Checking TS is correctly installed
tsc -v

## Init a TS project
tsc --init

## Setup or let by default the project options in tsconfig.json file
for example uncomment/add "outDir": "./src", /

## To compile the TS files and generate the JS files
tsc
tsc -w

## To run the resulted js files
cd src
node --watch [FILE_NAME]

OR

npx ts-node [FILE_NAME] or ts-node [FILE_NAME]
(Needs npx to be installed 👇)

## Installing npx in order to run ts files
npm install -g npx


