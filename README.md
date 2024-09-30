# Redux Toolkit - Add to Cart for eCommerce

This project is an implementation of the **Add to Cart** functionality for an eCommerce application using **Redux Toolkit**. It efficiently manages the cart state, including adding products, adjusting product quantities, and removing items from the cart.

## Features

- **Redux Toolkit**: Simplifies state management with built-in tools like `createSlice`.
- **Add to Cart**: Add products to the cart with dynamic quantity management.
- **Remove from Cart**: Ability to remove individual products from the cart.
- **Product Quantity Control**: Increase or decrease the quantity of products in the cart.
- **Total Price Calculation**: Automatically updates the total cost based on product prices and quantities.
- **Persisted State**: Cart state persists across page reloads (optional, depending on configuration).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pxycknomdictator/RTK-ecommerce-cart.git
   ```
2. Navigate to the project folder:
   ```bash
   cd RTK-ecommerce-cart
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

Once the development server is running, you can open the application in your browser at `http://localhost:5173`. From there, you can browse products, add them to your cart, adjust quantities, and remove items.

## How It Works

1. **State Management**: Redux Toolkit is used to create slices that manage the cart state, which includes products added, quantities, and total prices.
2. **Actions**: Actions are dispatched to add or remove products and to update quantities.
3. **Selectors**: Selectors are used to retrieve cart data for display.
4. **UI Components**: UI components interact with Redux state to display the cart contents and allow user interactions.
