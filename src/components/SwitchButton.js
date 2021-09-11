import { useState } from 'react'
import Switch from '@material-ui/core/Switch'

const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(true)

  const handleChange = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <>
      <Switch checked={isChecked} onChange={handleChange} />
    </>
  )
}

export default SwitchButton
