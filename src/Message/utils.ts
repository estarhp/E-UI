export function DeleteDOM(messageRef:React.RefObject<HTMLElement>) {
  if (messageRef.current){
    // @ts-ignore
    let containerList:Array<HTMLElement> = document.querySelectorAll(".e-message-outer")

    if (containerList.length >= 2) {
      const removedElementTop = messageRef.current.getBoundingClientRect().top;
      const removedElementHeight = messageRef.current.getBoundingClientRect().height;

      if (messageRef.current.parentNode && messageRef.current.parentNode.parentNode){
        messageRef.current.parentNode.parentNode.removeChild(
          messageRef.current.parentNode
        );
      }

      containerList.forEach((element:HTMLElement) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop > removedElementTop) {
          element.style.top = `${elementTop - removedElementTop - removedElementHeight - 10}px`;
        }
      });

      return
    }

    if (messageRef.current.parentNode && messageRef.current.parentNode.parentNode){
      messageRef.current.parentNode.parentNode.removeChild(
        messageRef.current.parentNode
      );}
  }
}
