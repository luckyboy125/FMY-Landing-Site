import { useState, useEffect } from 'react';
import { staticHeight, staticWidth } from './constants';

export interface WindowDimensions {
  width: number;
  height: number;
}

function getWindowDimensions(): WindowDimensions {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export function adjustContainer(
  height: number,
  width: number,
  containerStyle: string
): void {
  const el = document.getElementsByClassName(containerStyle)[0] as
    | HTMLElement
    | undefined;
  if (!el) return;

  if (width / staticWidth > height / staticHeight) {
    el.style.zoom = String(height / staticHeight);
  }
  if (height / staticHeight > width / staticWidth) {
    el.style.zoom = String(width / staticWidth);
  }
}

export function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] =
    useState<WindowDimensions>(getWindowDimensions);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('fullscreenchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('fullscreenchange', handleResize);
    };
  }, []);

  return windowDimensions;
}
