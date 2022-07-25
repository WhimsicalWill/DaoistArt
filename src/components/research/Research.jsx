import "./research.scss"

export default function Research() {

  const data = [
    {
      id: 1,
      title: "AccessibleRL",
      img: "assets/graph.png",
      authors:
        "A resource for curious students of RL that provides readable implementations of some of the most significant algorithms in Deep RL",
      extra: "meep",
      link: "https://github.com/WhimsicalWill/RLPractice",
    },
  ];

  const handleClick = (myLink) => () => {
    window.open(
      myLink,
      '_blank' // <- This is what makes it open in a new window.
    );
  }

  return (
    <div className="research" id="research">
        <h1>Research</h1>
        <div className="content">
          <div className="left">
            {data.map((d) => (
              <div className="publication" onClick={handleClick(d.link)}>
                <div className="image">
                  <img
                    src={d.img}
                    alt=""
                  />
                </div>
                <div className="information">
                  <div className="title">
                    <h2>{d.title}</h2>
                  </div>
                  <div className="authors">
                    <span>{d.authors}</span>
                  </div>
                  <div className="extra">
                    <span>{d.extra}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="right">
                <h1>Research information</h1>

                <p>My research interests fall into two categories under
                  RL.
                  <ul>
                    <li>Unsupervised Reinforcement Learning --
                      enabling agents to learn skills when no external
                      reward signal is present, through intrinsic motivation,
                      curiosity, and so on.
                    </li>
                    <li>Curriculum Learning in Deep RL -- 
                      designing environments where the agent-environment
                      interactions lead to unbounded learning and growth.
                      The main question of this field asks how we can enable
                      environments and agents to co-evolve in order to
                      learn skills that are always in the proximal zone
                      of development.
                    </li>
                  </ul>
                </p>
            
                <p>I've also contributed to research in
                  the Batman Lab, detecting cancerous liver tissue
                  with deep learning models and providing data
                  visualizations, metrics, and analytics.</p>
          </div>
        </div>
    </div>
  )
}
