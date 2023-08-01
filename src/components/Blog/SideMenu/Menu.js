import classes from './Menu.module.css';

const Menu = (props) => {
  return (
    <div className={classes.menu}>
      <div className={classes.top}>
        <div>MENU</div>
        <button>click</button>
      </div>
      <div className={classes.points}>
      <ul>
        <li>MY BLOGS</li>
        <li>ALL BLOGS</li>
      </ul>
      </div>
    </div>
  );
};

export default Menu;
