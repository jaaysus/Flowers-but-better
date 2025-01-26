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
- ![image](https://github.com/user-attachments/assets/3fd39c63-ed78-4b6a-9e41-93f9f604e7f2)
  
- **Shop Button**: A link to the flower purchase page is provided. The link conditionally navigates to the Authentication Page.  
<div style="display: flex; gap: 100px;">
  <img src="https://github.com/user-attachments/assets/e1d6d1fd-3475-4302-8bd8-0bfa169aa96a" width="300" />
  <img src="https://github.com/user-attachments/assets/b77fa9fe-b500-4e34-8fb5-39c82602de09" width="300" />
</div>


- **Gallery of Products**: A gallery component (`FlowersGallery`) is included to showcase various flower arrangements available in the shop.  
 ![image](https://github.com/user-attachments/assets/607a2497-87a5-4b78-885b-c573cc2000a3)


- **Testimonials Section**: Users can read reviews from other clients to help them make informed decisions about their purchases.  
 ![image](https://github.com/user-attachments/assets/b463cf94-353e-40a4-a10b-246c7e5c0394)


### Footer

The footer is included at the bottom of every page to provide useful information and navigation options to users.

![image](https://github.com/user-attachments/assets/db9158d1-ac2d-4e7c-aebc-ba0ded8a3335)


---
