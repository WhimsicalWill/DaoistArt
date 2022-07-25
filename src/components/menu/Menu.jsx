import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#projects">Projects</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#research">Research</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#resources">Resources</a>
            </li>
        </ul>
    </div>
  )
}
