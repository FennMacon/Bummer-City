import React from 'react';
import Sidebar from './Sidebar';

const OpenMic = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>Bummer City Open Mic</i></h1>
	        	<p>words</p>
		    </div>
	         <Sidebar />
         </div>
   	);
};

export default OpenMic;