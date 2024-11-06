# MauiMee

MauiMee is an ecommerce frontend project I made that sells awesome Hawaiian shirts.
Who doesn't like Hawaiian shirts?

## 1. Install Dependencies and setup Project

The project was made in React Vite, Javascript SWC, Tailwind CSS. Remote and local Git repos were also initialized. React router dom, headless UI and Lucide react was installed.

## Project Planning

This is probably the most important. Planning the project and having pre-designs, page layouts, images/image references and mockups already in place exponentially increases the efficiency of the project.

What are the color schemes of the project?
Ideally the designer would have finished and prepared everything for you.

### Step 1 - Page Outlines

Create basic wireframes for each page

- Home Page

- Product Listing Page
- Product Detail Page
- Cart Page
- Checkout Page
- Navigation and Footer

### Step 2 - Components

- Navbar (used across all pages )
- Footer (used across all pages )
- Banner (home page only promotion)
- Product Details (used on Product Detail Page)
- Cart Item Card (for cart item)

### Step 3 - Routing

- use react-router-dom with `npm i react-router-dom`
- Define all Route in the App.jsx and wrap it in the Router
- Import all the Pages into the App.jsx and link each Route with a correct path and element. The element will be the Specific page

### Step 4 - Setting Up Folder Structure

This is just a preliminary.

src/
├── assets/ # Static assets
│ ├── images/ # All images
│ └── icons/ # Icon files
│
├── components/ # Reusable components
│ ├── layout/ # Layout components
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ └── Navigation.jsx
│ │
│ ├── product/ # Product-related components
│ │ ├── ProductCard.jsx
│ │ ├── ProductGrid.jsx
│ │ └── ProductDetail.jsx
│ │
│ ├── cart/ # Cart components
│ │ ├── CartItem.jsx
│ │ └── CartSummary.jsx
│ │
│ └── ui/ # Common UI components
│ ├── Button.jsx
│ ├── Input.jsx
│ └── Card.jsx
│
├── pages/ # Page components
│ ├── Home.jsx
│ ├── ProductListing.jsx
│ ├── ProductDetail.jsx
│ ├── Cart.jsx
│ └── Checkout.jsx
│
├── context/ # React Context
│ └── CartContext.jsx
│
├── data/ # Mock data files
│ └── products.js # Product data
│
├── hooks/ # Custom hooks
│ └── useCart.js
│
├── utils/ # Helper functions
│ └── formatters.js
│
├── App.jsx
└── index.jsx

### Step 5 - Component Design

- Home Page:
  Add Header and Navigation (on all pages )
  Add a Banner component (e.g., "Shop Our Latest Shoes").
  Add a Product Category Section (links to different categories).

- Product Listing Page:
  Use a Product Card component to list products.
  Each Product Card includes an image, product name, and price.
  Clicking a product should navigate to the Product Detail Page (/products/:id).

- Product Detail Page:
  Show a larger product image, product details, price, and an "Add to Cart" button.

- Cart Page:
  Display Cart Items using a Cart Item Card component.
  Include buttons for "Remove" and "Proceed to Checkout."

- Checkout Page:
  Include a simple form to capture customer details (like name and email, just for demonstration).

### Step 6 - Building One Page at a Time

Building one page at a time will make things linear.
This will make it simple to do things.
Linear + Simple = RESULTS

1. Build Home Page
2. Move to Product Listing Page:
   Create ProductCard and display multiple products in a grid.
   Use sample data (JSON file or hardcoded array) to render products.
3. Proceed with the Product Detail Page, Cart Page, and Checkout Page, following similar steps.

### Step 7 - Add State Management

Use React Context API for simple global state management.
For Version 2 make it in Redux for Enterprise Level Scalability.

### Step 8 - Testing

1. Run test between navigation between pages
2. Run test to verify Add to Cart works and item appears in the cart.
3. Run tests for responsivenssess.
4. Run tests for links.
5. Run tests for security.

Day #1 - Finished the Header Layout and Mobile Responsiveness.

![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)

TroubleShooting -

Day #2 - Footer Finished

TroubleShooting

- How do I get the fonts to be universal in Tailwind?
  Solution: Import font via url, add it in App.css file and update in tailwind.config extend key property object like the following:  
   `    fontFamily: {
  inter: ["Inter", "sans-serif"],
  poppins: ["Poppins", "sans-serif"],
},.`

- Add new @layer base to the index.css to style h1, h2, h3, p, button etc..
- We can also add component stylings here for example we have three different button versions.
- We added some basic button colors and hover states.

```
@layer components {
  .btn-primary {
    @apply font-inter font-medium px-4 py-2 bg-primary text-white rounded-md
    hover:bg:btn-secondary transition-colors;
  }

  .btn-secondary {
    @apply font-inter font-meidium px-4 py-2 bg-secondary text-white rounded-md
    hover:bg:btn-secondary transition-colors;
  }
  .btn-outline {
    @apply font-inter font-medium px-4 py-2 text-white rounded-md
    hover:bg:btn-secondary transition-colors;
  }
}
```

Day #3 - Hero Banner Finished
The main part of the hero banner and its reponsiveness was completed today.

However the buttons are not working nor does it link anywhere.

Day #4 - Email Subscribe and Core Values
