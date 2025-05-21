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
  const topBlock = ws.getTopBlocks(true).find((block) => block.type === 'mission');
  if (topBlock) {
    const generator = jsonGenerator.forBlock[topBlock.type];
    if (generator) {
      return JSON.stringify(generator(topBlock), null, 2);
    }
  }
  return '{}';
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

  const allBlocks = ws.getAllBlocks();
  const robotIds = [];
  const submissionIds = [];

  allBlocks.forEach((block) => {
    if (block.type === 'robot') {
      const id = block.getFieldValue('ID');
      if (robotIds.includes(id)) {
        alert(`Duplicate Robot ID detected: ${id}`);
      } else {
        robotIds.push(id);
      }
    }

    if (block.type === 'submission') {
      const id = block.getFieldValue('ID');
      if (submissionIds.includes(id)) {
        alert(`Duplicate Submission ID detected: ${id}`);
      } else {
        submissionIds.push(id);
      }
    }
  });

  runCode();
});
