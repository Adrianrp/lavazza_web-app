import React from 'react';

import TextField from '../../../node_modules/material-ui/TextField';

const Form = (props) => {
  console.log(props);
  // TODO This constant could be made more elegant with a map function
  const updateVideoForm =
    <form onSubmit={props.handleSubmit} >
      <TextField
        id="text-field-default"
        onChange={props.handleChange}
        name="weekNr"
        type="number"
        defaultValue={props.selectedVideo.weekNr || ''}
        floatingLabelText={'Week Nr'}
      /><br />
      <TextField
        id="text-field-default"
        onChange={props.handleChange}
        defaultValue={props.selectedVideo.url || ''}
        name="url"
        floatingLabelText={'URL'}
      /><br />
      <TextField
        id="text-field-default"
        onChange={props.handleChange}
        defaultValue={props.selectedVideo.title || ''}
        name="title"
        floatingLabelText={'Title'}
      /><br />

    </form>
;
  return (
    <div>{updateVideoForm}</div>
  )
};

export default Form;