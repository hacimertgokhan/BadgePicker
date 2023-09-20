import './globals.css'
import './assets/sass/layout/layout.style.css'

export const metadata = {
  title: 'BadgePicker By H. Mert Gökhan',
  description: 'Get language badges with primary selections.',
}

export default function RootLayout({ children }) {
  return (
    <main lang='tr'>
      <script src="https://kit.fontawesome.com/55460c171b.js" crossOrigin="anonymous"/>
      <header>
        <div className='container'>
          <span>
            <h1>BadgePicker</h1>
          </span>
          <ul>
              <li>
                  <a href="https://instagram.com" id='instagram'><i className="fa-brands fa-instagram"></i></a>
              </li>
              <li>
                  <a href="https://github.com/mindlymedia" id='discord'><i className="fa-brands fa-github"></i></a>
              </li>
          </ul>
        </div>

      </header>
      <br></br>
      <body>{children}</body>
      <br></br>
      <footer>
        <ul>
          <li><a><i className="fa-solid fa-code-fork"></i> Fork BadgePicker</a></li>
          <li><a><i className="fa-solid fa-star"></i> Give a star</a></li>
          <li><a><i className="fa-solid fa-code"></i> Developer</a></li>
          <li><a><i className="fa-solid fa-box-tissue"></i> Create Issues</a></li>
        </ul>
      </footer>
      </main>
  )
}
