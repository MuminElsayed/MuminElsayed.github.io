import ImagePreview from "./QuadImagePreview"

function PageSection({height, children, imageUrl}){
    return (
        <div className="display-flex align-items-center justify-content-space-between">
            <div className="display-flex align-items-center" style={{height:height}}>{children}</div>
            <ImagePreview imageUrl1={imageUrl} imageUrl2={imageUrl} imageUrl3={imageUrl} imageUrl4={imageUrl}/>
        </div>
    )
}

export default PageSection