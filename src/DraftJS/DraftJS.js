import React from 'react';
import DraftEditorExample from './Components/DraftEditorExample'
import Editor from './Components/SlateEditor/Editor.jsx'
import InfoBox from './Components/InfoBox'
import './DraftJS.css'

export default function DraftJS( { framework } ) {

  const SlateEditorExample = Editor;

  return <section className="draft page">
    <h1>{framework.pageHeading}</h1>
    <div className="draft-sections-wrapper">
      <section className={ framework.pageHeading === 'Draft JS' ? 'demo-section' : 'slate-demo-section'}>

      { framework.pageHeading === 'Draft JS' ? <DraftEditorExample /> : <SlateEditorExample />}
  
      

      </section>
      <section className="information-section">
          <InfoBox 
              summary={framework.summary}
              features={framework.features}
              assessmentCriteria={framework.assessmentCriteria}
              learnMore={framework.learnMore}
          />
      </section>
    </div>

  </section>
}