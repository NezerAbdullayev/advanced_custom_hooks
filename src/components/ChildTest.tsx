import { useMount } from "../hooks/useMount";

const ChildTest = () => {
  useMount(() => console.log("ChildTest re-render"));
  console.log("child normal re-rendering");

  return <div>children component</div>;
};

export default ChildTest;
