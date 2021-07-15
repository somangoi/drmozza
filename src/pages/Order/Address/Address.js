import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const Address = ({ setAddress }, isDaumPost) => {
  const handleComplete = data => {
    let allAddress = data.address;
    let extraAddress = '';
    let zoneCodes = data.zonecode;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      allAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(allAddress, zoneCodes);
  };

  const width = 395;
  const height = 300;
  const modalStyle = {
    position: 'absolute',
    top: '140px',
    left: '540px',
    zIndex: '1000',
    border: '1px solid #000000',
    overflow: 'hidden',
  };

  return (
    <DaumPostcode
      onComplete={handleComplete}
      width={width}
      height={height}
      style={modalStyle}
      isDaumPost={isDaumPost}
    />
  );
};

export default Address;
