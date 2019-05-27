import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import pathExist from './utils/pathExist';

const ImageToTile = (inputFile: string, outputDir: string) => {
  const input = path.resolve(inputFile);
  const output = path.join(
    path.resolve(outputDir),
    path.basename(input).replace(/(.jpg|.png|.tiff)$/i, '')
  );
  const outputBaseDir = path.join(output, '..');
  if (pathExist(input)) {
    if (!pathExist(outputBaseDir)) {
      fs.mkdirSync(outputBaseDir, { recursive: true });
    }
    sharp(input)
      .toBuffer()
      .then(data =>
        sharp(data)
          .png()
          .tile()
          .toFile(output)
      )
      .catch(err => {
        console.error(err);
      });
    return true;
  } else {
    throw new Error(`The path given does not exist! ${input}`);
  }
};

export default ImageToTile;
