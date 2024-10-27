'use client';
import { Editor } from '@monaco-editor/react';
import React from 'react';
import * as monaco from 'monaco-editor';

const CodeEditor = () => {
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null
  );
  const [input, setInput] = React.useState<string>('');

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
    editor.focus();
  }

  return (
    <div>
      <Editor
        height='75vh'
        defaultLanguage='javascript'
        theme='vs-dark'
        value={input}
        onChange={(value = '') => setInput(value)}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default CodeEditor;
