import postHandler from "../reqHandlers/postHandler.js";
import Toaster from "../utils/toaster.js";

const surrenderChallengeHandler = async (id, reloader) => {
  const URL = `http://localhost:8000/challenge/surrender/${id}`;
  const res = await postHandler(URL);
  if (res.status === 1) {
    Toaster.success("Challenge Surrendered");
    reloader(Math.random())
  }
  else Toaster.error(res.data.message);
};

export default surrenderChallengeHandler;
