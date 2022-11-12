let clientInput = triggerGui.getElementsByClassName("clientInput")[0];
let updateSelect = triggerGui.getElementsByClassName("updateSelect")[0];

getTriggerConfiguration(() => {
  return {
    text: clientInput.component.value + " " + updateSelect.value,
    data: {
      client: clientInput.component.value,
      status: updateSelect.value,
    },
  };
});
