# ThriftIt

ThriftIt is a modern, serverless e-commerce platform for clothing, built with the MEAN stack and deployed on AWS. It provides a seamless shopping experience with user pages, admin management, and secure payment integration using PayPal.

---
https://github.com/user-attachments/assets/3684b1f7-9ae0-400e-8bcc-51b7da87d1a6

## Features

- **User and Admin Pages:**
  - User pages for browsing, searching, and purchasing products.
  - Admin pages for inventory and order management.

- **Payment Integration:**
  - Secure PayPal payment gateway for processing transactions.

- **Authentication:**
  - User authentication and session management using JSON Web Tokens (JWT).

- **Microservices Architecture:**
  - Modular services for scalability and maintainability.

- **Serverless Infrastructure:**
  - Hosted entirely on AWS using serverless architecture for high availability and cost efficiency.

---

## Tech Stack

### Frontend
- **Angular**: Responsive and dynamic user interfaces hosted on AWS S3.

### Backend
- **Node.js**: Lightweight and efficient server-side runtime.
- **Express.js**: Minimal and flexible web framework.
- **AWS Lambda**: Serverless functions to handle backend logic.

### Database
- **Amazon DynamoDB**: A fully managed NoSQL database for fast and scalable data storage.

### Authentication
- **JWT (JSON Web Tokens)**: For secure and stateless authentication.

### Payment Integration
- **PayPal API**: For handling secure payment processing.

### Monitoring and Logging
- **AWS CloudWatch**: For real-time monitoring and logging of serverless functions.

### Infrastructure as Code
- **AWS Serverless Framework**: For creating and managing AWS resources like Lambda, API Gateway, DynamoDB, and S3.

---

## Deployment

1. **Frontend**:
   - Hosted on **AWS S3** with public access configured for the Angular application.
   - Content delivery optimized using **AWS CloudFront**.

2. **Backend**:
   - Implemented with AWS Lambda functions.
   - API Gateway used to expose endpoints for the Angular frontend.

3. **Database**:
   - DynamoDB tables for managing products, users, and orders.

4. **Monitoring**:
   - Logs and performance metrics accessible through AWS CloudWatch.

---


