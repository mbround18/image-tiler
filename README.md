# Image Tiler

## Install

```sh
npm i image-to-tile
```

## Usage in Code

```js
import imageToTile from 'image-to-tile';

function makeItHappen() {
  imageToTile('./input.png', './output-dir/');
}
```

This converts the input.png to a scaled pyramid of the image. The output dir would have the input files name plus `_files` under the output dir. The folder structure would then be:

```sh
./output-dir/input_files/{x}/{y}/{z}.png
```

## Usage in Cli

```sh
image-to-tile slice ./input.png ./output-dir/
```

This converts the input.png to a scaled pyramid of the image. The output dir would have the input files name plus `_files` under the output dir. The folder structure would then be:

```sh
./output-dir/input_files/{x}/{y}/{z}.png
```
