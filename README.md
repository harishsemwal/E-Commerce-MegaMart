# E-Commerce MegaMart

Welcome to the **E-Commerce MegaMart** project! This is a comprehensive e-commerce application showcasing both front-end and back-end development skills. The project is designed to provide a seamless shopping experience, complete with user authentication, product management, and a fully functional admin panel.

## 🚀 Demo

Check out the video demos of the **Admin Page** and **Home Page**:

- [Admin Page Demo](#)  
- [Home Page Demo](#)
  
 
  ## Link -: https://youtu.be/YA-ouXE1cd4 
  

## 📂 Project Overview

The E-Commerce MegaMart project is built using the MERN stack, which includes:

- **MongoDB**: Database for storing product details, user information, and order data.
- **Express.js**: Backend framework for building the server-side application.
- **React.js**: Frontend framework for developing a responsive and interactive user interface.
- **Node.js**: Runtime environment for building the server-side logic.

## 🛠️ Features

- **User Authentication with JWT**: Secure user login and registration using JSON Web Tokens (JWT) to maintain user sessions.
- **RESTful API**: Built using Express.js, providing clean and structured endpoints for efficient client-server communication.
- **Product Management**: Admin can add, update, or delete products.
- **Order Management**: Users can view their orders; Admin can manage order statuses.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## 📸 Screenshots
![Screenshot 2024-09-03 001414](https://github.com/user-attachments/assets/83a18528-c6b1-4ab5-883f-40497db12765)
![Screenshot 2024-09-03 001431](https://github.com/user-attachments/assets/805bfa4d-b843-453e-9f7e-941451a5b279)
![Screenshot 2024-09-03 001450](https://github.com/user-attachments/assets/b22b8ef0-bdef-46e7-b737-4471312baad7)
![Screenshot 2024-09-03 001517](https://github.com/user-attachments/assets/07294d0f-0c6f-4061-bb4c-c430e7f2c27a)
![Screenshot 2024-09-03 001650](https://github.com/user-attachments/assets/d62d4242-a378-4295-a284-fe2d7af91221)

## Admin
![Screenshot 2024-09-03 001735](https://github.com/user-attachments/assets/7db4af45-eb68-4f48-8b28-1016fa403104)
![Screenshot 2024-09-03 001750](https://github.com/user-attachments/assets/1e6f272d-3808-4118-8192-e3584914527a)

## 📂 Folder Structure

- `frontend/`: Contains the React frontend code.
- `backend/`: Contains the Express backend code.
- `admin/`: Contains the admin panel code using React.

## 🛠️ Installation and Setup

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/harishsemwal/E-Commerce-MegaMart.git
   cd E-Commerce-MegaMart
   ```

2. **Install dependencies:**

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   cd ../admin
   yarn install
   ```

3. **Run the development servers:**

   Open three terminal windows or use three terminal tabs:

   **Frontend:**

   ```bash
   cd frontend
   npm start
   ```

   **Backend:**

   ```bash
   cd backend
   npm run dev
   ```

   **Admin Panel:**

   ```bash
   cd admin
   yarn run dev
   ```

4. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

## 📊 RESTful API Endpoints

The backend API is designed following REST principles. Here are some key endpoints:

- **User Authentication:**
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Authenticate a user and issue a JWT.
  - `GET /api/auth/logout`: Invalidate the user's session.

- **Product Management:**
  - `GET /api/products`: Retrieve a list of products.
  - `POST /api/products`: Add a new product (Admin only).
  - `PUT /api/products/:id`: Update an existing product (Admin only).
  - `DELETE /api/products/:id`: Delete a product (Admin only).

- **Order Management:**
  - `GET /api/orders`: Retrieve user orders.
  - `POST /api/orders`: Place a new order.
  - `PUT /api/orders/:id`: Update order status (Admin only).

## 🚀 Deployment

To deploy the application, follow the deployment guidelines for your hosting provider. Ensure that the environment variables are properly configured for production.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📧 Contact

For any questions or feedback, feel free to contact [Harish Prasad Semwal](https://www.linkedin.com/in/harishprasadsemwal/).

---

Feel free to make any more changes or ask for further customizations!
