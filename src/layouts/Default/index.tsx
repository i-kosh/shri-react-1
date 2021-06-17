import { FunctionComponent } from 'react'
import { PageContainer } from '../../components/PageContainer'
import './style.scss'

export const DefaultLayout: FunctionComponent = ({ children }) => {
  return (
    <div className="page">
      <header className="page__header">
        <PageContainer>
          <h1>Scool CI Server</h1>
        </PageContainer>
      </header>

      <main className="page__main">
        <PageContainer>{children}</PageContainer>
      </main>

      <footer className="page__footer">
        <PageContainer>
          <div className="page__footer-content">
            <ul className="page__footer-nav footer-nav">
              <li>
                <a href="#" className="footer-link">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Learning
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Русская версия
                </a>
              </li>
            </ul>

            <span className="page__footer-copy footer-copy">
              © 2021 Igor Koshelev
            </span>
          </div>
        </PageContainer>
      </footer>
    </div>
  )
}
