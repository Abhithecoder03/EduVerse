import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const VideoPage=()=>{
    const {id}=useParams();
    console.log(id)
    const roomID=id
    let myMeeting = async (element) => {
   // generate Kit Token
    const appID =1801154984 ;
    const serverSecret = "32d2479b90ae81bde0b78e8d92d35c7b";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), "Abhishek");

  
   // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
           window.location.protocol + '//' + 
           window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });}
    return(
        <div ref={myMeeting}>
            
        </div>
    )
}
export default VideoPage
