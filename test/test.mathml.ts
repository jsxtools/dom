import { MathML } from '@jsxtools/dom'

export const example = new MathML.Element('math', { display: 'inline' },
	new MathML.Element('mfrac',
		new MathML.Element('msup',
			new MathML.Element('mi', 'π'),
			new MathML.Element('mn', '2')
		),
		new MathML.Element('mn', '6')
	)
)
