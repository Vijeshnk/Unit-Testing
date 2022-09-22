import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackOverview from "./components/FeedbackOverview";


function App() {
 
  const [feedbacks,setFeedbacks] = useState([])


  return (
    <div >
   <FeedbackForm setFeedbacks={setFeedbacks}/>
   <FeedbackOverview feedbackList={feedbacks}/>
      
    </div>
  );
}

export default App;
