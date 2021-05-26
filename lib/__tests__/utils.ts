export const getDialogElement = () => {
  const bodyChildren = document.body.children;
  const lastButOneElementChild = bodyChildren[bodyChildren.length - 2];
  const lastElementChild = document.body.lastElementChild;
  return {
    bodyChildren,
    lastButOneElementChild,
    lastElementChild,
  };
};
