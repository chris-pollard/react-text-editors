import './AssessmentCriteria.css'




export default function AssessmentCriteria({ info }) {
    
    const criteria = ['💰 Funding:','🙌🏽 Latest release:','⛓ License:','🛠 Functionality:','🌤 Release cycle:','📄 Data Structure:','🦠 Ecosystem:','💻 Browser Support:','📦 Packages using:','⭐️ Github stars:','🪃 Github forks:']

    const results = Object.values(info)
    const elementList = []
    criteria.forEach( (criterion, index) => {
        elementList.push(criterion);
        elementList.push(results[index]);
    })

    return (
        <div className="infobox-content">
            <h2>Assessment Criteria</h2>
            <div className="assessment-table">
                {elementList.map( elem => (
                        <p>{elem}</p>
                ))}
            </div>

        </div>

    )
}
