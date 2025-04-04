import { Badges } from "./components/Badges"
import { IconExplorer } from "./components/IconExplorer"
import {Layout} from "./components/Layout"

export const App = () => {

  return ( <Layout>
    <div>
      <h1>
        Styled Icons{' '}
        <span role="img" aria-label="icon">
          💅
        </span>
      </h1>
      <Badges />

      <div className="hero">
        <div className="content">
          <p>
            Import icons from the following icon packs as <a href="https://www.styled-components.com/">Styled Components</a>
            : <a href="https://icons.getbootstrap.com/">Bootstrap</a>, <a href="https://boxicons.com/">Boxicons</a>,{' '}
            <a href="http://cryptoicons.co">Crypto Icons</a>, <a href="http://www.entypo.com/">Entypo</a>,{' '}
            <a href="https://akveo.github.io/eva-icons/">Eva Icons</a>, <a href="https://evil-icons.io">Evil Icons</a>,{' '}
            <a href="https://feathericons.com/">Feather</a>,{' '}
            <a href="https://github.com/microsoft/fluentui-system-icons">FluentUI System</a>,{' '}
            <a href="https://fontawesome.com/">Font Awesome</a>,{' '}
            <a href="https://zurb.com/playground/foundation-icon-fonts-3">Foundation</a>,{' '}
            <a href="https://github.com/refactoringui/heroicons">Heroicons</a>, <a href="https://icomoon.io">Icomoon</a>,{' '}
            <a href="https://ionicons.com">Ionicons</a>, <a href="https://material.io/icons/">Material Design</a>,{' '}
            <a href="https://octicons.github.com/">Octicons</a>,{' '}
            <a href="https://www.npmjs.com/package/open-iconic">Open Iconic</a>, <a href="https://remixicon.com/">Remix</a>,{' '}
            <a href="https://github.com/simple-icons/simple-icons">Simple Icons</a>,{' '}
            <a href="https://www.s-ings.com/typicons/">Typicons</a>, <a href="https://www.zondicons.com/">Zondicons</a>
          </p>

          <p>
            <a href="https://github.com/styled-icons/styled-icons">
              <button>View documentation on GitHub</button>
            </a>
          </p>
        </div>

        <code className="demo">
          {`
import styled from 'styled-components'
import {Zap} from '@styled-icons/octicons'

const RedZap = styled(Zap)\`
  color: red;
\`

const App = () => <RedZap />
      `.trim()}
        </code>
      </div>


      <h2>Icon Explorer</h2>

      <IconExplorer />
    </div>
  </Layout>
  )
}
