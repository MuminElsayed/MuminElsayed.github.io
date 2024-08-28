import Typography from '@mui/material/Typography';

function IframePreview({title, url}){
    return (
        <div>
            <Typography variant='h6' color="secondary">{title}</Typography>
            <iframe style={{width:'100%', height:'500px'}} src={url}/>
        </div>
    )
}

export default IframePreview