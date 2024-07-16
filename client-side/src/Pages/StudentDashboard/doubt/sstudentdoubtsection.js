import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDoubt, addResponse } from "../../../Redux/apiCall";
import { fetchDoubts } from "../../../Redux/apiCall";
import VideocamIcon from '@mui/icons-material/Videocam';
import { useNavigate } from "react-router-dom";
// Assuming these actions are defined in doubtSlice.js

const DoubtChat = () => {
  const [newDoubt, setNewDoubt] = useState("");
  const [responseText, setResponseText] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const navigate=useNavigate()
  
  const dispatch = useDispatch();
  console.log(user)

  const handleDoubtSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting doubt:", newDoubt);
    dispatch(addDoubt(newDoubt, user));
    setNewDoubt("");
  };

  const handleResponseSubmit = (e, doubtId) => {
    e.preventDefault();
   
    if (user.role !== "teacher") return;
    dispatch(addResponse(doubtId, responseText, user));
    setResponseText("");
  };
 
  const  {doubts} = useSelector((state) => state.doubts);
  console.log(doubts[2].student.fName,"doubts[2].student[0]")
  useEffect(() => {
    dispatch(fetchDoubts());
  }, [dispatch]);
  const handleVideoCall=(ID)=>{
    console.log(
      ID,"id of teacher"
    );
    navigate(`/Student/doubt/video/${ID}`)
  }
  return (
    <div className="w-1/2 mx-auto p-4">
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <form onSubmit={handleDoubtSubmit} className="flex">
          <textarea
            className="w-full p-2 resize-none mb-2 border-2 border-blue rounded after:border-blue outline-none"
            rows="3"
            placeholder="What's your doubt?"
            value={newDoubt}
            onChange={(e) => setNewDoubt(e.target.value)}
            required
          />
          <div className="flex items-center justify-between mx-2">
            <div className="flex items-center gap-2">
              <button type="button" className="p-2 rounded-full text-black" aria-label="Upload Image">
                <img src="/image.svg" className="h-8 w-8" alt="upload image" />
              </button>
              <button type="submit" className="bg-blue-500 text-black py-2 px-4 rounded">
                <img src="/send.svg" className="h-8 w-8" alt="send" />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center w-full">
            <div className=" flex items-center flex-col w-full">

                {doubts && doubts.map((doubt) => (
                    <div key={doubt._id} className="bg-white shadow-md rounded p-4 mb-4 w-full">
                        <h3 className="font-semibold">{doubt.title}</h3>

                        <p className="text-sm text-black ">
                            Asked by: {doubt.student.fName} {doubt.student.lName}
                        </p>
                        <div className="mt-4 max-h-[128px] flex flex-col overflow-y-scroll">
                            {doubt.responses.map((response) => (
                                <div key={response._id} className="bg-gray-100 p-2 rounded mb-2 flex justify-between items-center ">
                                    <div>
                                        <p>{response.responseText}</p>
                                        <p className="text-sm text-gray-500">Answered by: {response.teacher.fName} {response.teacher.lName}</p>
                                    </div>
                                    <button type="button" className="p-2 hover:bg-green-200 rounded-full" aria-label="Mark as Done" onClick={() => handleVideoCall(response.teacher._id)}>
                                  <VideocamIcon> </VideocamIcon>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={(e) => handleResponseSubmit(e, doubt._id)} className="mt-4 flex items-center">
                            <textarea
                                className="w-full p-2 resize-none mb-2 border-2 border-blue rounded after:border-blue outline-none"
                                rows="2"
                                placeholder="Your response"
                                value={responseText}
                                onChange={(e) => setResponseText(e.target.value)}
                                required
                            />
                            <div className="flex items-center justify-between mx-2">
                                <div className="flex items-center gap-2">
                                    <button type="button" className="p-2 rounded-full text-black" aria-label="Upload Image">
                                        <img src="/image.svg" className="h-8 w-8" alt="upload image" />
                                    </button>
                                    <button type="submit" className="bg-blue-500 text-black py-2 px-4 rounded">
                                        <img src="/send.svg" className="h-8 w-8" alt="send" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                ))}</div>
        </div>
    </div>
  );
};

export default DoubtChat;
