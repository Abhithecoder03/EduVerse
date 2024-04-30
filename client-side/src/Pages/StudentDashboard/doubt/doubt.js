import React, { useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Chat = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  console.log(`API Key: ${ apiKey }`)
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async (e) => {
    // eslint-disable-next-line no-undef
    e.preventDefault();
    if (input.trim() === '') return;

    // Save the user's outgoing message before sending the request
    const userMessage = { text: input, type: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    // Make a request to the Gemini AI API
    try {
      const response = await axios.post(
       ` https: //generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
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
    <div className='bg-grey w-screen h-full rounded-lg flex flex-col justify-center align-middle overflow-x-hidden'>
      <div className="flex justify-center">
        <img
          src="/Assets/Expert/Chankya_Logo.png"
          alt="User"
          className="h-20 w-20"
        />
      </div>
      <div className='flex-1 mb-4 flex-col w-9/5 justify-center align-middle'>
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
              <div className='w-full h-full bg:blue flex justify-center align-middle'>
              <div className='w-6/12'>
              <CopyToClipboard text={message.text}>
                <div className="relative">
                  <SyntaxHighlighter language="javascript" style={a11yDark} className="rounded-lg p-4 bg-gray-800 text-gray-300 overflow-y">
                    {message.text}
                  </SyntaxHighlighter>
                  <button className="absolute top-0 right-0 m-2 px-2 py-1 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700" onClick={() => alert('Copied to clipboard!')}>Copy</button>
                </div>
              </CopyToClipboard>
                  </div>
                </div>
            ) : (
              <div className='w-full bg:blue flex justify-center align-middle'>
                <div className=" text-2xl w-6/12 text-black ">
                  {message.text}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="w-full pt-2 pl-0 pr-0 md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:w-[calc(100%-.5rem)]">
        <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
          <div className="relative flex h-full max-w-full flex-1 flex-col">
            <div className="absolute bottom-full left-0 right-0"></div>
            <div className="flex w-full items-center">
              <div className="overflow-hidden [&amp;:has(textarea:focus)]:border-token-border-xheavy [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full flex-grow relative border dark:text-white rounded-2xl bg-token-main-surface-primary border-token-border-medium">
                <textarea id="base-input" tabindex="0" data-id="cd112f9e-74f6-4981-bf22-8b672504933e" dir="auto" rows="1" placeholder="Message ChatGPT…
            " className="bg-white w-full h-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 p-2.5" value={input}
            onChange={(e) => setInput(e.target.value)} >
                </textarea>
                <button className="absolute  bg-yellow text-black rounded-full p-3 cursor-pointer hover:bg-blue hover:text-white w-12 h-12 bottom-4 right-16" data-testid="send-button" onClick={sendMessage} >
                  <span className="" data-state="closed">
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="relative px-2 py-2 text-center text-xs text-token-text-secondary md:px-[60px]">
          <span>Chankya can make mistakes. Consider checking important information.</span>
        </div>
      </div> 
     {/*    <div className=''>
        <div className="flex relative justify-between items-end">
          <textarea
            id="base-input"
            className="bg-white w-full h-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 p-2.5"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <div
            className="relative bg-yellow text-black rounded-full p-3 cursor-pointer hover:bg-blue hover:text-white w-12 h-12 bottom-4 right-16"
            onClick={sendMessage}>
            </div>
        </div> 
      </div>  */}
    </div>
  );
};

export default Chat;