import React from "react"
import PropTypes from "prop-types"
import { renderTypeInput } from "./renderTypeInput"

export const FormHandler = ({ inputFields = [], inputMap = {}, state }) => {
  const sortedInputs = inputFields.sort((a, b) => a.order - b.order)

  return (
    <div>
      {
        inputFields.length !== 0 ? sortedInputs.map((inputOption, idx) => {
        return renderTypeInput(inputOption, inputMap, idx, state )
        }) : <div> no form inputs </div>
      }
    </div>
  )
}

FormHandler.propTypes = {}
