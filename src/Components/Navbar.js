import { AppBar, Button, Toolbar } from "@mui/material";
import MyLinksIcons from "./MyLinksIcons";

function Navbar({ pages }) {
  return (
    <AppBar className="round-bottom-border" position="sticky" color="primary">
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          {pages.map((item, index) => (
            <Button
              color="secondary"
              key={index}
              onClick={goToPageSection(item.ref)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <MyLinksIcons />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

function goToPageSection(ref) {
  return () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Ref does not exist: " + ref.current);
    }
  };
}
