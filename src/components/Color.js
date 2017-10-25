import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import './Color.css'

function ColorBox(props) {
  const backgroundColor = props.color
  const style = { backgroundColor }
  return <div className="Color-colorBox" style={style} />
}

function LabelValue(props) {
  const { label, value, id } = props
  return (
    <div className="Color-Label">
      <label htmlFor={id} className="Color-label">
        {label}:
      </label>
      <input
        id={id}
        type="text"
        className="Color-fixInput"
        value={value}
        onChange={doNothing}
      />
    </div>
  )
}

function doNothing() {}

function Color(props) {
  const { initiallyExpanded, info } = props

  const { title, css3, css4, jis, color, rgb, hsl, hwb, cmyk } = info

  const id = color
  return (
    <div className="Color">
      <Card initiallyExpanded={initiallyExpanded} expandable>
        <CardHeader title={title} actAsExpander showExpandableButton>
          <ColorBox color={color} />
        </CardHeader>
        <CardText expandable>
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
              id={`${id}-css3`}
            />
          ) : null}
          {jis ? (
            <LabelValue
              label="JIS Name"
              value={jis.join(', ')}
              id={`${id}-css3`}
            />
          ) : null}
          <LabelValue label="RGB" value={`rgb${rgb}`} id={`${id}-rgb`} />
          <LabelValue label="HSL" value={`hsl${hsl}`} id={`${id}-hsl`} />
          <LabelValue label="HWB" value={`hwb${hwb}`} id={`${id}-hwb`} />
          <LabelValue label="CYMK" value={`cmyk${cmyk}`} id={`${id}-cmyk`} />
        </CardText>
      </Card>
    </div>
  )
}

export default Color
