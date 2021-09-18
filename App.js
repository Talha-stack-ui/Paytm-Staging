import React, { useRef, useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import AllInOneSDKManager from 'paytm_allinone_react-native';

const App= () => {
  
  const orderDetail = {
      orderId:'TESTORDER3',
      mid:'YsRHhx01205667308310',
      tranxToken:'54880f5d11034555974dee7e7a7a040b1631363147620',
      amount:'1.00',
      callbackUrl: "https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=YsRHhx01205667308310",
      isStaging:true,
      appInvokeRestricted:false,
  }

  const handleTranscation = ()=>{
    AllInOneSDKManager.startTransaction(
      orderDetail.orderId,
      orderDetail.mid,
      orderDetail.tranxToken,
      orderDetail.amount,
      orderDetail.callbackUrl,
      orderDetail.isStaging,
      orderDetail.appInvokeRestricted,
     )
     .then((result) => {
      // updateUI(result);
     })
     .catch((err) => {
      // handleError(err);
     });
     

  }
  return (
    <>
      <TouchableOpacity onPress={()=>{handleTranscation()}}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btn:{
    backgroundColor:"red",
    marginTop:40,
    padding:20,
    borderRadius:20
  },
  txt :{
    fontSize:30,
    textAlign:"center"
  }

});

export default App;
