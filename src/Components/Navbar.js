import { AppBar } from "@mui/material"
import { Tabs } from "@mui/material"
import { Tab } from "@testing-library/user-event/dist/tab"
import { Button } from "@mui/material"

function Navbar({ pages }){
    return (
        <AppBar className="round-bottom-border" position="sticky" color="primary">
            <div style={{ display: 'flex', justifyContent:'center'}}>{pages.map((item, index) => (
            <Button
                color="secondary"
                key={index}
                onClick={goToPage(item.url)}
                sx={{ my: 2, color: 'white', display: 'block' }}>
            {item.name}
        </Button>
        ))}</div>
        </AppBar>
    )
}

export default Navbar

function goToPage(Url){
    
}