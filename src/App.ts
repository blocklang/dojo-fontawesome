import { create, v, w } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import { library } from '@fortawesome/fontawesome-svg-core';

import * as css from './App.m.css';

import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import FontAwesomeIcon from './FontAwesomeIcon';

library.add(faPlus);

const factory = create({ theme });

export default factory(function App({ middleware: { theme } }) {
	return v('div', { classes: [css.root] }, [
		w(FontAwesomeIcon, {icon: 'plus'})
	]);
});
