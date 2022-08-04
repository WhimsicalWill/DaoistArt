import './Section.scss'

const Section = ({images, content}) => {
    return  <div className="section-container">
                <div className="section-inner-container">
                    <div className="section-content">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
}

export default Section