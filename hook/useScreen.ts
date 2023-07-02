import { useEffect, useState } from 'react';

// type ScreenMode = 'phone' | 'tablet' | 'desktop';

const useScreen = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
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

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreen;
