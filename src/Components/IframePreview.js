import Typography from '@mui/material/Typography';

function IframePreview({title, description, url}){
    return (
        <div className='display-flex flex-direction-column gap-m'>
            <Typography variant='h4' color="secondary">{title}</Typography>
            <Typography variant='h6' color='secondary'>{description}</Typography>
            <iframe style={{width:'100%', height:'500px'}} src={url}/>
        </div>
    )
}

export default IframePreview