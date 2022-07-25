import "./projects.scss"

export default function Projects() {

  const data = [
    {
      id: 1,
      name: "AccessibleRL",
      img: "assets/accessible_rl.png",
      desc:
        "A resource for curious students of RL that provides readable implementations of some of the most significant algorithms in Deep RL",
      link: "https://github.com/WhimsicalWill/RLPractice",
    },
    {
      id: 2,
      name: "Graph Notes",
      img: "assets/graph.png",
      desc:
        "A novel note-taking webapp that gives a relational view of notes, transforming the way people brainstorm and track ideas",
      link: "https://github.com/MyYogurt/graph-notes",
      featured: true,
    },
    {
      id: 3,
      name: "N-Queens GA",
      img: "assets/chessboard.png",
      desc:
        "An application of genetic algorithms to the famous N-Queens combinatorial problem",
      link: "https://github.com/WhimsicalWill/N-Queens-Genetic-Algorithm",
    },
  ];

  const handleClick = (myLink) => () => {
    window.open(
      myLink,
      '_blank' // <- This is what makes it open in a new window.
    );
  }

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} onClick={handleClick(d.link)}>
            <div className="top">
              <h3>{d.name}</h3>
            </div>
            <div className="center">
              <img
                src={d.img}
                alt=""
              />
            </div>
            <div className="bottom">
              <span>{d.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
