const sendData = (info) => ({
  type: 'SEND_DATA',
  payload: {
    info,
  }
})

export default sendData;
