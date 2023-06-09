import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot, { Loading } from 'react-simple-chatbot';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styled from 'styled-components';
import Bot2 from "../ressources/chatbot.png";
import CustomAvatar from "../ressources/Bot2.jpg";
import PopupContent from "../Components/PopupContent";
import ApiLoader from './Apiloader';


const theme = {
  background: '',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#2B547E',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#2B547E',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const GenerateButton = styled.button`
  background-color: #2B547E;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const IgnoreButton = styled.button`
  background-color: #fff;
  color: #2B547E;
  border-radius: 5px;
  padding: 10px 20px;
  border: 1px solid #2B547E;
  cursor: pointer;
`;

const avatarStyle = {
    borderRadius: '50%',
    objectFit: 'cover',
    width: 50,
    height: 60,
  };

const ChatbotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* adjust height as needed */
  background-image: url(${Bot2});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
    `;

  const LogoutIcon = styled.span`
    color: #fff;
    font-size: 15px;
    margin-left: 150px;
    cursor: pointer;
  `;

class CustomChatbot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      testmessage: null
    };
  }

  togglePopup() {
    this.setState({
      opened: !this.state.opened,
    });
  }

  handleIgnore() {
    this.setState({showPopup: false});
    this.props.triggerNextStep({value: ''});
  }

  handleGenerate() {
    // generate popup
    this.togglePopup();
    this.props.triggerNextStep({value: ''});
  }
  
  
 renderHeader() {
    return (
      <div style={{ display: 'flex', alignItems: 'center',background: '#2B547E'}}>
        <img src={CustomAvatar} alt="avatar" style={avatarStyle} />
        <h4 style={{ margin: 0, marginLeft: 10, color:'white' }}>TestGPT</h4>
        <LogoutIcon onClick={this.handleLogout}>Logout</LogoutIcon>
      </div>
    );
  }

  handleLogout() {
    // Remove user session data
    localStorage.removeItem('user');

    // Redirect to login page
    window.location.href = '/';
  }
  //handleEnd = ({ steps, values }) => {
   // this.setState({ opened: true });
   // this.setState({ chatHistory: [...this.state.chatHistory, steps] });
   // this.handleGenerate();
   // return { id: 'handleNext' }; // return to the 'handleNext' step
  //}
  
  togglePopup = () => {
    this.setState({ opened: !this.state.opened });
  }
  
  render() {
    const { opened } = this.state;
    return (
      <ChatbotContainer>
        <ThemeProvider theme={theme}>
          <ChatBot
                  headerComponent={this.renderHeader()}
                  headerTitle="ChatbotTesters"
             steps={[
              {
                id: 'Greet',
                message: 'Hi! Welcome to our TestGPT Space! What is your name?',
                trigger: 'waiting',
              },
              {
                id: 'waiting',
                user: true,
                trigger: 'connaissance',
              },
              {
                id: 'connaissance',
                message: ({ previousValue }) => {
                  const match = previousValue.match(/(?:my name is|I am|I'm|Hello|hello) (\w+)/i);
                  const name = match ? match[1] : previousValue;
                  return `Nice too meet you, ${name}!  If you want to generate test case plz click on the following Button: `;
                },
                trigger: 'generate',
              },
              {
                // user:true,
                 id: 'generate',
                 //userInputEnabled: true,
                 component: (
                   <>
                     <GenerateButton onClick={() => this.handleGenerate()}>
                           Generate
                     </GenerateButton>
                   </>
                 ),
                 trigger: 'handleNext',
               },
              {
                id: 'handleNext',
                user: true,
                trigger:'test'
              },
              {
                id: 'test',
                component: <ApiLoader message={props => props.previousValue} />,
                trigger: 'step2',
              },
              {
                id: 'step2',
                trigger: 'handleNext1',
                user:true,
              },
              {
                id: 'handleNext1',
                component: <ApiLoader message={props => props.previousValue} />,
              },

             
              {
                id: 'next',
                user: true,
                trigger: 'end',
              },
              {
                id: 'end',
                message: 'test test',
               // trigger: 'end',
                end : false
              },
            ]}
            
            //handleEnd={() => this.togglePopup()}
          />
          <Popup open={opened} onClose={() => this.togglePopup()}>
            <PopupContent />
          </Popup>
        </ThemeProvider>
      </ChatbotContainer>
    );
    
  }
}

export default CustomChatbot;
