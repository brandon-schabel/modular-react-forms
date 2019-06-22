import React from "react"
import PropTypes from "prop-types"


const Input = () => {
  return <input></input>
}

const inputMapTest = {
  input: Input
}

const testProps = [
  {
    type: "input",
    placeholder: "test",
    order: 1,
    customProps: {
      onClick: () => {
        console.log("test")
      }
    }
  },
  {
    type: "input",
    placeholder: "test",
    order: 0,
    customProps: {
      onClick: () => {
        console.log("test")
      }
    },
    componentOverride: Input
  }
]


const renderTypeInput = () => {

}

export const FormHandler = ({ inputFields, inputMap}) => {
  const sortedProps = testProps.sort((a, b) => a.order - b.order)
  inputMap = inputMapTest
  return (
    <div>
      {sortedProps.map((input, idx) => {
        const { type, placeholder, order, customProps, componentOverride } = input
        switch (type) {
          case "input":
            if (componentOverride) {
              const ComponentWithOverride = componentOverride
              return (
                <ComponentWithOverride
                  type={type}
                  placeholder={placeholder}
                  key={idx}
                  random="component with override"
                  {...customProps}
                />
              )
            }
            if (inputMap.hasOwnProperty("input")) {
              const ComponentMapped = inputMap[type]
              return (
                <ComponentMapped
                  type={type}
                  placeholder={placeholder}
                  key={idx}
                  random={"componentMapped"}
                  {...customProps}
                />
              )
            } else {
              return (
                <input type={type} placeholder={placeholder}  {...customProps}
                />
              )

            }
          // return Component ? (
          //   <Component
          //     type={type}
          //     placeholder={placeholder}
          //     key={idx}
          //     {...customProps}
          //   />
          // ) : (
          //   <input type={type} placeholder={placeholder}  {...customProps}
          //   />
          // )
        }
        // return (
        //   <inputMap.input>test</inputMap.input>
        // )
        // return (

        //     :
        //     <div
        //       key={idx}
        //     >
        //       {order}
        //
        //     </div>
        //   )
      })}
    </div>
  )
}

FormHandler.propTypes = {}
