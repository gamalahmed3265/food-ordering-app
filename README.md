### **Introducing Food for Pizza: A Modern Pizza Ordering App with Admin Dashboard**

We’re excited to introduce **Food for Pizza**, a sleek and modern pizza ordering app designed to make ordering your favorite pizzas a breeze. Whether you're a pizza lover or an admin managing orders, Food for Pizza has you covered. Built with cutting-edge technologies like **Next.js**, **TailwindCSS**, **shadcn/ui**, and **Prisma**, this app delivers a seamless experience for both users and administrators.

---

### **Key Features**

#### **For Users:**

1. **Browse Menu**: Explore a wide variety of pizzas with detailed descriptions, images, and prices.
2. **Customize Orders**: Add toppings, choose crust types, and select sizes to customize your pizza.
3. **Order Tracking**: Real-time updates on your order status, from preparation to delivery.
4. **Secure Payments**: Integrated payment gateway for safe and hassle-free transactions.
5. **User Authentication**: Sign up, log in, and manage your profile with ease.

#### **For Admins:**

1. **Dashboard Overview**: A comprehensive admin dashboard to manage orders, menus, and users.
2. **Order Management**: View, update, and track all orders in real-time.
3. **Menu Management**: Add, edit, or remove pizzas and toppings from the menu.
4. **User Management**: Manage user accounts and roles (e.g., admin, customer).
5. **Analytics**: Visualize sales data and customer insights with interactive charts.

---

### **Tech Stack**

- **Frontend**:

  - **Next.js**: For server-side rendering, static site generation, and routing.
  - **TailwindCSS**: For utility-first, responsive styling.
  - **shadcn/ui**: For beautifully designed, accessible UI components.
  - **React Redux**: For state management across the app.
  - **Sonner**: For toast notifications.

- **Backend**:

  - **Next.js API Routes**: For building serverless API endpoints.
  - **Prisma**: For database ORM and schema management.
  - **NextAuth.js**: For authentication and user session management.
  - **Cloudinary**: For image uploads and management.

- **Database**:

  - **PostgreSQL**: A robust relational database for storing user data, orders, and menu items.

- **Other Tools**:
  - **Zod**: For schema validation.
  - **TailwindCSS Animate**: For smooth animations.
  - **Lucide React**: For beautiful icons.

---

### **How It Works**

#### **User Flow:**

1. **Browse the Menu**: Users can explore the pizza menu, filter by categories, and view details.
2. **Customize & Order**: Select a pizza, customize it, and add it to the cart.
3. **Checkout**: Enter delivery details, choose a payment method, and place the order.
4. **Track Order**: Receive real-time updates on the order status.

#### **Admin Flow:**

1. **Login**: Admins log in to the dashboard using secure authentication.
2. **Manage Orders**: View all orders, update their status, and handle cancellations.
3. **Update Menu**: Add new pizzas, update prices, or remove items from the menu.
4. **View Analytics**: Monitor sales performance and customer behavior.

---

### **Screenshots**

1. **Home Page**: A visually appealing menu with high-quality images of pizzas.
2. **Order Page**: A customizable pizza builder with options for toppings, crust, and size.
3. **Admin Dashboard**: A clean and intuitive interface for managing orders, menus, and users.
4. **Order Tracking**: A progress bar showing the status of the order (e.g., Preparing, Out for Delivery, Delivered).

---

### **Why Food for Pizza?**

- **Modern Design**: Built with **shadcn/ui** and **TailwindCSS**, the app offers a polished and responsive design.
- **Scalable Architecture**: Using **Next.js** and **Prisma**, the app is built to scale effortlessly.
- **Secure & Reliable**: With **NextAuth.js** and **bcrypt**, user data is protected with industry-standard security practices.
- **Admin-Friendly**: The admin dashboard simplifies managing orders, menus, and users.

---

### **Get Started**

Ready to try **Food for Pizza**? Here’s how you can get started:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/gamalahmed3265/food-ordering-app.git
   cd food-for-pizza
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file and add your database URL, Cloudinary credentials, and NextAuth secret.

4. **Run Migrations**:

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the App**:

   ```bash
   npm run dev
   ```

6. **Access the App**:
   - User Interface: `http://localhost:3000`
   - Admin Dashboard: `http://localhost:3000/admin`

---

### **Future Plans**

- **Mobile App**: Develop a cross-platform mobile app using React Native.
- **Loyalty Program**: Introduce a rewards system for frequent customers.
- **AI Recommendations**: Use machine learning to recommend pizzas based on user preferences.

---

**Food for Pizza** is more than just an app—it’s a complete solution for pizza lovers and restaurant owners alike. Whether you're craving a classic Margherita or managing a bustling pizza business, Food for Pizza has you covered. 🍕

---

Let us know what you think! Feel free to contribute, report issues, or suggest new features on our [GitHub repository](#). Happy coding! 🚀

---

## How to Start

1. Create App

```bash
    npm npx create-next-app@latest app_name
```

2. install shadcn

```bash
    npx shadcn@latest init
```

3. install shadcn

```bash
    npx shadcn@latest add radio-group label checkbox button
```

4. install Prisma

```bash
    npm i --dev prisma @prisma/client
```

5. Init Prisma

```bash
    npx prisma init
```

6. generate Prisma

```bash
    npx prisma generate dev
```

7. migrate Prisma

```bash
    npx prisma migrate dev
```

8. generate Prisma

```bash
    npx prisma studio
```

9. negotiator

```bash
    npx i negotiator
    npx i @types/negotiator
```

10. install bcrypt

```bash
    npx i bcrypt
    npx i @types/bcrypt
```

11. install zod

```bash
    npx prisma zod
```

12. install zod

```bash
    npx shadcn@latest add toast
```

---

### **Screenshots**

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
  <div>
    <img src="https://via.placeholder.com/400x300" alt="Home Page" style="width: 100%; border-radius: 8px;">
    <p style="text-align: center; margin-top: 8px;"><strong>Home Page</strong></p>
  </div>
  <div>
    <img src="https://via.placeholder.com/400x300" alt="Order Page" style="width: 100%; border-radius: 8px;">
    <p style="text-align: center; margin-top: 8px;"><strong>Order Page</strong></p>
  </div>
  <div>
    <img src="https://via.placeholder.com/400x300" alt="Admin Dashboard" style="width: 100%; border-radius: 8px;">
    <p style="text-align: center; margin-top: 8px;"><strong>Admin Dashboard</strong></p>
  </div>
  <div>
    <img src="https://via.placeholder.com/400x300" alt="Order Tracking" style="width: 100%; border-radius: 8px;">
    <p style="text-align: center; margin-top: 8px;"><strong>Order Tracking</strong></p>
  </div>
</div>
