import React, { useEffect, useState, useMemo, useCallback } from 'react';
import styles from './MagicButton.module.css';

interface MagicButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export const MagicButton: React.FC<MagicButtonProps> = ({
  children,
  type = 'button',
  disabled = false,
  onClick,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  // Оптимізовано створення зірок за допомогою useMemo
  const floatingStars = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        opacity: Math.random() < 0.4 ? Math.random() * 0.9 + 0.1 : 1,
        style: {
          '--star-left': `${Math.random() * 100}%`,
          '--star-top': `${Math.random() * 100}%`,
          '--star-opacity': Math.random() < 0.4 ? Math.random() * 0.9 + 0.1 : 1,
          '--star-delay': `${Math.random() * 3}s`,
        } as React.CSSProperties,
      })),
    []
  );

  const [burstStars, setBurstStars] = useState<
    Array<{ id: number; style: React.CSSProperties }>
  >([]);

  // Оптимізований обробник кліку
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return;

      onClick?.(e);
      setIsClicked(true);

      // Генеруємо зірки з використанням CSS custom properties
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: Date.now() + i,
        style: {
          '--burst-x': `${Math.random() * 400 - 200}px`,
          '--burst-y': `${Math.random() * 400 - 200}px`,
          '--burst-rotate': `${Math.random() * 720}deg`,
        } as React.CSSProperties,
      }));

      setBurstStars(newStars);

      setTimeout(() => {
        setBurstStars([]);
        setIsClicked(false);
      }, 1800);
    },
    [disabled, onClick]
  );

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${styles.button} ${isClicked ? styles.clicked : ''}`}
    >
      {isClicked && <span className={styles.wave} />}
      <span className={styles.buttonText}>{children}</span>

      {floatingStars.map(star => (
        <span
          key={`float-${star.id}`}
          className={styles.star}
          style={star.style}
        />
      ))}

      {burstStars.map(star => (
        <span
          key={`burst-${star.id}`}
          className={styles.starBurst}
          style={star.style}
        />
      ))}
    </button>
  );
};
