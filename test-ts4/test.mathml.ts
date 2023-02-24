import { MathML } from '@jsxtools/dom'

export const example = new MathML('math', { display: 'inline' },
	new MathML('mfrac',
		new MathML('msup',
			new MathML('mi', 'π'),
			new MathML('mn', '2')
		),
		new MathML('mn', '6')
	)
)
