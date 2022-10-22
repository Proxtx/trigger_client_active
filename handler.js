let clientInput = window.triggerGui.getElementsByClassName("clientInput")[0];
let updateSelect = window.triggerGui.getElementsByClassName("updateSelect")[0];

window.getTriggerConfiguration = () => {
  return {
    text: clientInput.component.value + " " + updateSelect.value,
    data: {
      client: clientInput.component.value,
      update: updateSelect.value,
    },
  };
};
