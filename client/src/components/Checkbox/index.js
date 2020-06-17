
import React, { useState, useEffect, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import userContext from '../../utils/userContext'
import { addRemovePlant, getUser } from '../../utils/API'

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},

})(props => <Checkbox color='root' {...props} />)

export default function CheckboxLabels({ id }) {
  // const { user, setUser } = useContext(userContext)
  const [user, setUser] = useState([])
  const [state, setState] = React.useState(false)
  useEffect(() => {

    const userId = JSON.parse(localStorage.getItem('user'))
    getUser(userId)
      .then(res => {
        console.log('plantkins page', res.data)
        setUser(res.data[0])
      })
      .catch(err => console.log(err))
  }, [])
  const handleChange = () => {

    addRemovePlant(id, user._id, state ? 'remove' : 'add').then(({ data }) =>
      setUser(data)
    )
    setState(!state)
  }

  return (
    <FormControlLabel
      control={
        <GreenCheckbox
          checked={state.checkedH}
          onChange={handleChange}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          name='checkedH'
        />
      }
      label='Add to My Plantkins'
    />
  )
}
