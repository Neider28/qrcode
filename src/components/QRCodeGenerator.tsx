'use client'
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import QRCode from 'qrcode.react';
import Logo from '../../public/assets/logo-qr-generator.svg';
import styles from '../css/QRCodeGenerator.module.css';

const QRCodePage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleGenerateQR = () => {
    if (url) {
      setQrValue(url);
    }
  };

  const handleDownloadQR = () => {
    const canvas = document.getElementById('qr-canvas') as HTMLCanvasElement;
    const url = canvas.toDataURL('image/png');

    const a = document.createElement('a');
    a.href = url;
    a.download = 'QRCode.png';
    a.click();
  };

  return (
    <div className={styles.qr_container}>
      <Image src={Logo} width={200} height={100} alt={'QR Code'} priority={true} />
      {!qrValue && (
        <div className={styles.input_container}>
          <input
            type="text"
            placeholder="Enter an URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={handleGenerateQR}>QR Code</button>
        </div>
      )}
      {qrValue && (
        <div className={styles.success_container}>
          <QRCode
            value={qrValue}
            level={'H'}
            id="qr-canvas"
            bgColor={'#FFF'}
            fgColor={'#111729'}
            includeMargin={true}
          />
          <div className={styles.options_container}>
            <button onClick={handleDownloadQR}>
              Download
              <Icon icon="material-symbols:download" className={styles.icon} />
            </button>
            <button onClick={() => navigator.clipboard.writeText(qrValue)}>
              Share
              <Icon icon="mdi:share" className={styles.icon} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodePage;
