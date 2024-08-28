function PageSection({height, children}){
    return (
        <div className="display-flex align-items-center" style={{height:height}}>{children}</div>
    )
}

export default PageSection