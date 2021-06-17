import { FunctionComponent } from 'react'

export const DefaultLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <header>
        <h1>Scool CI Server</h1>
      </header>

      <main>{children}</main>

      <footer>
        <a href="#">Support</a>
        <a href="#">Learning</a>
        <a href="#">Русская версия</a>

        <span>2021 Igor Koshelev</span>
      </footer>
    </>
  )
}
