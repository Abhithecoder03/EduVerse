import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDoubt, addResponse } from "../../../Redux/apiCall";
import { fetchDoubts } from "../../../Redux/apiCall";
// Assuming these actions are defined in doubtSlice.js
import VideocamIcon from '@mui/icons-material/Videocam';
import { useNavigate } from "react-router-dom";
const Solver = () => {
    const user = useSelector((state) => state.user.currentUser);
    const [responseText, setResponseText] = useState("");
    const handleResponseSubmit = (e, doubtId) => {
        e.preventDefault();

        if (user.role !== "teacher") return;
        dispatch(addResponse(doubtId, responseText, user));
        setResponseText("");
    };
    const navigate=useNavigate()

    const dispatch = useDispatch();
    const { doubts } = useSelector((state) => state.doubts);
   
    useEffect(() => {
        dispatch(fetchDoubts());
    }, [dispatch]);

    const handleVideoCall=(ID)=>{
      
        navigate(`/Student/doubt/video/${ID}`)
      }

    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-2/3 flex items-center flex-col">

                {doubts && doubts.map((doubt) => (
                    <div key={doubt._id} className="bg-white shadow-md rounded p-4 mb-4 w-2/3">
                        <h3 className="font-semibold">{doubt.title}</h3>

                        <p className="text-sm text-black ">
                            Asked by: {doubt.student.fName} {doubt.student.lName}
                        </p>
                        <div className="mt-4 max-h-[128px] flex flex-col overflow-y-scroll">
                            {doubt.responses.map((response) => (
                                <div key={response._id} className="bg-gray-100 p-2 rounded mb-2 flex justify-between items-center ">
                                    <div>
                                        <p>{response.responseText}</p>
                                        <p className="text-sm text-gray-500">Answered by You</p>
                                    </div>
                                    <button type="button" className="p-2 hover:bg-green-200 rounded-full" aria-label="Mark as Done" onClick={() => handleVideoCall(user._id)}>
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
    )
}
export default Solver;