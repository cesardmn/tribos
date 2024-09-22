import React, { useState, useEffect } from 'react';

export default function Watch() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime(); // Atualiza o relógio imediatamente ao montar o componente
    const intervalId = setInterval(updateTime, 60000); // Atualiza a cada minuto

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div id="clock">{time}</div>
  );
}
