export function DeleteDOM(messageRef) {
  if (messageRef.current) {
    // @ts-ignore
    var containerList = document.querySelectorAll(".e-message-outer");
    if (containerList.length >= 2) {
      var removedElementTop = messageRef.current.getBoundingClientRect().top;
      var removedElementHeight = messageRef.current.getBoundingClientRect().height;
      if (messageRef.current.parentNode && messageRef.current.parentNode.parentNode) {
        messageRef.current.parentNode.parentNode.removeChild(messageRef.current.parentNode);
      }
      containerList.forEach(function (element) {
        var elementTop = element.getBoundingClientRect().top;
        if (elementTop > removedElementTop) {
          element.style.top = "".concat(elementTop - removedElementTop - removedElementHeight - 10, "px");
        }
      });
      return;
    }
    if (messageRef.current.parentNode && messageRef.current.parentNode.parentNode) {
      messageRef.current.parentNode.parentNode.removeChild(messageRef.current.parentNode);
    }
  }
}