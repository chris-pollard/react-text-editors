import YouTubeVideo from './YouTubeVideo'
import './LearnMore.css'

export default function LearnMore({ info }) {
    
    const { resources, embedID } = info


    return (
        <div className="infobox-content">

            <h2>Learn More</h2>
            {resources.map( resource => (
                <div className="resource">
                    <p>{resource.desc} <a href={resource.url}>{resource.text}</a></p>
                </div>
            ))}

            <YouTubeVideo embedId={embedID}/>

        </div>
    )
}

