const Header = (props) => {
  console.log(props);
  // const {message} = props;

  // props => data from the outside

  return (
    <div className={props.className}>
      <h2>{ props.message }</h2>

      {props.children}
    </div>
  );
};

export default Header;
