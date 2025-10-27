import React, { useEffect } from 'react';
import './Toast.css';

function Toast({ message, type = 'info', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast-${type}`}>
      {type === 'success' && <span>🟢</span>}
      {type === 'info' && <span>ℹ️</span>}
      {type === 'warning' && <span>⚠️</span>}
      {type === 'error' && <span>❌</span>}
      <p>{message}</p>
    </div>
  );
}

export default Toast;
