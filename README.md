# Floral Dreams

## Overview
"Floral Dreams" is an e-commerce application for a flower shop.
Front-end developed using React and Redux.

# Overview of CRUD Progress in the Project

| *Feature*    | *C* | *R* | *U* | *D* | *Description*                             |  
|----------------|-------|-------|-------|-------|---------------------------------------------|  
| *Reviews*    | ✅    | ✅    | ⏳    | ⏳    | Add Create, Update, Delete functionality    |  
| *Users*      | ✅    | ✅    | ⏳    | ✅    | Add Update functionality                    |  
| *Products*   | ✅    | ✅    | ✅    | ⏳    | Add Delete (Admin)          |  
| *Cart*       | ✅    | ✅    | ✅    | ✅    | Confirm Cart ID logic for consistency       |  
| *Orders*     | ✅    | ✅    | ⏳    | ⏳    | Additional features as needed    


**Symbol:**  
⏳ - Signifies features still in progress. 

## Main Features

- User authentication management with roles for regular users and administrators.

### The user can:
- Register.
- Check other clients' reviews.
- Browse and purchase flowers.  
- Manage their shopping cart.  
- Add review 

### The administrator can:
- View statistics.  
- Manage users, products, and stock.  
- Manage orders.


## Initial User and Admin Credentials

You can use the following credentials to log in as an admin or a regular user:

### Admin Credentials:
- **Username**: kuro
- **Email**: kuro@gmail.com
- **Password**: 12345
- **Role**: Admin

### User Credentials:
- **Username**: kibo
- **Email**: kibo@gmail.com
- **Password**: 12345
- **Role**: User

### Additional User:
- **Username**: shiro  
- **Full Name**: Shiro No Neko  
- **Email**: shiro@gmail.com  
- **Password**: 12345  
- **Role**: User  

## Getting Started

1. Clone the repository.
2. Run 
   `npm install` to install the dependencies.
3. Run 
   `npm run dev` to start the development server.
4. Open the app in your browser by clicking **`o + enter`** in Terminal.


# Overview of Pages

## Main Home Page (`/userHome`)

The Main Home Page serves as the landing page for visitors. It allows them to navigate the application and explore products, view testimonials, and login or register their account. 

### Key Features:

- **Welcome Section**: A greeting is displayed to the user, inviting them to browse the flower shop.  
  ![Welcome Section](image-placeholder.jpg)
  
- **Shop Button**: A link to the flower purchase page is provided. The link conditionally navigates either to the `/produits` page (if the user is logged in) or the `/auth` page (for authentication).  
  ![Shop Button](image-placeholder.jpg)

- **Gallery of Products**: A gallery component (`FlowersGallery`) is included to showcase various flower arrangements available in the shop.  
  ![Flowers Gallery](image-placeholder.jpg)

- **Testimonials Section**: Users can read reviews from other clients to help them make informed decisions about their purchases.  
  ![Testimonials](image-placeholder.jpg)

### Footer

The footer is included at the bottom of every page to provide useful information and navigation options to users. It typically contains links to the privacy policy, terms of service, contact details, and social media accounts. It serves as a consistent section across the website, providing users with easy access to important resources.

  ![Footer](image-placeholder.jpg)

---