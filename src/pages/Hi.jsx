import React from 'react';
import bot from "../ressources/hi-robot.gif";
import bot2 from "../ressources/Bot2.jpg";
import bot_back from "../ressources/back.jpg";
import styled from 'styled-components';

const ChatbotPage = () => {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8" />
        <title>Ted: A Deep-Learning Chatbot</title>
        <link rel="icon" href={bot2} />
        <style>
          {`
          body {
            background-image: url(${bot_back});
            background-size: cover;
            background-blend-mode: lighten;
          }

          #chat {
            position: fixed;
            left: 1300px;
            font-size: 18px;
            bottom: 150px;
            color: white;
            background-color: blue;
            height: 50px;
            width: 140px;
            border-radius: 12px;
            font-weight:bold;
          }

          h2 {
            position: fixed;
            left: 650px;
            top: 40px;
            font-size: 60px;
            color: blue;
            font-weight: bold;
          }

          h3 {
            position: fixed;
            left: 600px;
            top: 130px;
            font-size: 40px;
            color: blue;
          }

          .boxed {
            width: 900px;
            height: 300px;
            position: fixed;
            left: 460px;
            top: 250px;
            font-size: 18px;
            color: blue;
            font-weight: bold;
            text-align: justify;
            background-color: rgba(255, 255, 0, 0); // Transparent background
            padding: 20px;
            border-radius: 10px;
          }
          `}
        </style>
      </head>
      <body>
        <br /><br /><br />
        <img src={bot} height="600" width="320" style={{ position: 'fixed', left: '70px', top: '120px' }} />
        <h2>Hi, I'm TestGPT!</h2>
        <h3>Your AI-powered Test Case Generator</h3>
        <div className="boxed">
          <p>
            Good day! I am an advanced testing bot designed to make your testing process more efficient and hassle-free.
            With my capabilities, I can generate test cases automatically, saving you valuable time and effort.
          </p> <br/>
          <p>
            By leveraging cutting-edge algorithms and intelligent analysis, I can swiftly analyze your software or system
            and generate a comprehensive set of test cases tailored to your specific requirements.
          </p><br/><br/><br/>
          <p><center>So, why spend countless hours creating test cases manually when you have me, your trusty testing bot, by your side?
            Let's embark on a journey of efficient and effective testing together!</center>
          </p><br/><br/>
          <input id="chat" type="button" value="Let's Chat!" onClick={() => window.open('/Home', '_self')} style={{cursor:'pointer'}} />
        </div>
        <p style={{ position: 'fixed', bottom: 20, left: '770px', fontSize: '14px', color: 'blue', textAlign: 'right', fontWeight: 'bold' }}>
        Implemented by <a target='_blank' href='https://www.linkedin.com/in/fatma-elbehi-660836192/' style={{ textDecoration: 'under', color: 'blue', cursor:'pointer' }}>Fatma Elbehi -- 2023/2024</a>,
        <br />
       <center>Project Github: <a target="_blank" href="https://github.com/FatmaElbehi/Front_End_PFE" style={{ textDecoration: 'none', color: 'blue',cursor:'pointer' }}>TestGPT Bot</a></center> 
        </p>

      </body>
    </html>
  );
};

export default ChatbotPage;
