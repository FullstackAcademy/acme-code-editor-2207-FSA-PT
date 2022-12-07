import React, { useRef, useEffect } from 'react'

const Editor = ({ value, onChange }) => {
  const el = useRef();
  useEffect(()=> {
    const editor = CodeMirror(el.current, {
      value,
      mode: 'javascript',
      lineNumbers: true
    });
    editor.on('change', ()=> {
      onChange(editor.getValue());
    });
  }, [el]);
  return (
    <div ref={ el } style={{ height: '300px', border: 'solid 1px black'}}>
    </div>
  );
};

export default Editor;
