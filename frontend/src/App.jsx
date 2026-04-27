import { useEffect, useState } from 'react'
import FigmaDesktop from './FigmaDesktop'

const DESIGN_WIDTH = 1440
const DESIGN_HEIGHT = 10576

function App() {
  const [scale, setScale] = useState(() => window.innerWidth / DESIGN_WIDTH)

  useEffect(() => {
    const updateScale = () => {
      setScale(window.innerWidth / DESIGN_WIDTH)
    }

    window.addEventListener('resize', updateScale)
    updateScale()

    return () => {
      window.removeEventListener('resize', updateScale)
    }
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f1f1f2]">
      <div className="mx-auto w-full" style={{ height: `${DESIGN_HEIGHT * scale}px` }}>
        <div
          className="mx-auto"
          style={{
            width: `${DESIGN_WIDTH}px`,
            height: `${DESIGN_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
          }}
        >
          <FigmaDesktop />
        </div>
      </div>
    </main>
  )
}

export default App
