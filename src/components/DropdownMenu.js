import { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import data from '../data/data.json'

const DropdownMenu = () => {
  const [length, setLength] = useState(0)
  const numberRange = data.password.passwordArr

  const handleSelect = (e) => {
    setLength(e.target.value)
  }

  return (
    <>
      <FormControl style={{ width: '100px' }}>
        <InputLabel>Number of Characters</InputLabel>
        <Select value={length} onChange={handleSelect}>
          {numberRange.map((num) => (
            <MenuItem value={num}>{num}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default DropdownMenu
