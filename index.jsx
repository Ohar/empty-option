// Fix Firefox bug
// Prevent Firefox to show selected option when no option is selected in fact
// https://bugzilla.mozilla.org/show_bug.cgi?id=46845

import './styles.less';
import React from 'react';

export default function EmptyOption ({value = ''}) {
	return <option className="EmptyOption" value={value}></option>
}
