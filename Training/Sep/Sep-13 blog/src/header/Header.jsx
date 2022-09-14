import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleS">React & Node</span>
            <span className="headerTitleL">Blog</span>
        </div>
        <img className="headerImg" src="https://www.nasa.gov/sites/default/files/thumbnails/image/smap-weather.jpg" alt="image1"></img>
    </div>
  )
}
