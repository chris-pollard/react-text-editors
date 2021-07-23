import { 
    BrowserRouter as Router,
    Switch, 
    Route, 
    Link,
    useLocation, 
    useParams 
  } from "react-router-dom";
import Card from './Components/Cards'
import './Home.css'

export default function Home() {
    
    return (
        <section className="home page">
            
            <div className="home-title-wrapper">
                <h1>Text Editors in React</h1>
                <h3>A comparison of two <em>Rich Text Editing</em> frameworks available in the React ecosystem.</h3>
            </div>

            
            <div className="cards-section">
                <Link to="/draft" 
                    style={{ textDecoration: 'none', color: 'inherit' }} 
                >

                    <Card 
                        title="Draft JS"
                        subtitle="Facebook's open-source framework for Rich Text Editing"
                        iconUrl="assets/draftjs-logo.svg"
                        imgLetter="D"
                    />

                </Link>
                
                <Link to="/slate" 
                    style={{ textDecoration: 'none', color: 'inherit' }} 
                >

                    <Card 
                        title="Slate"
                        subtitle="A completely customisable framework"
                        iconUrl="assets/slate-logo.png"
                        imgLetter="S"
                    />

                </Link>

            </div>
            
            
        </section>

    ) 
    
    
    
}

