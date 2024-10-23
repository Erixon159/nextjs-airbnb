# Next.js Airbnb-like Project

## Description

This project is a result of my effort to building full-stack applications using **Next.js 14**. The app serves as an Airbnb-like platform, designed to demonstrate modern web development techniques and practices. I wanted to get some hands-on experience with more advanced concepts in NextJS.

The application covers everything from setting up a Next.js project, designing responsive user interfaces with **TailwindCSS** and **Shadcn/ui**, implementing advanced routing, to working with both server and client components. Key functionalities include CRUD operations, authentication, data storage, image uploads, and server actions, all while maintaining a high standard of code quality with tools like **Zod**.

To ensure a seamless user experience, authentication is handled using **Clerk**, while data storage is managed with **MongoDB** for better compatibility with Vercel's deployment environment. **Supabase** is used for image storage due to its robust and scalable capabilities. The project is deployed on **Vercel**, providing a reliable and scalable environment for the app.

## Technologies Used

- **Next.js 14+**: Modern React framework for building scalable web applications.
- **Typescript**: Strongly typed JavaScript for better code quality.
- **Clerk**: Authentication service for managing user identities.
- **Prisma**: ORM (Object Relational Mapper) for database access.
- **Supabase**: Open-source backend as a service for database management.
- **MongoDB**: NoSQL database for data storage.
- **TailwindCSS**: Utility-first CSS framework for designing responsive interfaces.
- **Shadcn-ui**: Custom UI component library for consistent styling.
- **Zod**: TypeScript-first schema declaration and validation library.
- **Vercel**: Deployment platform for modern web apps.

## Features

- **User Authentication** with Clerk
- **CRUD Operations** using Server Actions
- **Responsive Design** using TailwindCSS
- **Data Storage** with MongoDB and Prisma
- **Image Storage** with Supabase
- **Image Uploads** to database
- **Dynamic Routing** with Next.js advanced routing features
- **Error Handling** and data validation using Zod

## Live Demo

Check out the live version of the app here: [Next.js Airbnb-like Project](https://nextjs-airbnb-opal.vercel.app/)

## Setup Instructions

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Erixon159/nextjs-airbnb.git
2. Install dependencies:
   ```bash
   npm install
3. Set up environment variables for Clerk, MongoDB, Supabase, and other services. Copy the `.env.template` file, rename it to `.env` and fill the credentials
4. Start the development server:
   ```bash
   npm run dev
