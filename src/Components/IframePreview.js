import Typography from "@mui/material/Typography";

function IframePreview({ title, description, url, height = "300px" }) {
  return (
    <div className="display-flex flex-direction-column gap-m">
      <Typography variant="h4" color="secondary">
        {title}
      </Typography>
      <Typography variant="h6" color="secondary">
        {description}
      </Typography>
      {url !== "" && (
        <iframe
          title={url}
          style={{ width: "100%", height: height }}
          src={url}
        />
      )}
    </div>
  );
}

export default IframePreview;
