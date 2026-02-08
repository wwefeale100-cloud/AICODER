import React from 'react';

const ChatPanel = () => {
    return (
        <div className="chat-panel">
            <h2>Chat Interface</h2>
            <div className="messages">
                {/* Messages will be displayed here */}
            </div>
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
        </div>
    );
};

export default ChatPanel;