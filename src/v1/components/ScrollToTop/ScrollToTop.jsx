import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const scrollPositions = new Map();

const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const activeLocationKey = useRef(location.key);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const rememberScrollPosition = () => {
      scrollPositions.set(activeLocationKey.current, {
        left: window.scrollX,
        top: window.scrollY
      });
    };

    rememberScrollPosition();
    window.addEventListener('scroll', rememberScrollPosition, { passive: true });

    return () => {
      rememberScrollPosition();
      window.removeEventListener('scroll', rememberScrollPosition);
    };
  }, []);

  useLayoutEffect(() => {
    if (activeLocationKey.current !== location.key) {
      scrollPositions.set(activeLocationKey.current, {
        left: window.scrollX,
        top: window.scrollY
      });
    }
    activeLocationKey.current = location.key;

    const savedPosition = navigationType === 'POP'
      ? scrollPositions.get(location.key)
      : null;

    let firstFrame;
    let secondFrame;

    if (savedPosition) {
      firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(() => {
          window.scrollTo(savedPosition.left, savedPosition.top);
        });
      });
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [location.key, navigationType]);

  return null;
};

export default ScrollToTop;
