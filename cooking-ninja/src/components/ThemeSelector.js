import {useTheme} from "../hooks/useTheme"
import modeIcon from '../assets/mode-icon.svg'

// styles
import './ThemeSelector.css'

const themeColors = ['#58249c', '#249c6b', '#b70233', '#fec0c5']

export default function ThemeSelector() {

  const {changeColor, changeMode, mode} = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'light' ? 'dark' : 'light')
  }
  console.log(mode)

  return (
  <div className="theme-selector">
    <div className="mode-toggle">
      <img
      onClick={toggleMode}
        src={modeIcon}
        alt="mode icon" 
      />
    </div>
    <div className="theme-buttons">
      {themeColors.map(color => (
        <div
        key={color}
        onClick={() => changeColor(color)}
        style={{background: color}}
        />
      ))}
    </div>

  </div>
  )
}
