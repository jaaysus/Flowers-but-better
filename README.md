# Floral Dreams

## Overview
"Floral Dreams" is an e-commerce application for a flower shop.  
Front-end developed using React and Redux.

# Overview of CRUD Progress in the Project

| Feature    | C | R | U | D | 
|----------------|-------|-------|-------|-------|
| Reviews    | ✅    | ✅    | ✅    | ✅    |
| Users      | ✅    | ✅    | ✅    | ✅    |
| Products   | ⏳    | ✅    | ✅    | ⏳    |
| Cart       | ✅    | ✅    | ✅    | ✅    | 
| Orders     | ✅    | ✅    | ⏳    | ✅    |


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

### Key Features

#### **Welcome Section**
A greeting is displayed to the user, inviting them to browse the flower shop.

![Welcome Section](https://github.com/user-attachments/assets/3fd39c63-ed78-4b6a-9e41-93f9f604e7f2)

---

#### **Shop Button**
A link to the flower purchase page is provided. The link conditionally navigates to the Authentication Page.

<div style="display: flex; gap: 40px; justify-content: center;">
  <img src="https://github.com/user-attachments/assets/e1d6d1fd-3475-4302-8bd8-0bfa169aa96a" width="300" />
  <img src="https://github.com/user-attachments/assets/b77fa9fe-b500-4e34-8fb5-39c82602de09" width="300" />
</div>

---

#### **Gallery of Products**
A gallery component (`FlowersGallery`) is included to showcase various flower arrangements available in the shop.

![Gallery](https://github.com/user-attachments/assets/607a2497-87a5-4b78-885b-c573cc2000a3)

---

#### **Testimonials Section**
Users can read reviews from other clients to help them make informed decisions about their purchases.

![Testimonials](https://github.com/user-attachments/assets/b463cf94-353e-40a4-a10b-246c7e5c0394)
---
### Footer
The footer is included at the bottom of every page to provide useful information and navigation options to users.

![Footer](https://github.com/user-attachments/assets/db9158d1-ac2d-4e7c-aebc-ba0ded8a3335)

---

## **Products Page**

The `Products` page allows users to browse, filter, and sort available flower arrangements :

![image](https://github.com/user-attachments/assets/bd5ad0bb-572f-490d-b672-658c698d81a5)

- **Sorting Options**: Users can sort products by price in ascending or descending order, or view them in their default order.
- **Price Filtering**: Users can filter products based on a price range to match their budget.
- **Add to Cart**: Users can add products to their cart with quantity adjustments, and the "Add to Cart" button is disabled if the stock limit is reached.
- **Redirect Based on Authentication**: The page checks if the user is authenticated, redirecting them to the admin dashboard if they're an admin or the product page if they're a regular user. If not authenticated, the user is redirected to the authentication page.
  
---

## **Cart Page**

The `Cart Page` displays the user's shopping cart, allowing them to manage their cart items, view the total price, and place an order. The key features of this page are:

- **Empty Cart**: If the cart is empty, an interactive flower component and a message are displayed encouraging users to shop for flowers.  

![image](https://github.com/user-attachments/assets/b75f23a8-1893-4fa5-8823-2b22febdb931)

- **Items in Cart**: When items are in the cart, they are listed with their names, quantities, and images. Users can modify the quantity of each item, remove them from the cart, and see the total price dynamically updated.  

![image](https://github.com/user-attachments/assets/95eff7f1-3903-4916-93c9-55f5576a5c43)

- **Order Success**: After an order is placed, a success message is displayed along with the tracking number and options for tracking the shipment via services like DHL, FedEx, and UPS. The tracking number can also be copied for convenience.  

![image](https://github.com/user-attachments/assets/d7eb87df-1464-481b-87a7-5c282fdeb890)

- **Animation**: When items are removed from the cart, they fade out with a smooth animation. When an order is placed, items gradually disappear, creating a seamless transition to the success message.

---

## Account Page (`/acc`)

The **Account Page** is where users can view and manage their personal information and order history. It also includes a section for calendar and booking.

### Key Features

#### **Personal Information**
Displays the user's personal information such as their username and email address, along with an option to edit and log out.

#### **Order History**
Shows the user's past orders with details such as the tracking number, date, item names, quantities, and prices. If no orders are found, a message is displayed indicating that the user has not placed any orders.
![image](https://github.com/user-attachments/assets/d6abbc72-7c4b-418e-8e90-7b31f51ca48b)


#### **Input for the User's Review**
Allows users to express their feedback, after submission it turns into a div containing the review with two buttons to edit or delete review.
![image](https://github.com/user-attachments/assets/c5dc48a0-cb12-48e4-b3e7-86059f22e1cd)
![image](https://github.com/user-attachments/assets/d1e3e1f1-1dfe-454b-8fcf-8fd1a8b8e18e)


#### **Calendar and Booking (still in progress)**
Allows users to access a calendar interface that flips to manage their bookings for flower arrangements or events.

![image](https://github.com/user-attachments/assets/5f3392ce-a9a2-4a27-b71c-32c9a7f9e1d8)
![image](https://github.com/user-attachments/assets/cd5fa2f2-0dfb-4fee-b994-adb22d17f4d7)



---


