import React from 'react';
import QRCode from 'qrcode.react';
const QRCodeGenerator = (props) => {
  return (
    <div>
      <h3>Scan the QR Code to visit the link:</h3>
      <QRCode value={props.urlValue} size={256} />
    </div>
  );
};

export default QRCodeGenerator;
