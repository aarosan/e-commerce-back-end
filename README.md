# e-commerce-back-end [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## Description

The back end of an e-commerce site using Express.js API, Sequelize, and MySQL

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [E-Commerce Database](#ecommerce-db)
- [Screen Recording](#screen-recording)
- [License](#license)
- [Questions](#questions)

<a id="features"></a>

### Features

This application allows you to do the following:
- Add your database name, MySQL username, and MySQL password to an environment variable file
- Connect to a database using Sequelize
- Enter schema and seed commands to create and seed ecommerce_db
- Run 'npm start' to start the server and sync the Sequelize models to the MySQL database
- Data for each GET route is displayed in a formatted JSON for categories, products, and tags
- Data for each POST route is successfully created in the ecommerce_db for categories, products, and tags
- Data for each PUT route is successfully updated in the ecommerce_db for categories, products, and tags
- Data for each DELETE route is successfully deleted in the ecommerce_db for categories, products, and tags

<a id="installation"></a>

### Installation

1. **Clone the following repo:**
    - ```git clone https://github.com/aaron-ross-sanchez/e-commerce-back-end.git```
2. **Open in cloned repo in your preferred text editor**
3. **Install node.js**
4. **Once node.js is installed, execute the folllowing command to initialize and create a package.json:**
    - ```npm init -y```
5. **Navigate to the appropriate directory and execute the following command in the terminal to install all required dependencies:**
    - ```npm i```
6. **Check to make sure the following dependencies have been added to your package.json:**
    - ```"dotenv": "^8.2.0"```
    - ```"express": "^4.17.1"```
    - ```"mysql2": "^2.1.0"```
    - ```"sequelize": "^5.21.7"```
7. **Create the database in MySQL:**
    - ```source db/schema.sql```
8. **Seed the Database:**
    - ```npm run seed```
9. **Start the server:**
    - ```npm start```
10. **Test Routes using Postman or Insomnia:**

<a id="usage"></a>

### Usage

<a id="ecommerce-db"></a>

### E-Commerce Database

![E-Commerce Database](/assets/ecommerce_db.png)

<a id="screen-recording"></a>

### Screen Recording

[![Video](https://img.youtube.com/vi/I3XVQEV84O0/0.jpg)](https://youtu.be/I3XVQEV84O0)

<a id="license"></a>

### License

This program uses the MIT License.

<a id="credits"></a>

### Credits

- Markdown Badges: https://github.com/Ileriayo/markdown-badges?tab=readme-ov-file#badges
- AI to help with Post and Put Routes

<a id="questions"></a>

### Questions

If you have any questions, you can find me at my GitHub: (https://github.com/aaron-ross-sanchez)