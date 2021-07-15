import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const Address = ({ setAddress, isDaumPost }) => {
  const handleComplete = data => {
    const {
      address,
      jibunAddress,
      zonecode,
      userSelectedType,
      bname,
      buildingName,
    } = data;

    const roadAddress = `${address} (${bname ? bname : ''} ${
      buildingName ? buildingName : ''
    })`;

    const oldAddress = `${jibunAddress} (${bname ? bname : ''} ${
      buildingName ? buildingName : ''
    })`;

    if (userSelectedType === 'R') {
      setAddress(roadAddress, zonecode);
    } else {
      setAddress(oldAddress, zonecode);
    }
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
