import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night'
import { javascript } from '@codemirror/lang-javascript'
import CodeMirror from '@uiw/react-codemirror'
import { dummyCodeInput, dummyCodeOutput } from '../../lib/dummyData'
// import { EditorView } from '@codemirror/view'
import { json } from '@codemirror/lang-json'
// import React from 'react'

export default function Panel() {
  // const [codeInputs, setCodeInputs] = React.useState()
  // const [codeOutputs, setCodeOutputs] = React.useState()

  // const disableSpellcheck = () => {
  //   return EditorView.contentAttributes.of({ spellcheck: 'false', 'data-gramm': 'false' })
  // }

  // const onChangeCodeInputs = React.useCallback((value, viewUpdate) => {
  //   setCodeInputs(value)
  // }, [])

  // const onChangeCodeOutputs = React.useCallback((value, viewUpdate) => {
  //   setCodeOutputs(value)
  // }, [])
  
  return (
    <>
      <div className='content flex h-[calc(100vh-var(--nextra-navbar-height))] flex-row flex-nowrap items-start justify-start overflow-hidden'>
        <div className='h-full w-1/2 flex-auto self-auto overflow-hidden'>
          {/* <CodeMirror
            value={codeInputs}
            height='100%'
            minHeight='100%'
            extensions={[ javascript({ typescript: true }), disableSpellcheck()]}
            onChange={onChangeCodeInputs}
            theme={tokyoNight}
            basicSetup={{
              foldGutter: true,
              highlightActiveLine: true,
              highlightActiveLineGutter: true,
              lineNumbers: true,
            }}
          /> */}

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
