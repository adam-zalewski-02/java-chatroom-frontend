"use strict";

let sendToServer;

document.addEventListener('DOMContentLoaded', init);

function init() {
    document.querySelector('#send-button').addEventListener('click', sendMessage);
    document.querySelector('#join-button').addEventListener('click', joinChat);
    sendToServer = openSocket();
}

function sendMessage(e) {
    e.preventDefault();

    const message = document.querySelector('#chat-message').value;
    const data = {
        type: 'message', 
        message: message
    };
    console.log(data);
    sendToServer(data);

    document.querySelector('#chat-message').value = '';
}

function joinChat(e) {
    e.preventDefault();

    const name = document.querySelector('#username').value;
    const data = {
        type: 'join',
        username: name
    };
    sendToServer(data);
}

function onMessage(error, message) {
	document.getElementById("messages").innerHTML +=
		`   <p class="chatMessage">
                ${message.body}
			</p>
		`;

    if (error) {
        console.error(error);
    }
}
