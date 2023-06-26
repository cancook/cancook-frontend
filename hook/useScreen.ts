import { useEffect, useState } from 'react';

type ScreenMode = 'phone' | 'tablet' | 'desktop';

const useScreen = (mode: ScreenMode) => {
  const [screenSize, setScreenSize] = useState('');

  const handleResize = () => {
    const { innerWidth } = window;
    let currentScreenSize = '';

    if (innerWidth < 768) {
      currentScreenSize = 'phone';
    } else if (innerWidth < 1440) {
      currentScreenSize = 'tablet';
    } else {
      currentScreenSize = 'desktop';
    }

    setScreenSize(currentScreenSize);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize === mode;
};

export default useScreen;
