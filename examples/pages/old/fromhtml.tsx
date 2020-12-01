import Editor, { Value, Value_v0 } from '@react-page/editor';

import React, { useState } from 'react';
import { cellPlugins } from '../../plugins/cellPlugins';
import contents from '../../sampleContents/v0';
const LANGUAGES = [
  {
    lang: 'en',
    label: 'English',
  },
  {
    lang: 'de',
    label: 'Deutsch',
  },
];

export default function Home() {
  const [value, setValue] = useState<Value_v0 | Value>(contents[1]);

  return (
    <>
      <Editor
        cellPlugins={cellPlugins}
        value={value}
        onChange={setValue}
        languages={LANGUAGES}
      />
    </>
  );
}