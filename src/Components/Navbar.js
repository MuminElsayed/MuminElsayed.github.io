import { AppBar, Button } from "@mui/material"

function Navbar({ pages }){
    return (
        <AppBar className="round-bottom-border" position="sticky" color="primary">
            <div style={{ display: 'flex', justifyContent:'center'}}>
                {pages.map((item, index) => (
                    <Button
                            color="secondary"
                            key={index}
                            onClick={goToPageSection(item.ref)}
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                        {item.name}
                    </Button>
                ))}</div>
        </AppBar>
    )
}

export default Navbar

function goToPageSection(ref) {
    return () => {
        if(ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("Ref does not exist: " + ref.current);
        }
    };
  }
  