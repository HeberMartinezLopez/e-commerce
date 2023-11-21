
# E-Commerce

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Questions](#questions)

## Description

This app was built as the back end for an e-commerce site. It uses Express.js and is configured to use Sequelize to interact with a MySql database. By building this app the company can compete with other e-commerce companies.

## Installation

To use this app run these command lines in a terminal:

1. `npm install`
2. `mysql -u <username> -p'<password>'`
3. `\. db/schema.sql'`
4. `\q`
5. `npm run seed`

## Usage

To use this app run these command lines in terminal:

1. `npm start`
2. Open Insomnia Core
3. Make a create a GET HTTP request
4. Enter `http://localhost:3001/api/` in request bar

Create a GET request to select all:

1. Categories enter `/categories`
2. Products enter `/products`
3. tags enter `/tags`

Create a GET request select one:

1. Category enter `/categories/:id`
2. Product enter `/products/:id`
3. Tag enter `/tags/:id`

Create a POST request to create a new:

1. Category enter `/categories`
   1. Select text JSON body
   2. Add {}
   3. Enter category name
2. Product enter `/products`
   1. Select text JSON body
   2. Add {}
   3. Enter:
      1. Product name
      2. Price
      3. Stock
      4. Category id
3. Tag enter `/tags`
   1. Select text JSON body
   2. Add {}
   3. Enter tag name

Create a PUT request to update a:

1. Category enter `/categories/:id`
   1. Select text JSON body
   2. Add {}
   3. Enter category name
2. Product enter `/products/:id`
   1. Select text JSON body
   2. Add {}
   3. Enter:
      1. Product name
      2. Price
      3. Stock
      4. Category id
3. Tag enter `/tags/:id`
   1. Select text JSON body
   2. Add {}
   3. Enter tag name

Create a DELETE request to delete a:

1. Category enter `/categories/:id`
2. Product enter `/products/:id`
3. Tag enter `/tags/:id`

Click link below to see a video demonstration of these steps>

Video Link

[]()

## Questions

If you have any questions contact me at:

* Email: [hebermartinez14@gmail.com](hebermartinez14@gmail.com).

* GitHub: <https://github.com/HeberMartinezLopez>.
