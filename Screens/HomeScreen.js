import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import getApiResponse from '../api';


const HomeScreen = () => {
    const [messages, setMessages] = useState([]);

    const handleSend = (newMessage) => {
        setMessages(GiftedChat.append(messages, newMessage));
        const data = getApiResponse(newMessage)
        // Add Cohere API response to chat
        console.log(data)
        const responseMessage = {
            _id: Math.random().toString(36).substring(7),
            text: data,
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'Cohere Bot',
                avatar: 'https://cohere.ai/static/media/logo.28c1b2cb.svg'
            },
            quickReplies: {
                type: 'radio',
                keepIt: true,
                values: data.answers[0].options.map(option => ({ title: option.text }))
            }
        };
        setMessages(GiftedChat.append(messages, responseMessage));
    }

    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
                messages={messages}
                onSend={handleSend}
                user={{ _id: 1 }}
            />
        </View>
    );
}


export default HomeScreen
