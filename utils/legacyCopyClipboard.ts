const legacyCopyClipboard = () => {
  const element = document.createElement('textarea');
  element.value = window.location.href;
  element.setAttribute('readonly', '');
  element.style.position = 'fixed';
  element.style.opacity = '0';
  document.body.appendChild(element);
  element.select();
  const copyValue = document.execCommand('copy');
  document.body.removeChild(element);
};

export default legacyCopyClipboard;
