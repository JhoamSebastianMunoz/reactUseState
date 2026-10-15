import './Main.css'

export const Main = ({ children }) => {
  return (
    <main className="main" id="contenido">
      <div className="sheet">
        {children}
      </div>
    </main>
  )
}
