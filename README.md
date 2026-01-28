# URL-shortner
A lightweight URL shortener API built with Node.js, Express, and MongoDB. Convert long URLs into compact, shareable short links with automatic redirects. Features unique ID generation and RESTful API endpoints. Easily testable in Postman.

A simple and efficient URL shortening service built with Node.js and Express. This application allows users to create shortened versions of long URLs and redirects to the original URL when the short link is accessed.

Features
URL Shortening: Convert long URLs into compact, shareable short links
Redirect: Automatically redirect short links to their original URLs
Unique ID Generation: Uses nanoid for generating unique, short identifiers
MongoDB Storage: Persistent storage of URL mappings
RESTful API: Clean API endpoints for URL management

Tech Stack
Backend: Node.js with Express.js
Database: MongoDB with Mongoose ODM
ID Generation: nanoid for short unique identifiers
Environment: dotenv for configuration management
