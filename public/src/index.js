/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import {blocks} from './blocks/index';
import {toMissionJson} from './generators/index';
import {toolbox} from './toolbox';
import './index.css';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocksWithJsonArray(blocks);

const jsonGenerator = {
  forBlock: toMissionJson
};

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});

const generateMissionJson = () => {
  const mission = [];

  ws.getAllBlocks().forEach((block) => {
    const generator = jsonGenerator.forBlock[block.type];
    if (generator) {
      mission.push(generator(block));
    }
  });

  return JSON.stringify(mission, null, 2);
};


// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
const runCode = () => {
  const code = generateMissionJson();
  codeDiv.innerText = code;

  outputDiv.innerHTML = '';

};

runCode();


// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (
    e.isUiEvent ||
    e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  runCode();
});
