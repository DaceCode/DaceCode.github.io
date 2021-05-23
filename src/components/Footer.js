function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div fluid className="footer">
      <div className="row">
        <div className="col-6 footer-copyright">
          <p> &copy; {year} DaceCode </p>
        </div>

        <div className="col-6">
          <a href="#body">#top</a>
        </div>
      </div>
      <hr/>
      <div className="footer-credit">
        <p>
          Designed and Developed by{" "}
          <a href="https://github.com/bkanhu/" target="_blank">
            B Kanhu Charan
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
