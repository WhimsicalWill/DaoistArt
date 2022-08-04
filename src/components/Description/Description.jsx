import "./Description.scss"

const descriptionText = "The tradition known as Daoism can be traced back to 500 B.C.E. in ancient China where the philosopher Lao Tzu wrote the Tao Te Ching, which is often considered the seminal book in Daoism. Daoism emphasizes that one should learn to accept the flow of the universe, and that both humans and animals should live in harmony with the Tao, which is effectively the universe in its entirety. In many ways Daoism overlaps with the traditions of Buddhism and Hinduism, but there are still works that can be considered uniquely Daoist. Additionally, much of ancient Eastern art that reflects Daoist principles depicts the practices of people who followed the school of Daoist thought and practice. Many works have to do with cosmic balance and otherworldly realms. I am personally interested in Daoism, and I am excited to put together an exhibition that is captivating while displaying a common thread of the history of Daoism and Daoist art."
const daoism_url = "http://localhost:3000/DaoistArt/daoism.svg" 

const Description = () => {
    return  <div className="desc-container">
                <div className="desc-inner-container">
                    <div className="flex-1">
                        <h1>About</h1>
                        <p className="desc-content">{descriptionText}</p>
                    </div>
                    <div className="flex-2">
                        <img className="image" src={daoism_url} alt="" />
                    </div>
                </div>
            </div>
}

export default Description