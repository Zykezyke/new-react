import logo from "./logo.svg";
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";
import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";
import { Button } from "bootstrap";
import { useState } from "react";

export default function App() {
  let content;
  const isLoggedin = true;

  function handleNext() {
    if (Count < 5) {
      SetCount(Count + 1);
    }
  }

  function handlePrev() {
    if (Count > 0) {
      SetCount(Count - 1);
    }
  }
  const fruits = ["Mango", "Banana", "Cherry", "Papaya", "Melon", "Apple"];
  const [Count, SetCount] = useState(0);
  return (
    // <div>
    //   <h3>Count: {Count}</h3>
    //   <h3>Fruit: {fruits[Count]}</h3>
    //   <button onClick={handleNext}>Add 1</button>
    //   <button onClick={handlePrev}>Remove 1</button>
    // </div>

    <ProductList />
  );

  // return <ProductList />;

  // return isLoggedin && <h1>Hello</h1>;

  // return (
  //   <div>
  //     {(function test() {
  //       if (isLoggedin) {
  //         return <h1>Login</h1>;
  //       } else {
  //         return <h1>Logout</h1>;
  //       }
  //     })()}
  //   </div>
  // );

  // if (isLoggedin) {
  //   return (
  //     <div>
  //       <p>Welcome, you are logged in as admin</p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <p>Please log in</p>
  //     </div>
  //   );
  // }

  // if (isLoggedin) {
  //   content = <AdminPanel />;
  // } else {
  //   content = <LoginForm />;
  // }
  // return <div>{content}</div>;

  // const renderAuthButton = () => {
  //   if (isLoggedin) {
  //     return <button>Login</button>;
  //   } else {
  //     return <button>Logout</button>;
  //   }
  // };

  // return (
  //   <div>
  //     {
  //       // isLoggedin ? <AdminPanel /> : <LoginForm />
  //       renderAuthButton()
  //     }
  //   </div>
  // );
}
