import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const Address = ({ setAddress }, isDaumPost) => {
  const handleComplete = data => {
    let AllAddress = data.address;
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
      AllAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(AllAddress, zoneCodes);
  };

  const width = 595;
  const height = 450;
  const modalStyle = {
    position: 'absolute',
    top: '100px',
    left: '200px',
    zIndex: '100',
    border: '1px solid #000000',
    overflow: 'hidden',
  };

  return (
    <DaumPostcode
      onComplete={handleComplete}
      autoClose
      width={width}
      height={height}
      style={modalStyle}
      isDaumPost={isDaumPost}
    />
  );
};

export default Address;
