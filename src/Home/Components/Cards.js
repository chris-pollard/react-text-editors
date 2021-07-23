
export default function Card({title, subtitle, iconUrl, imgLetter}) {

    return (
                <div className="card-wrapper">
                    <div className="card">
                        <div className=" card card-header">
                            {/* <div className="icon-wrapper"> */}
                                <img className="icon-img" src={iconUrl} alt="" />
                            {/* </div> */}
                            <h4 className="card-title">{title}</h4>
                        </div>
                        <p className="card card-subtitle">{subtitle}</p>
                    </div>
                    {/* <div className="card card-img-wrapper"> */}
                        <p className="card-letter" style={imgLetter === 'D' ?{color:'#ff6d00'} : {color:'#9d4edd'}}>{imgLetter}</p>
                    {/* </div> */}
                </div>
            
    )


}