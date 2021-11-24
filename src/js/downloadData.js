// ---------------------------------------------------------------------------------------------------------------------
// FUNCTION FOR UPLOADING DATA ON SERVER
// ---------------------------------------------------------------------------------------------------------------------
// export default (safe, ID) => {
//   fetch('data/data.php', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ data: JSON.stringify(safe), fname: ID }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// };

// ---------------------------------------------------------------------------------------------------------------------
// FUNCTION FOR DOWNLOADING DATA LOCALLY; WITH BLOB
// ---------------------------------------------------------------------------------------------------------------------
export default (safe, ID) => {
  const toSave = new Blob([JSON.stringify(safe, null, 1)]);
  const day = new Date().toISOString().substr(0, 10);
  // note: it's UTC time (so for germany add +1)
  const time = new Date().toISOString().substr(11, 8);

  const hiddenElement = document.createElement('a');
  hiddenElement.href = window.URL.createObjectURL(toSave);
  hiddenElement.download = `gazefollowing-${ID}-${day}-${time}.json`;
  hiddenElement.click();
};
