import { useState } from 'react'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'
import * as S from './styles'
import type * as T from './types'

function App() {
  const [code, setCode] = useState('<!-- type your code here --> \n')
  const [preview, setPreview] = useState('')
  const [selectedLanguage] = useState<T.Language>('html')

  return (
    <S.Wrapper>
      <S.IDE
        value={code}
        placeholder=""
        onValueChange={(code) => setCode(code)}
        padding={10}
        highlight={(code) =>
          highlight(code, languages[selectedLanguage]!, selectedLanguage)
        }
      />
      <S.Button onClick={() => setPreview(code)}>Show preview</S.Button>
      <S.Preview dangerouslySetInnerHTML={{ __html: preview }} />
    </S.Wrapper>
  )
}

export default App
