import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormHandler } from './FormHandler'



const CustomInput = () => {
  return <input></input>
}

const Input = () => {
  return <input></input>
}

const inputMapTest = {
  input: Input
}

export const TestForm = props => {
  const [state, setState] = useState({})

  const testFields = [
    {
      type: "password",
      placeholder: "test",
      order: 1,
      customProps: {
        onClick: () => {
          console.log("test")
        }
      },
      stateKey: "username",
      setState
    },
    {
      type: "text",
      placeholder: "test",
      order: 0,
      customProps: {
        onClick: () => {
          console.log("test")
        }
      },
      setState
      // componentOverride: CustomInput
    }
  ]

  return (
    <div>

      <FormHandler inputFields={testFields} state={state}/>

    </div>
  )
}

TestForm.propTypes = {}
