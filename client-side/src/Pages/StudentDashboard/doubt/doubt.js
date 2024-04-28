import React, { useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Chat = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  console.log(`API Key: ${apiKey}`)
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Save the user's outgoing message before sending the request
    const userMessage = { text: input, type: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    // Make a request to the Gemini AI API
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: input }] }],
        }
      );

      // Update the state with the AI response
      const aiMessage = { text: response.data.candidates[0].content.parts[0].text, type: 'ai' };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
      // If there's an error, display the user's outgoing message followed by the error message
      const errorMessage = { text: 'Error sending message. Unauthorized access or invalid token.', type: 'error' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
      setInput('');
    }
  };

  return (
    <div className='bg-[#555] h-screen w-full  ml-10 mr-1 overflow-y-auto rounded-lg'>
      <div className='grid w-full justify-center align-middle'>
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            {message.type === 'user' ? (
              <img
                src="https://i.ibb.co/37WzQCx/ck3.png" border="0"
                alt="User"
                className="inline-block mr-2 h-12 w-16 rounded-lg float-right"
              />
            ) : (
              <img
                src="path_to_bot_image.png"
                alt="Bot"
                className="inline-block mr-2 h-6 w-6 rounded-full"
              />)}
            {message.type === 'ai' ? (
              <CopyToClipboard text={message.text}>
                <div className="relative">
                  <SyntaxHighlighter language="javascript" style={a11yDark} className="rounded-lg p-4 bg-gray-800 text-gray-300 overflow-y">
                    {message.text}
                  </SyntaxHighlighter>
                  <button className="absolute top-0 right-0 m-2 px-2 py-1 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700" onClick={() => alert('Copied to clipboard!')}>Copy</button>
                </div>
              </CopyToClipboard>
            ) : (
              <div className="message-container bg-[#333333] text-white whitespace-pre-line p-5 w-4/5 m-10 border-solid border-1 border-[#fff] rounded-lg">
                {message.text}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className='relative h-1/2 bottom-5'>
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-end">
          <textarea
            id="base-input"
            className="bg-[#444444] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#666666] focus:border-[#555555] block w-3/5 p-2.5 dark:bg-[#444444] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444444] dark:focus:border-[#444444] overflow-y-auto relative"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <ArrowUpwardIcon
            className="absolute  bg-red-500 bottom-10 right-20 transform translate-x-2/4 translate-y-1/4"
            style={{ color: 'red' }}
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;



// import React, { useState } from 'react';
// import axios from 'axios';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Import ArrowUpwardIcon

// const Chat = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([]);

//   const sendMessage = async () => {
//     if (input.trim() === '') return;

//     // Save the user's outgoing message before sending the request
//     const userMessage = { text: input, type: 'user' };
//     setMessages(prevMessages => [...prevMessages, userMessage]);

//     // Make a request to the Gemini AI API
//     try {
//       const response = await axios.post(
//         'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDZOfKfqpYSsnVkPHkmbHHOL92MPt-JNUE',
//         {
//           contents: [{ parts: [{ text: input }] }],
//         }
//       );

//       // Update the state with the AI response
//       const aiMessage = { text: response.data.candidates[0].content.parts[0].text, type: 'ai' };
//       setMessages(prevMessages => [...prevMessages, aiMessage]);
//       setInput('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//       // If there's an error, display the user's outgoing message followed by the error message
//       const errorMessage = { text: 'Error sending message. Unauthorized access or invalid token.', type: 'error' };
//       setMessages(prevMessages => [...prevMessages, errorMessage]);
//       setInput('');
//     }
//   };

//   return (
//     <div className="bg-[#444444] w-screen ml-10 mr-1 overflow-y-auto rounded-lg">
//       <div className="grid justify-items-center">
//         {messages.map((message, index) => (
//           <div key={index} className={`message-container ${message.type === 'user' ? 'bg-[#333333] text-white' : 'bg-[#333333] text-white'} p-5 w-4/5 m-10 border-solid border-1 border-[#fff] rounded-lg`}>
//             {message.type === 'user' ? (
//               <img src="https://i.ibb.co/37WzQCx/ck3.png" alt="User" className="inline-block mr-2 h-12 w-16 rounded-lg float-right" />
//             ) : (
//               <img src="path_to_bot_image.png" alt="Bot" className="inline-block mr-2 h-6 w-6 rounded-full" />
//             )}
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div className="relative h-1/2 bottom-5">
//         <div className="absolute inset-x-0 bottom-0 flex justify-center items-end">
//           <textarea
//             id="base-input"
//             className="bg-[#444444] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#666666] focus:border-[#555555] block w-3/5 p-2.5 dark:bg-[#444444] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444444] dark:focus:border-[#444444] overflow-y-auto relative"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//           <ArrowUpwardIcon
//             className="absolute bg-red-500 bottom-10 right-20 transform translate-x-2/4 translate-y-1/4 cursor-pointer"
//             style={{ color: 'red' }}
//             onClick={sendMessage}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;
