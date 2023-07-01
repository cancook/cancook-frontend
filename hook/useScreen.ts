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

export const useScreenType = () => {
  const [screenSize, setScreenSize] = useState<number>();

  const handleResize = () => {
    const { innerWidth } = window;

    setScreenSize(innerWidth);
  };

  useEffect(() => {
    if (!screenSize) setScreenSize(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!screenSize) return;
  if (screenSize < 768) {
    return 'phone';
  } else if (screenSize < 1440) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

export default useScreen;
