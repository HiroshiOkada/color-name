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
    <CardText expandable>
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
    </CardText>
  )
}

function doNothing() {}

function Color(props) {
  console.log(props)

  const { initiallyExpanded, info } = props

  const { title, cssName, color, rgb, hsl, hwb, cmyk, otherNames } = info

  const id = color
  return (
    <div className="Color">
      <Card initiallyExpanded={initiallyExpanded} expandable>
        <CardHeader title={title} actAsExpander showExpandableButton>
          <ColorBox color={color} />
        </CardHeader>
        <CardText expandable>
          <LabelValue label="CSS Name" value={cssName} id={`${id}-cssName`} />
          <LabelValue label="RGB" value={`rgb${rgb}`} id={`${id}-rgb`} />
          <LabelValue label="HSL" value={`hsl${hsl}`} id={`${id}-hsl`} />
          <LabelValue label="HWB" value={`hwb${hwb}`} id={`${id}-hwb`} />
          <LabelValue label="CYMK" value={`cmyk${cmyk}`} id={`${id}-cmyk`} />
          <CardText expandable>
            {otherNames.map(name => (
              <input
                key={`${id}-other-${name}`}
                type="text"
                className="Color-fixInputOther"
                value={name}
                style={{ width: `${name.length + 1}em` }}
                onChange={doNothing}
              />
            ))}
          </CardText>
        </CardText>
      </Card>
    </div>
  )
}

export default Color
