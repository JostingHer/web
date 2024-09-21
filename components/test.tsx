"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function PriceRangeSlider() {
  const [minValue, setMinValue] = useState(15000);
  const [maxValue, setMaxValue] = useState(100000);
  const minInputRef = useRef<HTMLInputElement>(null);
  const maxInputRef = useRef<HTMLInputElement>(null);
  const rangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateSlider();
  }, [minValue, maxValue]);

  const updateSlider = () => {
    if (rangeRef.current && minInputRef.current && maxInputRef.current) {
      const minPercent = ((minValue - 0) / (100000 - 0)) * 100;
      const maxPercent = ((maxValue - 0) / (100000 - 0)) * 100;
      rangeRef.current.style.left = `${minPercent}%`;
      rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    const trackRect = (e.target as HTMLDivElement).getBoundingClientRect();
    const clickPosition = e.clientX - trackRect.left;
    const clickPercent = (clickPosition / trackRect.width) * 100;
    const clickValue = Math.round((clickPercent * 100000) / 100 / 1000) * 1000;

    const distanceToMin = Math.abs(clickValue - minValue);
    const distanceToMax = Math.abs(clickValue - maxValue);

    if (distanceToMin < distanceToMax) {
      setMinValue(Math.min(clickValue, maxValue - 1000));
    } else {
      setMaxValue(Math.max(clickValue, minValue + 1000));
    }
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <div className="price-range-slider">
      <div className="price-range-slider__price-display">
        Precio: {formatPrice(minValue)} - {formatPrice(maxValue)}
      </div>
      <div className="price-range-slider__container" onClick={handleTrackClick}>
        <div className="price-range-slider__track"></div>
        <div ref={rangeRef} className="price-range-slider__range"></div>
        <input
          ref={minInputRef}
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={minValue}
          onChange={(e) => setMinValue(Math.min(Number(e.target.value), maxValue - 1000))}
          className="price-range-slider__input price-range-slider__input--min"
          aria-label="Precio mínimo"
        />
        <input
          ref={maxInputRef}
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={maxValue}
          onChange={(e) => setMaxValue(Math.max(Number(e.target.value), minValue + 1000))}
          className="price-range-slider__input price-range-slider__input--max"
          aria-label="Precio máximo"
        />
        <div
          className="price-range-slider__thumb price-range-slider__thumb--min"
          style={{ left: `${((minValue - 0) / (100000 - 0)) * 100}%` }}
        ></div>
        <div
          className="price-range-slider__thumb price-range-slider__thumb--max"
          style={{ left: `${((maxValue - 0) / (100000 - 0)) * 100}%` }}
        ></div>
      </div>
      <div className="price-range-slider__limits">
        <span>{formatPrice(0)}</span>
        <span>{formatPrice(100000)}</span>
      </div>
    </div>
  );
}

const styles = `
  .price-range-slider {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .price-range-slider__price-display {
    font-size: 18px;
    margin-bottom: 20px;
    color: #333;
  }

  .price-range-slider__container {
    position: relative;
    height: 6px;
    margin: 30px 0 10px;
    cursor: pointer;
  }

  .price-range-slider__track {
    position: absolute;
    width: 100%;
    height: 6px;
    background-color: #ddd;
    border-radius: 3px;
  }

  .price-range-slider__range {
    position: absolute;
    height: 6px;
    background-color: #ff6600;
    border-radius: 3px;
  }

  .price-range-slider__input {
    position: absolute;
    width: 100%;
    height: 0;
    opacity: 0;
    z-index: 3;
    pointer-events: none;
  }

  .price-range-slider__thumb {
    width: 40px; /* Tamaño mayor para mayor área clicable */
    height: 40px;
    border-radius: 50%;
    background-color: #ff6600;
    position: absolute;
    top: -18px; /* Ajuste para alinear con el track */
    z-index: 2;
    cursor: pointer;
    transition: box-shadow 0.2s ease, transform 0.2s ease; /* Suavidad en el hover */
  }

  /* Efecto hover más suave y fácil de arrastrar */
  .price-range-slider__thumb:hover {
    transform: scale(1.3); /* Crece ligeramente */
    box-shadow: 0 0 10px rgba(255, 102, 0, 0.7); /* Sombra más intensa */
  }

  .price-range-slider__input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 40px; /* Tamaño mayor para fácil control */
    height: 40px;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    z-index: 4;
  }

  .price-range-slider__input::-moz-range-thumb {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    z-index: 4;
  }

  .price-range-slider__limits {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #666;
    margin-top: 10px;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}
