import React from "react";
import PropTypes from "prop-types";

export const renderTypeInput = (inputOption, inputMap, idx, state) => {
  const {
    type,
    placeholder,
    order,
    customProps,
    componentOverride,
    label,
    customComponents,
    stateKey,
    setState
  } = inputOption;

  const handleChange = event => {
    const newState = state;

    newState[stateKey] = event.target.value;
    console.log(newState)
    setState({ ...newState });
  };

  const renderCustomComponents = () => {
    return (
      <React.Fragment>
        {customComponents &&
          customComponents.map(Component => <Component></Component>)}
      </React.Fragment>
    );
  };

  if (componentOverride) {
    const ComponentOverride = componentOverride;

    return (
      <React.Fragment>
        {renderCustomComponents()}
        <ComponentOverride
          type={type}
          placeholder={placeholder}
          key={idx}
          random="component with override"
          value={state[stateKey]}
          onChange={handleChange}
          {...customProps}
        />
      </React.Fragment>
    );
  }

  if (inputMap.hasOwnProperty(type)) {
    const ComponentMapped = inputMap[type];
    return (
      <React.Fragment>
        {renderCustomComponents()}
        <ComponentMapped
          type={type}
          placeholder={placeholder}
          key={idx}
          random={"componentMapped"}
          value={state[stateKey]}
          onChange={handleChange}
          {...customProps}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {renderCustomComponents()}
      <input
        key={idx}
        type={type}
        placeholder={placeholder}
        {...customProps}
        value={state[stateKey]}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};

renderTypeInput.propTypes = {};
