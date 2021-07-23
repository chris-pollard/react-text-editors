import Features from './Features'
import AssessmentCriteria from './AssessmentCriteria'
import Summary from './Summary'
import LearnMore from './LearnMore'
import { useState } from 'react'

export default function InfoBox({ summary, features, assessmentCriteria, learnMore }) {

    const [infoPage, setInfoPage] = useState(0)

    const renderInfoPage = () => {
        if (infoPage === 0) {
            return (
                <Summary 
                    info={summary}
                />
            )
        } else if (infoPage === 1) {
            return (
                <Features 
                    info={features}
                />
            )
        } else if (infoPage === 2) {
            return (
                <AssessmentCriteria 
                    info={assessmentCriteria}
                />
            )
        } else if (infoPage === 3) {
            return (
                <LearnMore 
                    info={learnMore}
                />
            )
        }
    }

    return (
        <div className="infobox-wrapper">
            <nav className="infobox-nav">
                <button 
                    className={ infoPage === 0 ? 'button-selected' : ''}
                    onClick={() => setInfoPage(0)
                }>
                    Overview
                </button>
                <button 
                    className={ infoPage === 1 ? 'button-selected' : ''}
                    onClick={() => setInfoPage(1)
                }>
                    Features
                </button>
                <button 
                    className={ infoPage === 2 ? 'button-selected' : ''}
                    onClick={() => setInfoPage(2)
                }>
                    Assessment Criteria
                </button>
                <button 
                    className={ infoPage === 3 ? 'button-selected' : ''}
                    onClick={() => setInfoPage(3)
                }>
                    Learn More
                </button>
            </nav>
            
            { renderInfoPage() }

        </div>
    )

}


