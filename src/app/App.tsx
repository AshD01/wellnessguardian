import { useState, useEffect } from 'react';
import { LandingScreen } from './components/LandingScreen';
import { UserDetailsScreen } from './components/UserDetailsScreen';
import { InputScreen } from './components/InputScreen';
import { PersonSelectionScreen } from './components/PersonSelectionScreen';
import { SpotlightWheelScreen } from './components/SpotlightWheelScreen';
import { PersonDetailsScreen } from './components/PersonDetailsScreen';
import { GoalSelectionScreen } from './components/GoalSelectionScreen';
import { WellnessPathCardScreen } from './components/WellnessPathCardScreen';
import { ShareScreen } from './components/ShareScreen';
import { TemplatePreview } from './components/TemplatePreview';
import { sendUserLeadToGoogleSheets, sendFamilyMemberLeadToGoogleSheets } from './utils/googleSheets';

type Screen = 'landing' | 'user-details' | 'input' | 'person-selection' | 'spotlight-wheel' | 'person-details' | 'goal-selection' | 'wellness-card' | 'share' | 'template-preview';

interface UserData {
  userName: string;
  userPhone: string;
}

interface FamilyData {
  familyName: string;
  familyMembers: string[];
}

interface PersonData {
  label: string;
  name: string;
  phone: string;
  goal: string;
}

export default function App() {
  // Check URL for template preview mode
  const isTemplatePreview = window.location.hash === '#template-preview' || window.location.pathname === '/template-preview';
  const [currentScreen, setCurrentScreen] = useState<Screen>(isTemplatePreview ? 'template-preview' : 'landing');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [familyData, setFamilyData] = useState<FamilyData | null>(null);
  const [personData, setPersonData] = useState<PersonData | null>(null);

  // Request fullscreen on mount
  useEffect(() => {
    const requestFullscreen = async () => {
      try {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          await elem.requestFullscreen();
        } else if ((elem as any).webkitRequestFullscreen) {
          await (elem as any).webkitRequestFullscreen();
        } else if ((elem as any).msRequestFullscreen) {
          await (elem as any).msRequestFullscreen();
        }
      } catch (err) {
        // Fullscreen request failed or was denied - continue anyway
        console.log('Fullscreen not available or denied');
      }
    };

    // Slight delay to ensure user interaction
    const timer = setTimeout(requestFullscreen, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLandingNext = () => {
    setCurrentScreen('user-details');
  };

  const handleUserDetailsComplete = (data: UserData) => {
    setUserData(data);
    // Send user lead to Google Sheets
    sendUserLeadToGoogleSheets({
      userName: data.userName,
      userPhone: data.userPhone
    });
    setCurrentScreen('input');
  };

  const handleInputComplete = (data: FamilyData) => {
    setFamilyData(data);
    setCurrentScreen('person-selection');
  };

  const handleDirectPersonSelection = (personIndex: number, personLabel: string) => {
    setPersonData({ label: personLabel, name: '', phone: '', goal: '' });
    setCurrentScreen('person-details');
  };

  const handleSpinWheel = () => {
    setCurrentScreen('spotlight-wheel');
  };

  const handlePersonSelected = (personIndex: number, personLabel: string) => {
    setPersonData({ label: personLabel, name: '', phone: '', goal: '' });
    setCurrentScreen('person-details');
  };

  const handlePersonDetailsComplete = (data: { actualName: string; phone: string }) => {
    if (personData) {
      setPersonData({ ...personData, name: data.actualName, phone: data.phone });
      setCurrentScreen('goal-selection');
    }
  };

  const handleGoalSelected = (goalId: string) => {
    if (personData && userData && familyData) {
      setPersonData({ ...personData, goal: goalId });

      // Send family member lead to Google Sheets
      sendFamilyMemberLeadToGoogleSheets({
        userName: userData.userName,
        userPhone: userData.userPhone,
        familyName: familyData.familyName,
        personLabel: personData.label,
        personName: personData.name,
        personPhone: personData.phone,
        goal: goalId
      });

      setCurrentScreen('wellness-card');
    }
  };

  const handleShare = () => {
    setCurrentScreen('share');
  };

  const handleReset = () => {
    setUserData(null);
    setFamilyData(null);
    setPersonData(null);
    setCurrentScreen('landing');
  };

  const handleCreateAnother = () => {
    setPersonData(null);
    setCurrentScreen('person-selection');
  };

  return (
    <div className="w-full min-h-screen">
      {currentScreen === 'template-preview' && (
        <TemplatePreview />
      )}
      {currentScreen === 'landing' && (
        <LandingScreen onNext={handleLandingNext} />
      )}
      {currentScreen === 'user-details' && (
        <UserDetailsScreen
          onComplete={handleUserDetailsComplete}
          onBack={() => setCurrentScreen('landing')}
        />
      )}
      {currentScreen === 'input' && (
        <InputScreen
          onComplete={handleInputComplete}
          onBack={() => setCurrentScreen('user-details')}
        />
      )}
      {currentScreen === 'person-selection' && familyData && (
        <PersonSelectionScreen
          familyMembers={familyData.familyMembers}
          onPersonSelected={handleDirectPersonSelection}
          onSpinWheel={handleSpinWheel}
          onBack={() => setCurrentScreen('input')}
        />
      )}
      {currentScreen === 'spotlight-wheel' && familyData && (
        <SpotlightWheelScreen
          familyName={familyData.familyName}
          familyMembers={familyData.familyMembers}
          onPersonSelected={handlePersonSelected}
        />
      )}
      {currentScreen === 'person-details' && familyData && personData && (
        <PersonDetailsScreen
          personLabel={personData.label}
          familyName={familyData.familyName}
          onComplete={handlePersonDetailsComplete}
          onBack={() => setCurrentScreen('person-selection')}
        />
      )}
      {currentScreen === 'goal-selection' && familyData && personData && (
        <GoalSelectionScreen
          personName={personData.name}
          familyName={familyData.familyName}
          onComplete={handleGoalSelected}
          onBack={() => setCurrentScreen('person-details')}
        />
      )}
      {currentScreen === 'wellness-card' && familyData && personData && (
        <WellnessPathCardScreen
          personName={personData.name}
          familyName={familyData.familyName}
          goalId={personData.goal}
          phone={personData.phone}
          onShare={handleShare}
          onReset={handleCreateAnother}
        />
      )}
      {currentScreen === 'share' && familyData && personData && (
        <ShareScreen
          data={{
            personName: personData.name,
            familyName: familyData.familyName,
            priority: 'spotlight'
          }}
          onReset={handleReset}
        />
      )}
    </div>
  );
}