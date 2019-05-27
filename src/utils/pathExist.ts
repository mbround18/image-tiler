import fs from 'fs';
const pathExist = (path: string) => {
  try {
    fs.statSync(path);
    return true;
  } catch (err) {
    return false;
  }
};
export default pathExist;
