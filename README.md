💸 Expense Tracker

An efficient and sleek expense tracker built with Next.js, utilizing various modern technologies for seamless user experience and robust functionality.

🛠️ Technologies Used
Next.js: A React framework for server-rendered applications.

Neon & Prisma: ORM for database management with PostgreSQL.

Tailwind CSS: Utility-first CSS framework for styling.

Shadcn/ui: For beautiful UI graphs and charts.

Redux Toolkit: State management solution.

Clerk: Authentication and user management.

React Icons: Collection of popular icons for React.

Icons for the Tech Stack

📦 Setup
Clone the repository:

sh
```
git clone https://github.com/yourusername/expense-tracker.git
```
Navigate to the project directory:

sh
```
cd expense-tracker
```
Install dependencies:

sh
```
npm install
```
Set up environment variables: Create a .env file in the root directory and add your database connection string, Clerk API key, and other necessary variables:

env
```
DATABASE_URL=your_postgresql_connection_string
CLERK_API_KEY=your_clerk_api_key
```
Run database migrations:

sh
```
npx prisma migrate dev
```
Start the development server:

sh
```
npm run dev
```

📖 Usage
Access the application: Open your browser and go to http://localhost:3000.

Register/Login: Use Clerk for seamless authentication.

Track Expenses:

Add, edit, and delete expenses.

View graphical representation of expenses using Shadcn/UI.

Receive toasty notifications for actions.

🎉 Features
Authentication: Secure login and registration with Clerk.

Expense Management: Add, update, and remove expenses.

Graphs & Charts: Visualize expenses with beautiful UI.

Notifications: Toasty notifications for user actions.

State Management: Efficient state handling with Redux Toolkit.

![image](https://github.com/user-attachments/assets/cb53a94e-55b8-43aa-ae68-4b3ef587a700)

Try it out : 
https://676ae68cda0e8e064651fc1f--chimerical-chimera-fdf4be.netlify.app/
