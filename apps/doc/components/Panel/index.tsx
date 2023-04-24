import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night'
import { javascript } from '@codemirror/lang-javascript'
import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'

import { dummyCodeInput, dummyCodeOutput } from '../../lib/dummyData'

export default function Panel() {
  return (
    <>
      <div className='content flex h-[calc(100vh-var(--nextra-navbar-height))] flex-row flex-nowrap items-start justify-start overflow-hidden'>
        <div className='h-full w-1/2 flex-auto self-auto overflow-hidden'>
          <CodeMirror
            value={dummyCodeInput}
            height='100vh'
            minHeight='100%'
            readOnly
            theme={tokyoNight}
            extensions={[javascript({ typescript: true })]}
            basicSetup={{
              foldGutter: true,
              highlightActiveLine: true,
              highlightActiveLineGutter: true,
              lineNumbers: true,
            }}
          />
        </div>

        <div className='h-full w-1/2 flex-auto self-auto overflow-hidden'>
          <CodeMirror
            value={dummyCodeOutput}
            height='100vh'
            minHeight='100%'
            theme={tokyoNight}
            extensions={[json()]}
            readOnly
            basicSetup={{
              foldGutter: true,
              highlightActiveLine: true,
              highlightActiveLineGutter: true,
              lineNumbers: true,
            }}
          />
        </div>
      </div>
    </>
  )
}
