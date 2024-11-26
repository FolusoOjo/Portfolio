const Download = () => {
  const link = document.createElement("a");
  link.href = { mycv };
  link.download = "Foluso Alice Ojo CV";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};
export default Download;
