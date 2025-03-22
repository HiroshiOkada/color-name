import React from 'react';
import { Card, CardHeader, CardContent, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import './Color.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: 'transform 0.15s ease-in-out',
}));

function ColorBox(props) {
  const backgroundColor = props.color;
  const style = { backgroundColor };
  return <div className="Color-colorBox" style={style} />;
}

function LabelValue(props) {
  const { label, value, id } = props;
  return (
    <div className="Color-Label">
      <label htmlFor={id} className="Color-label">
        {label}:
      </label>
      <TextField
        id={id}
        variant="outlined"
        size="small"
        value={value}
        InputProps={{
          readOnly: true,
        }}
      />
    </div>
  );
}

function Color(props) {
  const { info } = props;
  const { title, css3, css4, jis, color, rgb, hsl, hwb, cmyk } = info;
  const id = color;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="Color">
      <Card>
        <CardHeader
          action={
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          }
          title={title}
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {css3 ? (
              <LabelValue
                label="CSS3 name"
                value={css3.join(', ')}
                id={`${id}-css3`}
              />
            ) : null}
            {css4 ? (
              <LabelValue
                label="CSS4 name"
                value={css4.join(', ')}
                id={`${id}-css4`}
              />
            ) : null}
            {jis ? (
              <LabelValue
                label="JIS Name"
                value={jis.join(', ')}
                id={`${id}-jis`}
              />
            ) : null}
            <LabelValue label="RGB" value={`rgb${rgb}`} id={`${id}-rgb`} />
            <LabelValue label="HSL" value={`hsl${hsl}`} id={`${id}-hsl`} />
            <LabelValue label="HWB" value={`hwb${hwb}`} id={`${id}-hwb`} />
            <LabelValue label="CYMK" value={`cmyk${cmyk}`} id={`${id}-cmyk`} />
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default Color;
