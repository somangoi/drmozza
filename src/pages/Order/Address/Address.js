import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const Address = ({ setAddress, isDaumPost, width, height, modalStyle }) => {
  const handleComplete = data => {
    const {
      address,
      jibunAddress,
      zonecode,
      userSelectedType,
      bname,
      buildingName,
    } = data;

    const isAddress = userSelectedType === 'R';

    const roadAddress = `${address} (${bname ? bname : ''} ${
      buildingName ? buildingName : ''
    })`;

    const oldAddress = `${jibunAddress} (${bname ? bname : ''} ${
      buildingName ? buildingName : ''
    })`;

    setAddress(isAddress ? roadAddress : oldAddress, zonecode);
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
