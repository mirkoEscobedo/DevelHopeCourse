const Color = ({ id, name }) => {
  return <li>{name}</li>;
};

const Colors = ({ colorList }) => {
  return (
    <ul>
      {colorList.map((color) => {
        <Color key={color.id} name={color.name}></Color>;
      })}
    </ul>
  );
};

export default Colors;
