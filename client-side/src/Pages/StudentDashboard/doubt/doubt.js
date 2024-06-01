import React, { useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { LuSendHorizonal } from "react-icons/lu";

const Chat = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(`API Key: ${apiKey}`);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Save the user's outgoing message before sending the request
    const userMessage = { text: input, type: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Make a request to the Gemini AI API
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: input }] }],
        }
      );

      // Update the state with the AI response
      const aiMessage = {
        text: response.data.candidates[0].content.parts[0].text,
        type: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
      // If there's an error, display the user's outgoing message followed by the error message
      const errorMessage = {
        text: "Error sending message. Unauthorized access or invalid token.",
        type: "error",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
      setInput("");
    }
  };

  return (
    <>
      <div className="h-16"></div>
      <div className="flex flex-col space-between bg-white h-full w-screen rounded-lg ">
        <div className="flex justify-center  w-full">
          <img
            className="w-24 rounded-full"
            src="/logo.jpg"
            alt="Chanakya Logo"
          />
          <p className="mt-4 mx-4 text-2xl text-blue">Chanakya</p>
        </div>

        <div className="flex justify-center w-full">
          <div className="flex flex-col w-1/2 h-full justify-center m-4">
            {messages.map((message, index) => (
              <React.Fragment key={index}>
                {message.type === "user" ? (
                  <div className="flex flex-col mb-2">
                    <div className="flex">
                      <img
                        src="https://bit.ly/dan-abramov"
                        border="0"
                        alt="User"
                        className="inline-block mr-2 h-12 w-12 rounded-full float-right"
                      />
                      <div>You</div>
                    </div>

                    <div>
                      <div className="message-container text-black whitespace-pre-line border-solid border-1 border-[#fff] rounded-lg mb-8">
                        {message.text}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col w-full">
                    <div className="flex">
                      <img
                        src="/logo.jpg"
                        alt="Bot"
                        className="inline-block mr-2 w-14 h-14 rounded-full"
                      />
                      <div>Chanakya</div>
                    </div>

                    <CopyToClipboard text={message.text}>
                      <div className="relative w-full text-white mb-8">
                        <SyntaxHighlighter
                          language="javascript"
                          style={a11yDark}
                          className="rounded-lg p-4 bg-gray-800 overflow-y text-white"
                        >
                          {message.text}
                        </SyntaxHighlighter>
                        <button
                          className="absolute top-0 right-0 m-2 px-2 py-1 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                          onClick={() => alert("Copied to clipboard!")}
                        >
                          Copy
                        </button>
                      </div>
                    </CopyToClipboard>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="h-24"></div>
      </div>
      <div className="fixed bottom-0 w-full">
        <form className="stretch mx-2 flex  flex-row gap-3  md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl ">
          <div className="relative flex h-full max-w-full flex-1 flex-col ml-2">
            <div className="flex w-full justify-center align-middle items-center">
              <div className="bg-white overflow-hidden [&amp;:has(textarea:focus)]:border-token-border-xheavy [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full flex-grow relative border-2 dark:text-black rounded-2xl bg-token-main-surface-primary border-token-border-medium shadow-black shadow-md ">
                <textarea
                  id="base-input"
                  tabIndex="0"
                  dir="auto"
                  rows="1"
                  placeholder="Message Chankya…"
                  className="m-0  w-full resize-none border-2 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent py-[10px] pr-10 md:py-3.5 md:pr-12 max-h-52 placeholder-black pl-4 md:pl-6 h-24"
                  style={{ height: "54px", overflowY: "hidden" }}
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                ></textarea>
                <button
                  disabled=""
                  className="absolute bottom-2 right-2.5 rounded-lg bg-gray-400 p-1 pr-1 ml-4 text-black transition-colors disabled:text-gray-400 disabled:opacity-10 hover:bg-red "
                  data-testid="send-button"
                  onClick={sendMessage}
                >
                  <span className="" data-state="closed">
                    <LuSendHorizonal className="h-8 w-8 p-1">
                      {/* <path
                        d="M7 11L12 6L17 11M12 18V7"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path> */}
                    </LuSendHorizonal>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chat;
