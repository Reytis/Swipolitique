import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { HomePage } from './Home';
import { ProfilePage } from './Profile';
import { MatchPage } from './Match';
import { ChatPage } from './Chat';
import { SettingsPage } from './SettingsPage';
import { OtherUserProfile } from './components/OtherUserProfile';
import { genderState, Match, Side, verfiState } from './type';
import { Conversation } from './components/Conversation';

export const pages = ['Profil', 'Acceuil', 'Match', 'Chat', 'Paramètres'];
export const matchList: Match[] = [
{
  id: 1,
  name: "Sophie",
  mainImg: "PictureSlide.png",
  imgs: ["PictureSlide2.png", "PictureSlide3.png"],
  age: 28,
  gender: genderState.female,
  side: Side.right,
  verification: verfiState.verified,
  chat: [
    {
      user: "Sophie",
      userID: 1,
      message: "Salut ! Comment vas-tu aujourd'hui ?",
      createdAt: new Date('2024-09-17T10:20:00'),
      isRead: true,
      isMine: false
    },
    {
      user: "Moi",
      userID: undefined,
      message: "Ça va bien, et toi ?",
      createdAt: new Date('2024-09-17T10:22:00'),
      isRead: true,
      isMine: true
    },
    {
      user: "Sophie",
      userID: 1,
      message: "Je vais super, merci !",
      createdAt: new Date('2024-09-17T10:25:00'),
      isRead: false,
      isMine: false
    }
  ],
  swipePrecision: {
    total: 256,
    accuracy: 123
  }
},
{
  id: 2,
  name: "Alex",
  mainImg: "Jack_Sparrow.jpg",
  imgs: ["Snapchat-1679208253.jpg", "Snapchat-766486486.jpg"],
  age: 32,
  gender: genderState.male,
  side: Side.left,
  verification: verfiState.verified,
  chat: [
    {
      user: "Alex",
      userID: 2,
      message: "Salut ! Des plans pour le week-end ?",
      createdAt: new Date('2024-09-16T15:30:00'),
      isRead: true,
      isMine: false
    },
    {
      user: "Moi",
      userID: undefined,
      message: "Je pense aller randonner !",
      createdAt: new Date('2024-09-16T15:32:00'),
      isRead: true,
      isMine: true
    },
    {
      user: "Alex",
      userID: 2,
      message: "Génial ! J'adore la randonnée.",
      createdAt: new Date('2024-09-16T15:35:00'),
      isRead: false,
      isMine: false
    }
  ],
  swipePrecision: {
    total: 398,
    accuracy: 274
  }
},
{
  id: 3,
  name: "Taylor",
  mainImg: "Capture décran 2024-07-25 165030.png",
  imgs: ["IMG_20240630_103355_328.jpg", "intro-1654979525.jpg"],
  age: 25,
  gender: genderState.nonBinary,
  side: Side.right,
  verification: verfiState.noVerif,
  chat: [
    {
      user: "Taylor",
      userID: 3,
      message: "Bonjour !",
      createdAt: new Date('2024-09-18T08:10:00'),
      isRead: true,
      isMine: false
    },
    {
      user: "Moi",
      userID: undefined,
      message: "Salut ! Comment ça va ?",
      createdAt: new Date('2024-09-18T08:12:00'),
      isRead: true,
      isMine: true
    }
  ],
  swipePrecision: {
    total: 112,
    accuracy: 50
  }
},
{
  id: 4,
  name: "Jordan",
  mainImg: "Designer.jpeg",
  imgs: ["Designer (2).jpeg", "Designer (1).jpeg"],
  age: 29,
  gender: genderState.male,
  side: Side.left,
  new: true,
  verification: verfiState.verified,
  swipePrecision: {
    total: 836,
    accuracy: 500
  }
},
{
  id: 5,
  name: "Emma",
  mainImg: "IMG_20240915_153836.jpg",
  imgs: ["IMG_0418.jpeg"],
  age: 27,
  gender: genderState.female,
  side: Side.right,
  new: true,
  verification: verfiState.waitingFor,
  swipePrecision: {
    total: 54,
    accuracy: 12
  }
}
]
export const ME = {
  id: 0,
  name: 'Memento',
  mainImg: 'Designer.jpeg',
  imgs: ['Designer (1).jpeg', 'Designer (2).jpeg'],
  age: 30,
  gender: genderState.male,
  side: Side.right,
  verification: verfiState.verified,
  swipePrecision: {
      total: 220,
      accuracy: 90
  },
  userSwipePrecision: {
      total: 356,
      accuracy: 95
  },
  matchList: matchList,
  lookFor: {
      age: {min: 25, max: 35},
      gender: [genderState.female],
      isIncognito: false
  },
  blockedUsers: []
}


function App() {
  const [page, setPage] = useState(pages[1]);
  const navigate = useNavigate();

  const handleChangePage = (str: string): void => {
    setPage(str);

    // Map the page names to route paths
    switch (str) {
      case pages[0]: // Profile
        navigate('/profile');
        break;
      case pages[1]: // Home
        navigate('/');
        break;
      case pages[2]: // Match
        navigate('/match');
        break;
      case pages[3]: // Chat
        navigate('/chat');
        break;
      case pages[4]: // Settings
        navigate('/settings');
        break;
      default:
        navigate('/'); // Fallback to home
        break;
    }

    console.log('changed to', str);
  };

  return (
    <>
      <Header currentPage={page} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage user={ME}/>} />
        <Route path="/match" element={<MatchPage matchList={ME.matchList} />} />
        <Route path="/chat" element={<ChatPage MatchList={ME.matchList} />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/user/:userId" element={<OtherUserProfile />} />
        <Route path="/chat/:userId" element={<Conversation />} />
        <Route path="/blocked-users" element={<Conversation />} />
        <Route path="/cgu" element={<Conversation />} />
        <Route path="/update-datas" element={<Conversation />} />
      </Routes>
      <Nav 
        currentPage={page} 
        onClick={handleChangePage} 
        chatNotif={matchList.filter(m => m.chat && m.chat[m.chat.length - 1].isRead === false).length} 
        matchNotif={matchList.filter(m => m.new === true).length} 
      />
    </>

  );
}

export default App;
