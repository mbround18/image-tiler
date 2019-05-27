#!/usr/bin/env node

import { ISliceArgv } from './interfaces/iSliceArgv';
import ImageTiler from '.';

const data = {
  inputFile: '',
  outputDir: ''
};

const { argv } = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command(
    'slice [inputFile] [outputDir]',
    'Count the lines in a file,',
    (yargs: any) => {
      yargs.positional('inputFile', {
        describe: 'png|jpg file'
      });
      yargs.positional('outputDir', {
        describe: 'Output directory, will create if doesnt exist.'
      });
    },
    (sliceArgv: ISliceArgv) => {
      data.inputFile = sliceArgv.inputFile;
      data.outputDir = sliceArgv.outputDir;
    }
  )
  .example(
    '$0 slice ./large-image.png ./output-dir/',
    'Takes the given image and slices it.'
  )
  // .alias('i', 'input')
  // .nargs('i', 1)
  // .describe('i', 'Load an image file, supported extensions png')
  // .demandOption(['i'])
  .help('h')
  .alias('h', 'help');

ImageTiler(data.inputFile, data.outputDir);
