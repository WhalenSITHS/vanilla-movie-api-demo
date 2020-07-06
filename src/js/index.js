const key = "1fd276ec57b4baedacae00246e5cf4b7";
const query = async function () {
  const response = await fetch(
    `http://www.omdbapi.com/?s="Star Wars"&apikey=${key}`
  );
};
