import React from "react"

const Footer = () => {
  return (
    <section className="radial-gradient">
      <div className="footer-container">
        <footer>
          <address>
            <div className="grid-triple-container">
              <div>
                <h3 className="">Central Europe</h3>
                <p>
                  Żmigrodzka 244 <br />
                  51-131 Wrocław, Poland <br />
                  <br />
                  +48 609 38 05 04 <br />
                  +48 793 086 087 <br />
                  office@oakfusion.pl <br />
                </p>
              </div>
              <div>
                <h3 className="">Western Europe</h3>
                <p>
                  c/o Impact Hub Vienna
                  <br />
                  Lindengasse 56/18-19
                  <br />
                  1070 Wien, Austria
                  <br />
                  <br />
                  +43 69919064248
                  <br />
                  vienna@oakfusion.com
                  <br />
                </p>
              </div>
              <div>
                <h3 className="">Northern Europe</h3>
                <p>
                  Anckargripsgatan 3<br />
                  211 19-SE Malmö Sweden
                  <br />
                  <br />
                  +46 70 615 30 10
                  <br />
                  office@oakfusion.pl
                  <br />
                </p>
              </div>
            </div>
          </address>
          <div className="flex-between">
            <div>Copytight</div>
            <div>Part of Oakfusion Group</div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
