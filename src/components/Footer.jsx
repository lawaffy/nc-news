import logo from "../assets/ncnewz.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo" style={styles.logo} />
    </div>
  );
}

export default Footer;

const styles = {
  logo: {
    width: 50,
    height: 65,
  },
};
