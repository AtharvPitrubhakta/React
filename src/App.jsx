import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import LikedButton from "./pages/LikeButton/LikeButton";
import CallBack from "./pages/CallBack/CallBack";
import LudoBoard from "./pages/LudoBoard/LudoBoard";
import TodoApp from "./pages/TodoApp/TodoApp";
import Lottery from "./pages/LotteryGame/Lottery";
import Form from "./pages/Forms/Form";
import CommentsForm from "./pages/Forms/CommentsForm";
import Counter from "./pages/UseEffect/Counter";
import Joker from "./pages/UseEffect/Joker";
import UseRef from "./pages/useRef/UseRef";
import Effect from "./pages/UseEffect/effect";
import User from "./pages/Pass Function in Component as Props/User";
import ParentUser from "./pages/ForwardRef/ParentUser";
import FormStatus from "./pages/useFormStatus/FormStatus";
import TransitionHook from "./pages/useTransition/transitionHook";

function App() {
  let winCondition = (ticket) => {
    // return ticket.every((num) => num === ticket[0]);
    return ticket[0] === 0;
  };

  const displayName = (name) => {
    alert(`Name is displayed: ${name}`);
  };

  const getUser = () => {
    alert("User is displayed");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likeButton" element={<LikedButton />} />
        <Route path="/callBack" element={<CallBack />} />
        <Route path="/ludoBoard" element={<LudoBoard />} />
        <Route path="/todoApp" element={<TodoApp />} />
        <Route
          path="/lottery"
          element={<Lottery n={3} winCondition={winCondition} />}
        />
        <Route path="/form" element={<Form />} />
        <Route path="/commentsForm" element={<CommentsForm />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/jokes" element={<Joker />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route
          path="/user"
          element={
            <User displayName={displayName} name="Shiva" getUser={getUser} />
          }
        />
        <Route path="/forwardRef" element={<ParentUser/>}/>
        <Route path="/formStatus" element={<FormStatus/>}/>
        <Route path="/transitionHook" element={<TransitionHook/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
