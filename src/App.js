import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Member from "./pages/Member";
import MemberForm from "./pages/MemberForm";

import MemberUpdateForm from "./pages/MemberUpdateForm";

//함수형 component
function App() {
  

  return (
    <>
      <div className="container">

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/members" element={<Member/>}/>
          <Route path="/members/new" element={<MemberForm/>} />
          <Route path="/members/:num/edit" Component={MemberUpdateForm}/>
        </Routes>

      </div>
    </>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;




