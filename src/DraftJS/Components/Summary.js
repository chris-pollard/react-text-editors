
export default function Summary({ info }) {
    return (
        <div className="infobox-content">
            
            <div className="overview">
                <h2>Overview</h2>
                <p>{info.line1}</p>
                <p>{info.line2}</p>
                <p>{info.line3}</p>
            </div>

            <div className="key-features">
                <h3>Key features</h3>
                <ul>
                    {info.keyFeatures.map( feature => (
                        <li>{feature}</li>
                    ))}
                </ul>
            </div>
            
            
            
        </div>

    )
}